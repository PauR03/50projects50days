window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
    const background = document.querySelector("div.background")
    const lButton = document.getElementById("left")
    const rButton = document.getElementById("right")
    let index = 0

    const listOfBackgrounds = [
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
        "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
        "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    ]

    lButton.addEventListener("click", () => {
        cambiarBackground(-1)
    })

    rButton.addEventListener("click", () => {
        cambiarBackground(1)
    })

    function cambiarBackground(valor) {
        index = index + valor
        index = index < 0 ? listOfBackgrounds.length - 1 : index
        index = index >= listOfBackgrounds.length ? 0 : index

        body.style.backgroundImage = `url(${listOfBackgrounds[index]})`
        background.style.backgroundImage = `url(${listOfBackgrounds[index]})`
    }
})