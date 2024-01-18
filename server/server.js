const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000 
app.use(cors())

const studentRouter = require('./routes/student.route')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', studentRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})
