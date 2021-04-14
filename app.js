const express=require('express');
require('dotenv').config();

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',(req,res,next) => {
    res.json('Response from Server');
});

const port=process.env.port;
app.listen(port);