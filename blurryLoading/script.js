window.addEventListener("load", () => {
    const counter = document.querySelector(".counter")
    const article = document.querySelector("article")
    let counterNumber = parseInt(counter.innerHTML.replace("%", ""))
    for (let i = 0; i <= 100; i++) {
        setTimeout(function () {
            counter.innerHTML = i + "%"
            counter.style.opacity = (100 - i) / 100
            article.style.filter = `blur(${((100 - i) * 30) / 100}px)`

        }, i * 30);

    }
})