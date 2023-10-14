const express = require('express');
const app = express();
require('dotenv').config();

const {PORT} = process.env;

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/:data', (req, res)=>{
    const {data} = req.params;    
    console.log("Data: ", data);
    console.log("Cookies: ", req.cookies);
    if(req.headers.referer) console.log("Origin: ", req.headers.referer);
    return res.status(200).send("");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})