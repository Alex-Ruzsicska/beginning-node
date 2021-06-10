const express = require('express');
const path = require('path');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');

const mongoose = require('mongoose');
const post = require('./models/Post');


//Express config
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
app.set('view engine', 'ejs');

app.listen(4000, ()=>{
    console.log("Listening on port 4000.");
});

//Mongo config
mongoose.connect('mongodb://localhost/blog_database', { useNewUrlParser: true, useUnifiedTopology: true });


//Routes
app.get('/', async (req, res)=>{
    const posts = await post.find({});
    res.render('index',{posts});
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.get('/post/new', (req, res)=>{
    res.render('create');
});

app.get('/post/:id', async (req, res)=>{
    const blogpost = await post.findById(req.params.id);
    res.render('post',{ blogpost });
});

app.post('/post/store', (req,res)=>{
    // console.log(req.files.image);
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/assets/img', image.name),
    async (error)=>{
        await post.create(req.body,(error, blogpost)=>{
            console.log(error, blogpost);
        });
        res.redirect('/');
    });
});


