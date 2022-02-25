const express = require('express')
const app = express()
const models = require('./models')
const controller = require('./controller')
const data = require('./data')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let newFilms = [
    {id: 1,genre :'Action', title:'Iron Man', releasedate: 2012, rating:8 },
    {id: 2,genre:'Romance', title:'The Notebook',releasedate: 2005, rating:7}
]

app.get('/', (request, response) => {
  response.send(data)
})

app.get('/films', (request,response)=>{
    response.json(newFilms)
})

app.get('/films/:filmID', (request, response)=>{
    let filmID = request.params.filmID
    console.log(filmID)
    let selectedfilm = newFilms.filter(selectedfilm=> selectedfilm.id==filmID)
    response.json(selectedfilm)})

app.post('/films', (request,response)=>{
    const newFilms2 = request.body;
    let newfilmID = newFilms.length+1
    newFilms.push({ id: newfilmID, ...newFilms2});
    response.json({message: `${newFilms2.title} successfully added to our collection.`})
}
)


module.exports = {
    app, models ,controller, data, newFilms
}



