window.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector("div")
    const textarea = document.querySelector("textarea")

    textarea.oninput = () => {
        const values = textarea.value.split(",")

        while (div.firstChild)
            div.removeChild(div.firstChild)

        for (i in values)
            addToDiv(values[i].trim().replace(/\s+/g, ' '))

    }

    textarea.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
            makeRandom()
        }
    })

    function addToDiv(text) {
        if (text == "") return

        const spanChild = document.createElement("span")
        spanChild.textContent = text

        div.appendChild(spanChild)
    }

    // function makeRandom() {
    //     textarea.value = ""
    //     const span = div.children
    //     const quantChilds = span.length
    //     const randomWinner = Math.floor(Math.random() * quantChilds)

    //     for (let i = 0; i < (quantChilds + 5); i++) {
    //         let uselessRandom = Math.floor(Math.random() * quantChilds)
    //         span[uselessRandom].classList.add("winner")
    //         span[uselessRandom].classList.remove("winner")
    //     }

    //     span[randomWinner].classList.add("winner")
    // }

    function makeRandom() {
        textarea.value = "";
        const span = div.children;
        const quantChilds = span.length;
        const randomWinner = Math.floor(Math.random() * quantChilds);

        let iterationCount = 0;

        function iterateWithDelay() {
            if (iterationCount < quantChilds + 10) {
                let uselessRandom = Math.floor(Math.random() * quantChilds);
                span[uselessRandom].classList.add("winner");

                setTimeout(function () {
                    span[uselessRandom].classList.remove("winner");
                    setTimeout(iterateWithDelay, 50);
                }, 50);

                iterationCount++;
            } else {
                span[randomWinner].classList.add("winner");
            }
        }

        iterateWithDelay();
    }

})

