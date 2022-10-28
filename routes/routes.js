const express = require('express');
const router = express.Router()

const controller = require('../controllers/controller')
const {UserID_Record} = require('../models/UserId_record.js');
// router.get('/test1', controller.get)
router.get('/test2', controller.get2)

router.post('/postUser', controller.postUserId)

router.get('/getUser', controller.getUserId)

router.post('/postSession', controller.postSession)

// router.post('/postUser', (req,res) => {
//     UserID_Record.create({
//         name: "Arman",
//         signalId: "123321",
//     })
// })
// router.put('/updateUser', controller.updateUserId)

module.exports = router