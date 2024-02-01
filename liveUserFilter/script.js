window.addEventListener("DOMContentLoaded", main)

async function main() {
    const persons = document.getElementById("persons")
    const input = document.querySelector("input")
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    persons.innerHTML = ""

    results.forEach(person => {
        const name = person.name.first + " " + person.name.last
        const image = person.picture.medium
        const location = person.location.city + ", " + person.location.country
        const newPerson = document.createElement("div")
        newPerson.classList.add("person")

        newPerson.innerHTML = `<img src="${image}" alt="">
                                <div class="info">
                                    <h4 class="name">${name}</h4>
                                    <p class="city">${location}</p>
                                </div>`

        persons.appendChild(newPerson)
    })


    input.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase()

        if (text.length >= 2) {
            const allPeople = document.getElementsByClassName("person")
            persons.classList.add("searching")
            for (let i in allPeople) {
                const personName = allPeople[i].querySelector(".name").innerText.toLowerCase()
                if (personName.includes(text)) {
                    allPeople[i].classList.add("match")
                } else {
                    allPeople[i].classList.remove("match")
                }
            }
        } else {
            persons.classList.remove("searching")
        }

    })
}