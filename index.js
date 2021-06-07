const express = require('express');
const path = require('path');
const ejs = require('ejs');

const mongoose = require('mongoose');
const post = require('./models/Post');


//Express config
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.listen(4000, ()=>{
    console.log("Listening on port 4000.");
});

//Mongo config
mongoose.connect('mongodb://localhost/blog_database', { useNewUrlParser: true, useUnifiedTopology: true });


//Routes
app.get('/', async (req, res)=>{
    const posts = await post.find({});
    console.log(posts)
    res.render('index',{posts});
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.get('/post', (req, res)=>{
    res.render('post');
});

app.get('/post/new', (req, res)=>{
    res.render('create');
});

app.post('/post/store', async (req,res)=>{
    await post.create(req.body,(error, blogpost)=>{
        console.log(error, blogpost);
    });
    res.redirect('/');
});


