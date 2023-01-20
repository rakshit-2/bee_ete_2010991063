const express = require("express")
const TEST = require("./models/Test")
const router = express.Router()

// Get all posts
router.get("/test", async (req, res) => {
	const ele=await TEST.insertMany({id:1,name:"hello"},{id:2,name:"hello2"})
	// console.log(ele)
	res.send(ele)
})



module.exports = router