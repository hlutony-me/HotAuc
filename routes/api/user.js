const express = require("express")
const router = express.Router()
//Middleware
const auth = require("../../middleware/auth")

const User = require('../../models/user')
const Item = require('../../models/auction_item')

//@route   GET api/user
//@desc    Test route
//@access  Public
router.get("/", auth, async (req, res) => {
	try {
		const user = await Item.findById(req.user.id).select("-password")
		res.json(user)
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "User not authenticated" })
	}
})

//@route   GET api/user
//@desc    Test route
//@access  Public
router.get("/:userId", auth, async (req, res) => {
	var userId = req.params.userId
	try {
		const items = await Item.find({ "bids.bidder": { $in: [userId] } })
		res.json(items)
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "User not authenticated" })
	}
})

router.put("/:userId", auth, async (req, res) => {
	var userId = req.params.userId
})

module.exports = router
