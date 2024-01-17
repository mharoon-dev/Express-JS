import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());

// app.get('/' , (request , response) => {
//     response.status(200)
//     response.send(`<h1 style="color:green;">Express JS is working!</h1>`)
// })
// app.get('/javascript' , (request , response) => {
//     response.status(200)
//     response.send(`<h1 style="color:green;">Here is your javascript jobs.</h1>`)
// })
// app.listen(3000 , () => {
//     console.log("Express server is working!");
// })


