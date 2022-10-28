// const express = require('express')()
// const app = express()

// var server = app.listen(3002)
// server.close();
// console.log("AaAa1")

const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
// const sequelize = require('./models/index')
app.use(
    cors({ 
        origin: '*'
    })
)

app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));

// sequelize.sync().then(() => {
    
// })

const mysql = require('mysql2');

const userRoute = require('./routes/routes');
app.use('/video', userRoute);

const db = require('./models');

db.sequelize.sync().then((req) => {
    console.log('connected!');
})

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: '86798679',
//     database: 'peer_video_db'
// })


const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        // methods: ["GET", "POST"]
    }
})

app.use(cors());

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Server is running.");
})

server.listen(process.env.PORT || PORT, () => console.log(`Server listening on port ${PORT}`));

io.on("connection", (socket) => {
    socket.emit('me', socket.id);
    // socket.emit('me2', socket.id);
    socket.emit('chat-message', 'Hello world')

    socket.on('disconnect', () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({userToCall, signalData, from, name }) => {
        console.log('here')
        io.to(userToCall).emit("calluser", { signal: signalData, from, name });
    });

    socket.on("getUid", ({userToCall, payload }) => {
        console.log('here')
        io.to(userToCall).emit("getUid", payload);
    });

    socket.on("getUid", ({userToCall, signalData, from, name }) => {
        console.log('on socket2')
        io.to(userToCall).emit("calluser2", { signal: signalData, from, name });
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });
    socket.on('answerCall2', (data) => {
        io.to(data.to).emit("connectionAccepted", { signal: signalData, from, name});
    })
});

// server.close();

console.log("Test");