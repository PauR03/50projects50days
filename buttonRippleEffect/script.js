window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button")

    button.addEventListener("click", (e) => {

        var x = e.clientX - button.getBoundingClientRect().left
        var y = e.clientY - button.getBoundingClientRect().top

        let nuevoElementoCirculo = document.createElement('span')
        nuevoElementoCirculo.className = 'circle'

        nuevoElementoCirculo.style.top = y + 'px'
        nuevoElementoCirculo.style.left = x + 'px'

        button.appendChild(nuevoElementoCirculo)

        setTimeout(() => {
            removeCircle(nuevoElementoCirculo)
        }, 500)
    })

    const removeCircle = (circle) => {
        button.removeChild(circle)
    }
})