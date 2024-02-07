window.addEventListener("DOMContentLoaded", main)

function main() {
    const rating = document.getElementsByClassName("rating")
    const button = document.querySelector("button")

    for (let i = 0; i < rating.length; i++) {
        rating[i].addEventListener("click", (e) => {
            const actualActive = document.querySelector(".active")
            actualActive.classList.remove("active")
            rating[i].classList.add("active")
        })
    }

    button.addEventListener("click", () => {
        const finalRatingSelection = document.querySelector(".active")
        const finalRatingText = document.getElementById("finalRating")
        const main = document.querySelector("main")
        const section = document.querySelector("section")

        const finalRatingSelectionText = finalRatingSelection.querySelector("small").innerHTML
        finalRatingText.innerHTML = finalRatingSelectionText

        main.style.display = "none"
        section.style.display = "flex"
    })
}