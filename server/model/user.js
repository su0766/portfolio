const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // make 10 len of salts
const jwt = require('jsonwebtoken'); // synchronous sign

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, //no spacebar
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {
        type: String, //availability check
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function( next ){
    // Hash password using bycrypt 
    var user = this;
    if (user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    // make token complied with user._id and secret token
    var user = this;
    var token = jwt.sign(user._id.toHexString(), '1234')
    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}
userSchema.statics.findByToken = function(token, cb){
    var user = this;
    //decode token
    // user._id + '' = token
    jwt.verify(token, '1234', function(err, decoded){
        //find user -> compare client token with db token
        user.findOne({"_id": decoded, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user)
        })
    })

    // jwt.verify(token, 'token', function(err, decoded){
    //     console.log(decoded.foo) //bar
    // })

}

const User = mongoose.model('User', userSchema)
module.exports = { User }
