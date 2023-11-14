window.addEventListener("load", () => {

    document.getElementById("open").addEventListener("click", () => {
        document.querySelector("body").classList.add("show-nav")
    })

    document.getElementById("close").addEventListener("click", () => {
        document.querySelector("body").classList.remove("show-nav")
    })
})