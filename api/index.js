import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const URL = process.env.CONNECTION_URL
mongoose.connect(URL)
.then(()=>{
    console.log('connected')
})
.catch((e)=>{
    console.log(e.message)
})
app.listen(3000, ()=>{
    console.log(`Server running on port 3000`)
})