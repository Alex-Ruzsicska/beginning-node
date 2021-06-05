const fs = require('fs');
const http = require('http');
const tela1 = fs.readFileSync('tela1.html');
const tela0 = fs.readFileSync('tela0.html');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    switch(req.url){
        case '/tela1':
            res.end(tela1);
        break;
        default:
            res.end(tela0);
    }
});

server.listen(3000);