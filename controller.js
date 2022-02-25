const { request } = require('express')
const express = require('express')
const { newFilms } = require('./data')
const router = express.Router()
const films = require('./models')

router.get('/', (request, response)=>{
    const filmData = newFilms.all
    response.send(filmData)
})

router.get('/film/:ID', (request, response)=>{
    const filmID = parseInt(request.params.releasedate)
    response.send(filmID)
})

module.exports={
    router
}
