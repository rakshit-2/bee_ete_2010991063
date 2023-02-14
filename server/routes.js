const express = require("express")
const TEST = require("./models/Test")
const USER = require("./models/user")
const Logger=require('./connect/logg')
const bcrypt = require('bcrypt');
const router = express.Router()



// // Get all tests
router.get("/test", async (req, res) => {
	// const ele=await TEST.insertMany([{id:0,name:"hello0"},{id:1,name:"hello1"},{id:2,name:"hello2"}])
	// const ele=await TEST.findOne({name:"hello2"}).exec();
	res.send("hello")
})


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
				const ele=await USER.insertMany([{user_name:name,user_email:email,user_pass:pass,user_updated:false,user_image:"face1.jpg"}]);
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
			user_count:0,
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
			Logger.Logg.error("Failed Match Get")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})







router.post("/search/user-get", async (req, res) => {
	Logger.Logg.info("-----------server/search/user-get")
	var email=req.body.email;
	try 
	{
		const ele=await USER.findOne({user_email:email}).exec();
		if(ele!==null)
		{

			Logger.Logg.success("Successfull Email Match User")
			if(ele.user_gender==="Male")
			{
				const ele1=await USER.find({user_gender:"Female",user_updated:true}).exec();
				if(ele1!=null)
				{
					Logger.Logg.success("Success Fetech all Female")
					res.status(200).send({data:ele1,message:"Success",data1:ele})
				}
				else
				{
					Logger.Logg.error("Failed Fetech all Female")
					res.status(200).send({data:{},message:"Failed"})
				}
				
			}
			else
			{
				const ele2=await USER.find({user_gender:"Male",user_updated:true}).exec();
				if(ele2!=null)
				{
					Logger.Logg.success("Success Fetech all Male")
					res.status(200).send({data:ele2,message:"Success",data1:ele})
				}
				else
				{
					Logger.Logg.error("Failed Fetech all Male")
					res.status(200).send({data:{},message:"Failed"})
				}
			}
			
		}
		else
		{
			Logger.Logg.error("Failed Match Get The User")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})



router.post("/profile/member-payment", async (req, res) => {
	Logger.Logg.info("-----------server/profile/member-payment")
	var email=req.body.email;
	var price=req.body.price;
	try 
	{
		var val=0;
		var pack="none"
		if(price===19)
		{
			val=5;
			pack="Base"
		}
		else if(price===29)
		{
			val=10;
			pack="Pro"
		}
		else if(price===49)
		{
			val=20;
			pack="Ultra"
		}
		const ele=await USER.findOne({user_email:email}).exec();
		const check_email = { user_email: email };
		const check_update= 
		{ 
			user_count:ele.user_count+val,
			user_pack:pack
		}
		const ele1=await USER.findOneAndUpdate(check_email,check_update);
		Logger.Logg.success("Successfull Updation Count")
		res.status(200).send({message:"Success"})
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})




router.post("/search/connect-user", async (req, res) => {
	Logger.Logg.info("-----------server/search/connect-user")
	var toEmail=req.body.toEmail;
	var email=req.body.email;
	try 
	{
		const ele1=await USER.findOne({user_email:email}).exec();
		const ele2=await USER.findOne({user_email:toEmail}).exec();
		if(ele1.user_count<=0)
		{
			Logger.Logg.success("Req not sent Subscription over!!")
			res.status(200).send({message:"Subscription Over"})
		}
		else
		{
			const check_email1 = { user_email: email };
			const check_update1= 
			{ $push: 
				{ user_send: ele2 } 
			}
			const check_email2 = { user_email: toEmail };
			const check_update2= 
			{ $push: 
				{ user_recieve: ele1 } 
			}
			const ele3=await USER.findOneAndUpdate(check_email1,check_update1);
			const ele4=await USER.findOneAndUpdate(check_email2,check_update2);
	
			const check_email = { user_email: email };
			const check_update= 
			{ 
				user_count:ele1.user_count-1,
			}
			const ele6=await USER.findOneAndUpdate(check_email,check_update);
			Logger.Logg.success("Successfull req sent")
			res.status(200).send({message:"Success"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})


router.post("/search/remove-user", async (req, res) => {
	Logger.Logg.info("-----------server/search/remove-user")
	var toEmail=req.body.toEmail;
	var email=req.body.email;
	try 
	{
		const ele1=await USER.findOne({user_email:email}).exec();
		const ele2=await USER.findOne({user_email:toEmail}).exec();
		const check_email1 = { user_email: email };
		const check_update1= 
		{ $pull: 
			{ user_send: {_id:ele2._id} } 
		}
		const check_email2 = { user_email: toEmail };
		const check_update2= 
		{ $pull: 
			{ user_recieve: {_id:ele1._id} } 
		}
		const ele3=await USER.findOneAndUpdate(check_email1,check_update1);
		const ele4=await USER.findOneAndUpdate(check_email2,check_update2);
		Logger.Logg.success("Successfull req removed")
		res.status(200).send({message:"Success"})
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})




router.post("/search/accept-request", async (req, res) => {
	Logger.Logg.info("-----------server/search/accept-request")
	var toEmail=req.body.toEmail;
	var email=req.body.email;
	try 
	{
		const ele1=await USER.findOne({user_email:email}).exec();
		const ele2=await USER.findOne({user_email:toEmail}).exec();
		const check_email1 = { user_email: email };
		const check_update1= 
		{ $pull: 
			{ user_send: {_id:ele2._id} },
		}
		const check_email2 = { user_email: toEmail };
		const check_update2= 
		{ $pull: 
			{ user_recieve: {_id:ele1._id} } 
		}
		const ele3=await USER.findOneAndUpdate(check_email1,check_update1);
		const ele4=await USER.findOneAndUpdate(check_email2,check_update2);

		const check_email11 = { user_email: email };
		const check_update11= 
		{ $pull: 
			{ user_recieve: {_id:ele2._id} },
		}
		const check_email22 = { user_email: toEmail };
		const check_update22= 
		{ $pull: 
			{ user_send: {_id:ele1._id} } 
		}
		const ele33=await USER.findOneAndUpdate(check_email11,check_update11);
		const ele44=await USER.findOneAndUpdate(check_email22,check_update22);

		const check_email3 = { user_email: email };
		const check_update3= 
		{ $push: 
			{ user_accepted: ele2 } 
		}
		const check_email4 = { user_email: toEmail };
		const check_update4= 
		{ $push: 
			{ user_accepted: ele1 } 
		}

		const ele5=await USER.findOneAndUpdate(check_email3,check_update3);
		const ele6=await USER.findOneAndUpdate(check_email4,check_update4);
		Logger.Logg.success("Successfull req accepted")
		res.status(200).send({message:"Success"})
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})






//fetch all

router.post("/admin/get-all-users", async (req, res) => {
	Logger.Logg.info("-----------server/admin/get-all-users")
	// var email=req.body.email;
	try 
	{
		const ele=await USER.find().exec();
		if(ele!==null)
		{
			Logger.Logg.success("Successfull Get admin all")
			res.status(200).send({data:ele,message:"Success"})
		}
		else
		{
			Logger.Logg.error("Failed Get admin all")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})



router.post("/admin/delete-email-users", async (req, res) => {
	Logger.Logg.info("-----------server/admin/delete-email-users")
	var email=req.body.email;
	try 
	{
		const ele1=await USER.deleteMany({user_email:email}).exec();
		if(ele1!==null)
		{
			Logger.Logg.success("Successfull deletion")
			res.status(200).send({data:ele1,message:"Success"})
		}
		else
		{
			Logger.Logg.error("Failed deletion")
			res.status(200).send({data:{},message:"failed"})
		}
		
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})




router.post("/profile/insert-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/insert-data")
	const saltfuck = bcrypt.genSaltSync(10);
	const pass = bcrypt.hashSync("Abc@1234", saltfuck);
	var name=req.body.name;
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
		const ele=await USER.insertMany([{user_name:name,user_email:email,user_pass:pass,user_updated:true,user_image:"face1.jpg",
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
		user_count:0,
		user_hobby:hobby,
		user_about:about,
		user_zodiac:zodiac,
		user_dob:dob,
		user_motherTongue:motherTongue,
		user_secLang:secLang}]);
		Logger.Logg.success("Successfull Insrtion")
		res.status(200).send({message:"Success"})
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})



module.exports = router