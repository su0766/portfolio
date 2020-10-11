const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()

const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./model/users");
const { Report } = require("./model/report");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

//mongodb connection using mongoose
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get("/api/hello", (req, res) => res.send("Hello World!"));

app.post('/api/users/register', (req, res)=>{
  //register user
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.post('/api/users/login', (req, res) => {
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
        //else
        user.generateToken((err, user)=> {
          
          if(err) return res.status(400).send(err);

          //save token to mongodb
          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res)=>{
  // if auth === True, get token using cookie parser
  // role 0: user, role others: admin
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false: true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image
  });
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id},
    {token:""}, (err, user) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({
        success: true
      })
    })
})

app.get('/api/report/barchart', (req, res) => {
  Report.findOneAndUpdate(
    { _id: req.user._id},
    {token:""}, (err, user) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({
        success: true
      })
    })
})



const port = 3000
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})