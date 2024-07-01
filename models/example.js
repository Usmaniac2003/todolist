const mongoose=require('mongoose');

//Schema for Short URL 
const ExampleSchema=new mongoose.Schema(
{

    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    Name:{
        type:String,
        required:true,
    }
}
,{timestamps:true});


//Model of Short URL
const Example=new mongoose.model('Example',ExampleSchema);

module.exports=Example;