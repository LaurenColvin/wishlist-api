require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT
const itemController = require('./controllers/itemController')
const userController = require('./controllers/userController')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', function(req, res) {
    res.send('Welcome to wishlist api. Please try /user or /item to see more')
})

app.use('/user', userController)
app.use('/item', itemController)

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})

// heroku link: https://obscure-eyrie-60165.herokuapp.com/