window.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main>img.content")
    const buttons = document.querySelectorAll("li")

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let actualShowingImg = document.querySelector("main>img.show")
            let actualActivedBut = document.querySelector("li.active")

            if (!images[index].classList.contains("show")) actualShowingImg.classList.remove("show")
            images[index].classList.add("show")

            if (!button.classList.contains("active")) actualActivedBut.classList.remove("active")
            button.classList.add("active")
        })
    })
})