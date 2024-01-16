window.addEventListener("DOMContentLoaded", () => {
    const text = "We Love Programming!"
    const h1 = document.querySelector("h1")
    const input = document.querySelector("input")

    var index = 0


    writeLetter()
    function writeLetter() {
        h1.innerHTML += text[index]
        index++

        if (index === text.length + 1) {
            index = 0
            h1.innerHTML = text[index]
            index++
        }

        setTimeout(writeLetter, 300 / parseFloat(input.value))
    }
})