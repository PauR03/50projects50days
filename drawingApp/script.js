window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext('2d')

    const lessWidth = document.getElementById("lessWidth")
    const moreWidth = document.getElementById("moreWidth")
    const widthInfo = document.getElementById("widthInfo")
    const colorSelector = document.getElementById("editColor")
    const clear = document.getElementById("clear")

    let isDrawing = false;
    let currentColor = '#000';
    let lineWidth = 10

    colorSelector.addEventListener("input", (e) => {
        currentColor = colorSelector.value
    })

    clear.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    lessWidth.addEventListener("click", () => {
        if (lineWidth > 5) lineWidth -= 5
        widthInfo.innerHTML = lineWidth
    })

    moreWidth.addEventListener("click", () => {
        if (lineWidth < 50) lineWidth += 5
        widthInfo.innerHTML = lineWidth
    })

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
        draw(e)
    })

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            draw(e)
        }
    })

    canvas.addEventListener('mouseup', () => {
        isDrawing = false
        ctx.beginPath()
    })

    function draw(e) {
        ctx.lineWidth = lineWidth * 2
        ctx.lineCap = 'round'
        ctx.strokeStyle = currentColor

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
    }
})