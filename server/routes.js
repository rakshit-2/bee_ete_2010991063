const express = require("express")
const TEST = require("./models/Test")
const USER = require("./models/user")
const Logger=require('./connect/logg')
const bcrypt = require('bcrypt');
const router = express.Router()



// // Get all tests
// router.get("/test", async (req, res) => {
// 	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
// 	// const ele=await TEST.findOne({name:"hello2"}).exec();
// 	console.log(ele)
// 	res.send(ele)
// })


// // Get all posts
// router.post("/post/profile/details", async (req, res) => {
// 	var name=req.body.name;
// 	var email=req.body.email;
// 	var dob=req.body.dob;
// 	var gender=req.body.gender;
// 	var contact=req.body.contact;
// 	var religion=req.body.religion;
// 	var country=req.body.country;
// 	var state=req.body.state;
// 	var lang=req.body.lang;
// 	var height=req.body.height;
// 	var edu=req.body.edu;
// 	var occu=req.body.occu;
// 	var sallary=req.body.sallary;
// 	var marstat=req.body.marstat;
// 	var image=req.body.image;
// 	var pack=req.body.pack;
// 	var address=req.body.address;
// 	var hobby=req.body.hobby;
// 	var about=req.body.about;
// 	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
// 	// const ele=await TEST.findOne({name:"hello2"}).exec();
// 	console.log(ele)
// 	res.send(ele)
// })





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
				const ele=await USER.insertMany([{user_name:name,user_email:email,user_pass:pass,user_updated:false}]);
				const ele1=await USER.findOne({user_email:email}).exec();
				res.status(200).send({message:"createdSuccess",data:email})
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
				res.status(200).send({message:"loginSuccess",data:email});
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







// --------------------------------------------------------------------------------
// profile get data
// --------------------------------------------------------------------------------



// fetch profile data
router.post("/profile/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/get-data")
	var email=req.body.email;
	try 
	{
        const ele=await USER.findOne({user_email:email}).exec();
		
        if(ele!==null)
		{
			res.status(200).send({message:"fetchSuccess",data:ele});
			Logger.Logg.success("profileFetchSuccess")
		}
		else
		{
			Logger.Logg.error("profileFetchFailed")
			res.status(200).send({message:"fetchFailed",data:{}});
		}
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})




// post profile data

router.post("/profile/post-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/post-data")
	var email=req.body.email;
	var age=req.body.age;
	var gender=req.body.gender;
	var address=req.body.address;
	var contact=req.body.contact;
	var religion=req.body.religion;
	var state=req.body.state;
	var height=req.body.height;
	var edu=req.body.edu;
	var occu=req.body.occu;
	var sallary=req.body.sallary;
	var marstat=req.body.marstat;
	var image=req.body.image;
	var hobby=req.body.hobby;
	var about=req.body.about;
	var zodiac=req.body.zodiac;
	var dob=req.body.dob;
	var motherTongue=req.body.motherTongue;
	var secLang=req.body.secLang;
	try 
	{
		const check_email = { user_email: email };
		const check_update= 
		{ 
			user_updated:true,
			user_age:age,
			user_gender:gender,
			user_address:address,
			user_contact:contact,
			user_religion:religion,
			user_height:height,
			user_edu:edu,
			user_state:state,
			user_occu:occu,
			user_sallary:sallary,
			user_marstat:marstat,
			user_image:image,
			user_pack:0,
			user_hobby:hobby,
			user_about:about,
			user_zodiac:zodiac,
			user_dob:dob,
			user_motherTongue:motherTongue,
			user_secLang:secLang
		}
        const ele=await USER.findOneAndUpdate(check_email,check_update);
		Logger.Logg.success("Successfull Updation")
		res.status(200).send({message:"Success"})
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})







router.post("/profile/matched-get", async (req, res) => {
	Logger.Logg.info("-----------server/profile/matched-get")
	var email=req.body.email;
	try 
	{
		const ele=await USER.findOne({user_email:email}).exec();
		if(ele!==null)
		{
			Logger.Logg.success("Successfull Match Get")
			res.status(200).send({data:ele.user_accepted,message:"Success"})
		}
		else
		{
			Logger.Logg.success("Failed Match Get")
			res.status(200).send({data:ele.user_accepted,message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})





router.post("/profile/user-sent-get", async (req, res) => {
	Logger.Logg.info("-----------server/profile/user-sent-get")
	var email=req.body.email;
	try 
	{
		const ele=await USER.findOne({user_email:email}).exec();
		if(ele!==null)
		{
			Logger.Logg.success("Successfull Match Get")
			res.status(200).send({data:ele.user_send,message:"Success"})
		}
		else
		{
			Logger.Logg.success("Failed Match Get")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})



router.post("/profile/user-recived-get", async (req, res) => {
	Logger.Logg.info("-----------server/profile/user-recived-get")
	var email=req.body.email;
	try 
	{
		const ele=await USER.findOne({user_email:email}).exec();
		if(ele!==null)
		{
			Logger.Logg.success("Successfull Match Get")
			res.status(200).send({data:ele.user_recieve,message:"Success"})
		}
		else
		{
			Logger.Logg.success("Failed Match Get")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})














module.exports = router