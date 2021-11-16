const mongoose = require("mongoose")

const AuctionItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	year: {
		type: String,
		required: true
	},

	endTime: {
		type: Date,
		required: true
	},
	startingPrice: {
		type: Number,
		required: true
	},
	images: [
		{
			uri: {
				type: String
			}
		}
	],
	bids: [
		{
			price: {
				type: Number
			},
			bidder: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "user"
			},
			bidTime: {
				type: Date
			}
		}
	],
	winner: {
		price: {
			type: Number
		},
		bidder: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		},
		bidTime: {
			type: Date
		}
	}
})

const AuctionItem = mongoose.model("auction-item", AuctionItemSchema)

module.exports = AuctionItem
