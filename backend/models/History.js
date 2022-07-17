const mongoose = require('mongoose')
const HistorySchema = new mongoose.Schema({
	calculatedHistory:{
		type:String,
		default:''
	}
},
{ timestamps:true }
);


module.exports = mongoose.model("History",HistorySchema)