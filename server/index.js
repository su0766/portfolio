const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');
const { User } = require("./model/users");
const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

//mongoose를 통한 mongodb통신
const mongoose = require('mongoose')
// const user = require('../server/model/user');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('dd')
})


app.post('/register', (req, res)=>{
    //회원가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 db에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.post('/login', (req, res) => {
  //request e-mail from db
  //if it exists, check the correct passwd
  //if it is correct, make token
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "Check your e-mail again"
      })
    }

    user.comparePassword(req.body.password , (err, isMatch) => {
      if(!isMatch)
        return res.json({ loginSuccess: false, message: "wrong password"})
      
        user.generateToken((err, user)=> {
          if(err) return res.status(400).send(err);

            res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})

// const {User} = require('./model/user')

app.get('/api/users/auth', auth, (req, res)=>{
  //auth === True, get token using cookie parser
  // role 0: user, except: admin
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false: true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.role,
    image: req.user.image
  });
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id},
    {token:""}
    , (err, user) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({
        success: true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})