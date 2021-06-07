const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

//Express config
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(4000, ()=>{
    console.log("Listening on port 4000.");
});

//Mongoose config
mongoose.connect('mongodb://localhost:27017/blog_database', { useNewUrlParser: true, useUnifiedTopology: true });


//Routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/post', (req, res)=>{
    res.render('post');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

