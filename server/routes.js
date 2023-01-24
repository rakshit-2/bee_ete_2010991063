const express = require("express")
const TEST = require("./models/Test")
const router = express.Router()

// Get all tests
router.get("/test", async (req, res) => {
	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
	// const ele=await TEST.findOne({name:"hello2"}).exec();
	console.log(ele)
	res.send(ele)
})


// Get all posts
router.post("/post/profile/details", async (req, res) => {
	var name=req.body.name;
	var email=req.body.email;
	var dob=req.body.dob;
	var gender=req.body.gender;
	var contact=req.body.contact;
	var religion=req.body.religion;
	var country=req.body.country;
	var state=req.body.state;
	var lang=req.body.lang;
	var height=req.body.height;
	var edu=req.body.edu;
	var occu=req.body.occu;
	var sallary=req.body.sallary;
	var marstat=req.body.marstat;
	var image=req.body.image;
	var pack=req.body.pack;
	var address=req.body.address;
	var hobby=req.body.hobby;
	var about=req.body.about;
	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
	// const ele=await TEST.findOne({name:"hello2"}).exec();
	console.log(ele)
	res.send(ele)
})




module.exports = router