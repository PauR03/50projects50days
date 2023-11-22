window.addEventListener("load", () => {
    const button = document.querySelector("button")
    const inputs = document.querySelectorAll("input")

    button.onmousedown = () => {
        button.classList.add("pequeñitoUWUchi")
    }

    button.onmouseup = () => {
        button.classList.remove("pequeñitoUWUchi")
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", (e) => {
            const divFather = e.target.parentNode

            divFather.classList.add("focused")
        })


        inputs[i].addEventListener("blur", (e) => {
            const divFather = e.target.parentNode
            if (e.target.value === "") divFather.classList.remove("focused")
        })
    }
})