const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/html.html');
})

const PORT = process.env.PORT || 3000;

app.listen (PORT, (req,res)=>{
    console.log('Listening...');
})