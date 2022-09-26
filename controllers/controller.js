const {session } = require("../models")
const {userid_record} = require("../models")
const {session_record} = require("../models")

module.exports = {
async get2(req,res) {
	try {
		console.log(session)
		res.send("HELLO")
	} catch (err) {
		res.status(500).send({
			error: "Something went wrong " + err
		})
	}
},

async postUserId(req,res) {
	console.log('flag');
	try {
		const userId = await userid_record.findOne({
			where: { name: req.body.name}
		});
		if (userId === null) {
			console.log(req.body.name + ' is not in DB')
			await userid_record.create(req.body);
		} else {
			console.log(req.body.name + ' is in DB')
			userId.update({
				signalId: req.body.signalId,
			})
		}
		// const newUserId = await userid_record.create(req.body);
		// console.log('flag2');
		res.status(200).send();
	} catch (err) {
		console.log(err);
		res.status(500).send({
			error: "Something went wrong " + err
		})
	}
},

async getUserId(req, res) {
	try {
		console.log(req.query)
		const userId = await userid_record.findOne({
			where: {name: req.query.name}
		});
		res.send(userId.signalId);
	} catch(err) {
		res.status(500).send({
			error: "Something went wrong " + err
		})
	}
},

async postSession(req, res) {
	console.log('flag2')
	try {
		const sessionId = await session_record.findOne({
			where: { uuid: req.body.uuid}
		});
		if (sessionId == null) {
			await session_record.create(req.body);
		} else {
			sessionId.update({
				user2Expression: req.body.user2Expression
			})
		}
	} catch(err) {
		res.status(500).send({
			error: "Something went wrong " + err
		})
	}
}


}