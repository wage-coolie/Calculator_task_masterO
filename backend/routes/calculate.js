const router = require('express').Router();
const History = require('../models/History');
const {verifyToken} = require('../verification.js')


router.post("/", verifyToken, async (req,res) => {
	try {
		const result = await eval(`${req.body.expression}`)
		const history = await new History({calculatedHistory: `${req.body.expression} = ${result}`})
		await history.save();
		res.status(200).json(result)
	} catch(e) {
		// statements
		res.status(500).json("Something seems fishy, please try again")
	}

})

module.exports = router