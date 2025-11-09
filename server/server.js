import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'

import connectDB from './configs/db.js'

const app = express()

app.use(express.json())
await connectDB()
app.use(cors())

app.get('/', (req, res)=> {
    res.send("Hello World")
})

app.use('/api/user', userRouter)

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log("app is running on the good server")
})