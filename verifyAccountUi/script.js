window.addEventListener("DOMContentLoaded", main)

function main() {
    const inputs = document.querySelectorAll("input")
    inputs[0].focus()

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", (e) => {
            if (e.key >= 0 && e.key <= 9) {
                inputs[index].value = ''
                setTimeout(() => inputs[index + (index === inputs.length - 1 ? 0 : 1)].focus(), 10)
            } else if (e.code === "Backspace") setTimeout(() => inputs[index - (index === 0 ? 0 : 1)].focus(), 10)
        })
    })
}