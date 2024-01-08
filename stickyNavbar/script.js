window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header")

    window.addEventListener('scroll', function () {
        let triggerPosition = 250
        let scrollPosition = window.scrollY

        if (scrollPosition > triggerPosition && !header.classList.contains("white")) {
            header.classList.add("white")
        } else if (scrollPosition < triggerPosition && header.classList.contains("white")) {
            header.classList.remove("white")
        }
    })
})