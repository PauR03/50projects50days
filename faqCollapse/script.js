window.addEventListener("load", () => {
    const open = document.querySelectorAll("i")

    for (i in open) {
        open[i].addEventListener("click", (e) => {
            const articleParent = e.target.parentNode.parentNode

            articleParent.classList.toggle("open")
        })
    }
})