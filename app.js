require("dotenv").config()
const express = require("express")
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')


const userRouter = require('./routers/studentRouter')

app.set('view engine','ejs')
app.set("views",path.join(__dirname,'views'));
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//cache clearing... 
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
next();
});

app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
const students = require('./models/students')
mongoose.connect('mongodb://127.0.0.1:27017/students')
const db = mongoose.connection
db.on('error',error =>console.log(error))
db.once('open',()=>console.log('db is connected'))


app.use('/', userRouter)

app.listen(process.env.PORT || 3000)