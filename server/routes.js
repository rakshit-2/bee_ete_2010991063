const express = require("express")
const TEST = require("./models/Test")
const USER = require("./models/user")
const Logger=require('./connect/logg')
const bcrypt = require('bcrypt');

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





// --------------------------------------------------------------------------------
// Auth working signin / signup api check
// --------------------------------------------------------------------------------

// signup check
router.post("/post/sign-up", async (req, res) => {
	Logger.Logg.info("-----------server/post/sign-up")
	var name=req.body.name;
	var email=req.body.email;
	const saltfuck = bcrypt.genSaltSync(10);
	const pass = bcrypt.hashSync(req.body.pass, saltfuck);
	try 
	{
        const ele=await USER.findOne({user_email:email}).exec();
        if(ele!==null)
		{
			Logger.Logg.error("Existing user!!")
			res.status(200).send({message:"alreadyExist",data:false});
		}
		else
		{
			try
			{
				const ele=await USER.insertMany([{user_name:name,user_email:email,user_pass:pass}]);
				const ele1=await USER.findOne({user_email:email}).exec();
				res.status(200).send({message:"createdSuccess",data:ele1._id})
				Logger.Logg.success("User Created Success!!")
			}
			catch(error) {
				res.status(404).json({message:error.message});
				Logger.Logg.error(error.message);
			}
		}
    }
	catch (error) 
	{
		Logger.Logg.error(error.message);
        res.status(404).json({message:error.message});
    }
})



// Signin Check
router.post("/post/sign-in", async (req, res) => {
	Logger.Logg.info("-----------server/post/sign-in")
	var email=req.body.email;
	var pass=req.body.pass;
	try 
	{
        const ele=await USER.findOne({user_email:email}).exec();
		
        if(ele!==null)
		{
			if (bcrypt.compareSync(pass,ele.user_pass))
			{
				res.status(200).send({message:"loginSuccess",data:ele._id});
				Logger.Logg.success("User LogIn Success!!")
			}
			else
			{
				Logger.Logg.error("User LogIn Failed!!")
				res.status(200).send({message:"loginFailed",data:false});
			}
			
		}
		else
		{
			Logger.Logg.error("User LogIn Failed!!")
			res.status(200).send({message:"loginFailed",data:false});
		}
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})






module.exports = router