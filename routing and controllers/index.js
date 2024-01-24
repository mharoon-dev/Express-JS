import express from "express"
import dotenv from "dotenv"
import { authRoute } from "./routers/authRoute.js"
import { dbConnection } from "./utilities/config.js"


const app = express()
dotenv.config()

app.use(express.json())
app.use('/auth' , authRoute)


dbConnection()


app.listen(process.env.PORT , () => {
    console.log("server is working on port " + process.env.PORT);
})