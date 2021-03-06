const express = require("express")
const router = express.Router()
const gravatar = require("gravatar")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")


const User = require("../../models/user")

//Config .env
require("dotenv").config()

//@route   POST api/auth/register
//@desc    Register user
//@access  Public
router.post(
	"/register",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { name, email, password } = req.body

		try {
			let user = await User.findOne({ email })
			if (user) {
				return res.status(400).json({ errors: [{ msg: "user already exist" }] })
			}

			const avatar = gravatar.url(email, {
				s: "200",
				r: "pg",
				d: "mm"
			})

			user = new User({
				name,
				email,
				avatar,
				password
			})

			const salt = await bcrypt.genSalt(10)

			user.password = await bcrypt.hash(password, salt)

			await user.save()

			const payload = {
				user: {
					id: user.id
				}
			}
			try {
				token = await jwt.sign(payload, process.env.JWT_SECRET, {
					expiresIn: 360000
				})
				const respondUser = {
					_id: user._id,
					email: user.email,
					name: user.name
				}

				return res.json({ user: respondUser, token })
			} catch (err) {
				return res.status(500).json({ msg: "Token not generated" })
			}
		} catch (err) {
			return res.status(500).json({ msg: "Server Error" })
		}
	}
)

//@route   POST api/auth/login
//@desc    Authenticate user and get token
//@access  Public
router.post(
	"/login",
	[
		check("email", "Please include a valid email").isEmail(),
		check("password", "password is required").exists()
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { name, email, password } = req.body

		try {
			let user = await User.findOne({ email })
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] })
			}

			const isMatch = await bcrypt.compare(password, user.password)
          
			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] })
			}

			const payload = {
				user: {
					id: user.id
				}
			}
			try {
				token = await jwt.sign(payload, process.env.JWT_SECRET, {
					expiresIn: 36000000
				})
				const respondUser = {
					_id: user._id,
					email: user.email,
					name: user.name
				}
				return res.json({ user: respondUser, token })
			} catch (err) {
				return res.status(500).json({ msg: "Token not generated" })
			}
		} catch (err) {
			return res.status(500).json({ msg: "Server Error" })
		}
	}
)

module.exports = router
