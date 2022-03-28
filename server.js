require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT
// const activityController = require('./controllers/activityController')
// const personController = require('./controllers/personController')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', function(req, res) {
    res.send('Welcome to wishlist api. Please try /user or /item to see more')
})

// app.use('/person', personController)
// app.use('/activity', activityController)

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})

// heroku link: https://agile-temple-34348.herokuapp.com/