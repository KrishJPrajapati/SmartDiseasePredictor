const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/index')
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

const PORT = 8080

