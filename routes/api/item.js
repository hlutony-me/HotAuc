const express = require("express")
const router = express.Router()
//Middleware
const auth = require("../../middleware/auth")
const AuctionItem = require("../../models/auction_item")

//@route   GET api/item/all
//@desc    Test route
//@access  Public
router.get("/all", async (req, res) => {
	//res.json({message: "Hello item"});
	try {
		const items = await AuctionItem.find()
		//const items = await AuctionItem.find({title: /a/ });
		res.json(items)
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - all" })
	}
})

//@route   GET api/item/search
//@desc    Test route
//@access  Public
router.get("/search", async (req, res) => {
	//res.json({message: "Hello item"});
	//const { title } = req.body
	var title = req.query.title
	//var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
	try {
		//const items = await AuctionItem.find(condition);
		const items = await AuctionItem.find({
			title: { $regex: new RegExp(title), $options: "i" }
		})
		res.json(items)
		//res.json({message: "Hello id " + title});
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - search title" })
	}
})

//@route   GET api/item/id
//@desc    Test route
//@access  Public
router.get("/:id", async (req, res) => {
	var id = req.params.id
	try {
		const item = await AuctionItem.findById(id)
		res.json(item)
		//res.json({message: "Hello id " + id});
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ msg: "Auction Item search error - id" })
	}
})

//@route   Post api/item/
//@desc    Test route
//@access  Public
router.post('/',async (req, res) => {    
    const item = new AuctionItem(req.body);
    await item.save().then((item) => {
        res.status(201).send(item);
    }).catch((error) => {
        res.status(400).send(error);
    })    
})

//@route   Put api/item/{id}
//@desc    Test route
//@access  Public
router.put('/:id', function(req, res, next) {
	AuctionItem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });

//@route   Delete api/item/{id}
//@desc    Test route
//@access  Public
router.delete('/:id', function(req, res, next) {
	AuctionItem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });

module.exports = router
