import express from "express"
const router = express.Router()

router.get("/signUp", (req,res)=>{
    res.send("router dey work?")
})

router.get("/signIn", (req,res)=>{
    res.send("router dey work for signin?")
})

export default router