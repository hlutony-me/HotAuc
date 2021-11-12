const express = require("express")
const router = express.Router()
//Middleware
const auth = require("../../middleware/auth")

//@route   GET api/user
//@desc    Test route
//@access  Public
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password")
		res.json(user)
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "User not authenticated" })
	}
})

module.exports = router
