window.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter")
    const div = document.querySelector("div")

    div.addEventListener("dblclick", (e) => {
        const counterNumber = counter.innerText
        counter.innerHTML = parseInt(counterNumber) + 1

        var x = e.clientX - div.getBoundingClientRect().left
        var y = e.clientY - div.getBoundingClientRect().top

        let newElementHeart = document.createElement('i')
        newElementHeart.className = 'fas fa-heart'

        newElementHeart.style.top = y + 'px'
        newElementHeart.style.left = x + 'px'

        div.appendChild(newElementHeart)

        setTimeout(() => {
            newElementHeart.remove()
        }, 1000)
    })
})