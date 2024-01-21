import express from "express";
import { loginController, logoutController, signupController } from "../controllers/authControllers.js";
const authRoute = express.Router()

authRoute.post("/signup" , signupController)
authRoute.post("/login" , loginController)
authRoute.post("/logout" , logoutController)


export {authRoute}