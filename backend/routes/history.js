const router = require('express').Router();
const History = require('../models/History');
const {verifyToken} = require('../verification.js')



// ONly last 5 history
router.get("/", verifyToken, async(req,res) => {
	try {
		const history = await History.find().sort({ createdAt: -1 }).limit(5);
		res.status(200).json(history) 
	} catch(e) {
		console.log(e);
		res.status(500).json(e)
	}
})

module.exports = router