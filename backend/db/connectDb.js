import mongoose from "mongoose";

const connectMongo = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb successfully connected, i think")
    }catch(error){
        console.log(`Error: ${error.message}`)
    }
}

export default connectMongo