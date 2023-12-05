window.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("span")

    counters.forEach(counter => {
        const targetNumber = parseInt(counter.innerHTML)
        let currentNumber = 0

        let intervalId = setInterval(() => {
            let increment = targetNumber / 200

            if (currentNumber < targetNumber) {
                currentNumber += increment
                counter.innerHTML = parseInt(currentNumber)
            } else {
                clearInterval(intervalId);
            }
        }, 1)
    })
})