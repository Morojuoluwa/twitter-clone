import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectMongo from "./db/connectDb.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
const port = process.env.PORT


// app.get("/hike", (req,res)=>{
//     res.send("lets gooo")
// })

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.listen(port, ()=>{
    console.log("oya nau")
    connectMongo()
})