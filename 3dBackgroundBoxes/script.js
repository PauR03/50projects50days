window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main")
    const button = document.querySelector("button")

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.style.backgroundPosition = `${(j * 125) * -1}px ${(i * 125) * -1}px`

            main.appendChild(box)
        }
    }

    button.addEventListener("click", () => {
        main.classList.toggle("big")
    })
})