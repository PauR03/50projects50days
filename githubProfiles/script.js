
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    const section = document.querySelector("section")
    const input = document.querySelector("input")
    const API = "https://api.github.com/users/"

    const casdReposLink = document.getElementById("reposLinks")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const userName = input.value

        fetch(API + userName)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                const {
                    avatar_url,
                    name,
                    bio,
                    followers,
                    following,
                    public_repos,
                    repos_url
                } = data
                const cardImage = document.querySelector("img")
                const cardName = document.querySelector("h2")
                const cardBio = document.querySelector(".content p")
                const cardFollowers = document.getElementById("followers")
                const cardFollowing = document.getElementById("following")
                const cardRepos = document.getElementById("repos")

                cardImage.setAttribute("src", avatar_url)
                cardName.innerHTML = name
                cardBio.innerHTML = bio + ""
                cardFollowers.innerHTML = followers + "<strong>Followers</strong>"
                cardFollowing.innerHTML = following + "<strong>Following</strong>"
                cardRepos.innerHTML = public_repos + "<strong>Repos</strong>"

                casdReposLink.innerHTML = ""

                appendRepos(repos_url + "?sort=created")

                input.value = ""

                section.style.display = "flex"
            })
            .catch(error => {
                console.error('Error:', error);
            })
    })

    function appendRepos(repos_url) {
        fetch(repos_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                for (i in data) {
                    const {
                        name,
                        url
                    } = data[i]
                    casdReposLink.innerHTML += `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`
                    if (i == 4) break
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })

    }

})