window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main")
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

    // w 20, h 25
    for (let i = 0; i < (20 * 25); i++) {
        const square = document.createElement("div")
        square.classList.add("square")

        square.addEventListener("mouseover", () => addColor(square))
        square.addEventListener("mouseout", () => removeColor(square))

        main.appendChild(square)
    }

    function addColor(square) {
        const randomColor = colors[getRandomInt(colors.length)]
        square.style.background = randomColor
        square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
    }

    function removeColor(square) {
        square.style.background = "#1d1d1d"
        square.style.boxShadow = `0 0 2px #000`
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}