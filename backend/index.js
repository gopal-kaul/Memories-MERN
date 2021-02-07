import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes )

const port = process.env.PORT || 5000;

mongoose.connect(
    process.env.MONGO_URI
    , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
   }).then(() => app.listen(port, () => console.log(`Server connected on port ${port}!`)))
    .catch((e) => console.log(e))
mongoose.set('useFindAndModify', false)