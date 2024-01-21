import express from "express"
import dotenv from "dotenv"
import { authRoute } from "./routers/authRoute.js"
const app = express()
dotenv.config()
app.use(express.json())


app.use('/auth' , authRoute)
// app.use('/jobs' , jobRoute)


app.listen(process.env.PORT , () => {
    console.log("server is working on port " + process.env.PORT);
})