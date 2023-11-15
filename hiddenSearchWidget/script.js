window.addEventListener("load", () => {
    document.querySelector("nav i").addEventListener("click", () => {
        document.querySelector("main").classList.toggle("open")
    })
})