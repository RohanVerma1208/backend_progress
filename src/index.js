
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path :"./.env"
})

connectDB()







/*
const app = express()
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("error:",error)
       })
    } catch (error) {
        console.log("ERROR: ",error)
        throw error
    }
})()

*/