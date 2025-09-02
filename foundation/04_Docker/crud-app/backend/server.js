const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({required : true}))

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/user', userRoutes)

app.listen(port, ()=>{console.log(`Backend running on PORT: ${port}`)})

