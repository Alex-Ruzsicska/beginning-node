const express = require('express');
const path = require('path');

const app = express();

app.use('/images', express.static('public/images'));

app.listen(3500, ()=>{
    console.log("Hello Express.js!");
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'tela1.html'));
    console.log(req.url + " | " + req.method + " | " + res.statusCode);
});

app.post('/', (req,res)=>{
    res.json({
        name: 'Alex Ruzsicska'
    });
    console.log(req.url + " | " + req.method + " | " + res.statusCode);
});