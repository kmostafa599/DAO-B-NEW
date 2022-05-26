const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const morgan = require('morgan');
const cors = require('cors');

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/v1/users',require('./routes/userRoutes'))
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/wallet',require('./routes/walletRoutes'))
app.use('/api/v1/teams', require('./routes/teamRoutes'))

app.use(errorHandler)

app.listen(8080,()=>{
    console.log("listening on port 8080")
})