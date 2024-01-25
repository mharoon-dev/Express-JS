import express from "express";
import { getDataController, loginController, signupController, updateDataController } from "../controllers/authControllers.js";
const authRoute = express.Router()

authRoute.post("/signup" , signupController)
authRoute.post("/login" , loginController)
authRoute.get("/getData" , getDataController)
authRoute.put("/updateData" , updateDataController)
// authRoute.post("/logout" , logoutController)

export { authRoute }



