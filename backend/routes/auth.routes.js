import express from "express"
import { getMe, login, logout, signUp } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"
const router = express.Router()
router.get("/me",protectRoute,getMe)
router.post("/signUp", signUp)
router.post("/login",login)
router.post("/logout", logout)

router.post("/signIn", (req,res)=>{
    res.send("router dey work for signin?")
})

export default router