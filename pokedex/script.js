const pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=151"
const pokePhotos = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/%ID.png"
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main")

    fetch(pokeapi)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            const pokemons = data.results
            pokemons.forEach(pokemon => {
                const { url } = pokemon
                const pokemonElement = getPokemon({ url })
                main.appendChild(pokemonElement)
            })

        })
        .catch(error => {
            console.error('Error:', error)
        })
})

function getPokemon({ url }) {
    const divPokemon = document.createElement("div")
    divPokemon.classList.add("pokemon")

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            // De este metodo conseguimos capitalizar el nombre
            const name = data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase()
            const id = formatNumber(data.id, 3) //Lo ponemos al formato de 001, 069, 151, etc
            const type = data.types[0].type.name
            const image = pokePhotos.replace("%ID", data.id)
            divPokemon.innerHTML = `<div class="image">
                                            <img src="${image}" alt="Image as ${name}">
                                        </div>
                                        <div class="content">
                                            <span class="numberId">#${id}</span>
                                            <h3 class="name">${name}</h3>
                                            <small class="type">Type: ${type}</small>
                                        </div>`

            divPokemon.style.background = colors[type]
        })
        .catch(error => {
            console.error('Error:', error)
        })


    return divPokemon
}

function formatNumber(num, width) {
    return num.toString().padStart(width, '0');
}