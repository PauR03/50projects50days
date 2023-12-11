const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

window.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input")
    const main = document.querySelector("main")

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red - Código de estado: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            data.results.forEach(element => {
                const poster = element.poster_path
                const title = element.title
                const overview = element.overview
                const score = element.vote_average
                addFilm({ title, poster, score, overview })
            });

        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        })

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const film = e.target.value

            fetch(SEARCH_API + film + '"')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error de red - Código de estado: ${response.status}`);
                    }
                    return response.json()
                })
                .then(data => {
                    main.innerHTML = ''
                    data.results.forEach(element => {
                        const poster = element.poster_path
                        const title = element.title
                        const overview = element.overview
                        const score = element.vote_average
                        addFilm({ title, poster, score, overview })
                    });
                })
                .catch(error => {
                    console.error('Error en la solicitud:', error);
                })
        }
    })

    function addFilm({ title, poster, score, overview }) {

        const scoreColor = (score < 5.0 ? "small" :
            score < 8.0 ? "medium" : "high")

        main.innerHTML += `<section>
            <img src = "${IMG_PATH + poster}"
        alt = "Poster de ${title}" >
        <footer>
            <h3>${title}</h3>
            <span class="score ${scoreColor}">${score}</span>
        </footer>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    </section >`
    }
})
