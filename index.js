import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/userRoute.js'

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/", userRoutes)

app.listen(PORT, () => {
	console.log(`Server started a http://localhost:${PORT}`)
})
