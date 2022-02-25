
const button=document.querySelector('button')
const form = document.querySelector('form')
const movielist = document.querySelector('ul')
const genre=document.querySelector('#genre')
const title=document.querySelector('#title')
const release=document.querySelector('#rd')
const rating=document.querySelector('#rating')

button.addEventListener('click', function addFilmsToList(event){
    event.preventDefault()
    fetch('http://localhost:3000/films' ).then(function(response){
    response.json().then(function(json){
        console.log(json[0])
        console.log(json[0].id)
        for(films in json){
            let list = document.createElement("li")
            let text=document.createTextNode(`${json[films].id},${json[films].genre},${json[films].title},${json[films].releasedate},${json[films].rating} `)
            list.appendChild(text)
            movielist.appendChild(list)
        }
    const text = document.createTextNode(`${genre.value}, ${title.value}, ${release.value}, ${rating.value}`)

})
    })
})


// module.exports={
//     addFilmsToList, movielist,genre, title, release, rating
// }

