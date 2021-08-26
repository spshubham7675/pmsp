const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sp:Shubham1998@cluster0.s1ncj.mongodb.net/PMS?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true});
var conn =mongoose.Collection;
var userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },},
    password: {
        type:String, 
        required: true
    },
    date:{
        type: Date, 
        default: Date.now }
});

var userModel = mongoose.model('users', userSchema);
module.exports=userModel