window.addEventListener("load", () => {
    let articles = document.querySelectorAll("article")
    checkVisibility()

    window.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', checkVisibility)

    function checkVisibility() {
        for (let i = 0; i < articles.length; i++) {
            let rect = articles[i].getBoundingClientRect()
            let estaEnLaParteInferior = rect.bottom <= window.innerHeight

            if (estaEnLaParteInferior) {
                articles[i].classList.add("visible")
            } else {
                articles[i].classList.remove("visible")
            }


        }
    }
})