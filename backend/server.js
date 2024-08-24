import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectMongo from "./db/connectDb.js"


dotenv.config()
const app = express()


// app.get("/hike", (req,res)=>{
//     res.send("lets gooo")
// })

app.use("/api/auth",authRoutes)
const port = process.env.PORT

app.listen(port, ()=>{
    console.log("oya nau")
    connectMongo()
})