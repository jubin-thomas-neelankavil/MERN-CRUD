const mongoose = require('mongoose');
// const autoincrement = require('mongoose-auto-increment')

const userSchema = mongoose.Schema({
  
    name: {
    type:String,required:true
    },
    username : {
        type: String ,required:true
    },
    email: {
        type:String , required:true
    },
    phone: {
        type:String,required:true
    }


});

// autoincrement.initialize(mongoose.Collection);
// userSchema.plugin(autoincrement.plugin,'User')

const User = mongoose.model('User', userSchema); 

module.exports = User;





