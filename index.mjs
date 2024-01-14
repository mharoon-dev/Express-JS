import express from "express"
const app = express();


app.get('/' , (request , response) => {
    response.status(200)
    response.send(`<h1 style="color:green;">Express JS is working!</h1>`)
})
app.get('/javascript' , (request , response) => {
    response.status(200)
    response.send(`<h1 style="color:green;">Here is your javascript jobs.</h1>`)
})

app.listen(3000 , () => {
    console.log("Express server is working!");
})