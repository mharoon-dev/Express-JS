import express from "express";
// import morgan from "morgan";
import fs from "fs";
const app = express();


app.use(express.json());
// app.use(morgan('dev'));



// middle wear
app.use((req ,res, next) => {
    req.requestTime = new Date().toISOString()
    console.log(req.requestTime);
    console.log("middle wear 1!");
    next()
})
app.use((req ,res, next) => {
    console.log("middle wear 2!");
    next()
})
app.get('/' , (request , response) => {
    response.status(200)
    response.send(`<h1 style="color:green;">Express JS is working!</h1>`)
})
app.get('/javascript' , (request , response) => {
    response.status(200)
    response.send(`<h1 style="color:green;">Here is your javascript jobs.</h1>`)
})
app.listen(5500 , () => {
    console.log("Express server is working! on port " + "5500");    
})




