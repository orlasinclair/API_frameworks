const filmData = require('./data')

class films {
    constructor(genre, title, releasedate, rating){
    this.genre = genre
    this.title = title
    this.releasedate = releasedate
    this.rating =rating}

findByReleaseDate(releasedate){
    const filmsData = filmData.filter(film=> film.releasedate===releasedate) 
    const film = new films(filmsData)
    return film 
        }

}

module.exports = {
    films
}

