const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contactSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
var contact=mongoose.model('contact', contactSchema);

module.exports=contact;