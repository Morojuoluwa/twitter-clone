import express from "express"
import { signUp } from "../controllers/auth.controller.js"
const router = express.Router()

router.get("/signUp", signUp)

router.get("/signIn", (req,res)=>{
    res.send("router dey work for signin?")
})

export default router