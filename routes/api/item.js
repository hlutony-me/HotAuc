const express = require("express")
const router = express.Router()
//Middleware
const auth = require("../../middleware/auth")
const AuctionItem = require("../../models/auction_item")


//@route   GET api/item/all
//@desc    Test route
//@access  Public
router.get('/all',async(req, res) => {
    //res.json({message: "Hello item"});
	try {
        const items = await AuctionItem.find();
        //const items = await AuctionItem.find({title: /a/ });
		res.json(items)        
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - all" })
	}
});

//@route   GET api/item/search
//@desc    Test route
//@access  Public
router.get('/search',async(req, res) => {
    //res.json({message: "Hello item"});
	//const { title } = req.body
    var title = req.query.title	
	//var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
	try {
        //const items = await AuctionItem.find(condition);
        const items = await AuctionItem.find({ title: { $regex: new RegExp(title), $options: "i" }});
		res.json(items)        
        //res.json({message: "Hello id " + title});
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - search title" })
	}
});

//@route   GET api/item/id
//@desc    Test route
//@access  Public
router.get('/id',async(req, res) => {
    var id = req.query.id	
	try {
        const item = await AuctionItem.findById(id);
		res.json(item)		
        //res.json({message: "Hello id " + id});
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - id" })
	}
});
module.exports = router