window.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll("div#counter span")
    const counter = document.getElementById("counter")
    const final = document.getElementById("final")
    const replayButton = document.querySelector("button")

    var index = -1

    nextNumber()

    replayButton.addEventListener("click", replay)

    function nextNumber() {
        index++
        if (index === numbers.length) {
            counter.classList.add("hide")
            final.classList.add("show")
            return
        }

        if (index === numbers.length - 1) numbers[index].classList.add("last")
        numbers[index].classList.add("in")
        if (numbers[index - 1]) numbers[index - 1].classList.remove("in")

        setTimeout(nextNumber, 1000)
    }

    function replay() {
        counter.classList.remove("hide")
        final.classList.remove("show")
        numbers[numbers.length - 1].classList.remove(...["in", "last"])
        index = -1
        nextNumber()
    }
})