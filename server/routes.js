const express = require("express")
const TEST = require("./models/Test")
const router = express.Router()

// Get all posts
router.get("/test", async (req, res) => {
	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
	const ele=await TEST.findOne({name:"hello4"}).exec();
	console.log(ele)
	res.send(ele)
})



module.exports = router