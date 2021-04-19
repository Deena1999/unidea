const express=require('express');
const path=require('path');
const rootDir=require('./util/path');
require('dotenv').config();

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static('public'));

app.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'index.html'));
});

const port=process.env.port;
app.listen(port);