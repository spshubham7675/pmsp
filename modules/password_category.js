const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sp:Shubham1998@pms.lovvn.mongodb.net/pms?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true});
var conn =mongoose.Collection;
var passcatSchema =new mongoose.Schema({
    password_category: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

    date:{
        type: Date, 
        default: Date.now }
});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports=passCateModel
