window.addEventListener("load", () => {
    const main = document.querySelector("main")
    const ps5 = document.getElementById("ps5")
    const xbox = document.getElementById("xbox")

    ps5.addEventListener("mouseover", () => {
        main.classList.remove("right")
        main.classList.add("left")
    })

    xbox.addEventListener("mouseover", () => {
        main.classList.remove("left")
        main.classList.add("right")
    })
})