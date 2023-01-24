
const mongoose = require("mongoose");

const schema = mongoose.Schema;

let ele = new schema({
	user_name:{
		type:String
	},
	user_email:{
		type:String
	},
	user_pass:{
		type:String
	},
	user_DOB:{
		type:String
	},
	user_gender:{
		type:String
	},
	user_contact:{
		type:String
	},
	user_religion:{
		type:String
	},
	user_country:{
		type:String
	},
	user_state:{
		type:String
	},
	user_height:{
		type:String
    },
	user_edu:{
		type:String
	},
	user_occu:{
		type:String
	},
	user_sallary:{
		type:String
	},
	user_marstat:{
		type:String
	},
	user_image:{
		data:Buffer,
        contentType:String
	},
	user_pack:{
		type:String
	},
	user_address:{
		type:String
	},
	user_hobby:{
		type:String
	},
	user_about:{
		type:String
	},
	user_send:
    {
        type:Array,
    },
    user_recieve:
    {
        type:Array,
    },
    user_accepted:
    {
        type:Array,
    }
    
})

module.exports = mongoose.model("user", ele)