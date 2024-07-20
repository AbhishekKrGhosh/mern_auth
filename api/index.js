import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'

dotenv.config()
const app = express()
const URL = process.env.CONNECTION_URL
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})
app.use(express.json())
app.use(cookieParser())
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

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})