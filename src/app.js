const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const indexRouter = require('../routes/index')
const config = require('../config/config')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//Define Path
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory
app.use(express.static(publicDir))

//Setup router
app.use('/', indexRouter)

app.listen(config.server.port, () => {
    console.log('Our server is live on ' + config.server.port + '.')
})