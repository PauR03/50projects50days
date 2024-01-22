document.addEventListener("DOMContentLoaded", () => {
    const prev = document.getElementById("prev")
    const next = document.getElementById("next")
    const sectionImages = document.getElementById("images")

    const positions = ["0px", "-500px", "-1000px", "-1500px"]
    let index = 3
    let timer

    function showImage() {
        sectionImages.style.transform = `translateX(${positions[index]})`
    }

    function startTimer() {
        timer = setInterval(() => {
            index = (index === positions.length - 1) ? 0 : index + 1
            showImage()
        }, 2000)
    }

    startTimer()

    function resetTimer() {
        clearInterval(timer)
        startTimer()
    }

    next.addEventListener("click", () => {
        index = (index === positions.length - 1) ? 0 : index + 1
        showImage()
        resetTimer()
    })

    prev.addEventListener("click", () => {
        index = (index === 0) ? positions.length - 1 : index - 1
        showImage()
        resetTimer()
    })
})
