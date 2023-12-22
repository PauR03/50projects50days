window.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector("article")
    const h3 = document.querySelector("h3")
    const parraf = document.querySelector("div.parraf")
    const name = document.getElementById("name")
    const date = document.getElementById("date")

    setTimeout(loadArticle, 2500)

    function loadArticle() {
        article.classList.remove("loading")
        h3.innerHTML = "Lorem ipsum dolor sit amet"
        parraf.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
        name.innerHTML = "John Doe"
        date.innerHTML = "Oct 08, 2020"
    }
})