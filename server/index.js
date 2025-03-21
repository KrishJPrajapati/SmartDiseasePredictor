const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/index')
const connectDB = require('./config/connectDb')
app.use(cors({
    origin: frontend_url_here,
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        message: 'Server is running'
    })
})
app.use('/api', router)

const PORT = process.env.PORT || 8080
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("Server is listening as", PORT)
    })
})

