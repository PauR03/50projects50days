window.addEventListener("load", () => {
    const progressLine = document.getElementById("line")
    const steps = document.querySelectorAll(".step")

    const prevButton = document.getElementById("prev")
    const nextButton = document.getElementById("next")

    let progress = 0

    prevButton.addEventListener("click", () => {
        steps[progress].classList.remove("completed")
        progress--
        progressLine.style.setProperty("width", 100 / (steps.length - 1) * progress +"%")

        if (progress === 0) prevButton.setAttribute("disabled", "true")
        if(progress > 0)nextButton.removeAttribute('disabled')
        
    })

    nextButton.addEventListener("click", () => {
        progress++
        steps[progress].classList.add("completed")
        progressLine.style.setProperty("width", 100 / (steps.length - 1) * progress +"%")

        if(progress === steps.length - 1) nextButton.setAttribute("disabled", "true")
        if(progress > 0)prevButton.removeAttribute('disabled')
    })
})



