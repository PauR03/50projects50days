window.addEventListener("load", (e) => {
    console.log("documento cargado")
    console.log(document.getElementsByClassName("active")[0])


    const panels = document.querySelector("main").querySelectorAll("div")
    console.log(panels)

    
    panels.forEach(element => {

        element.addEventListener("click", (e) => {
            const activatedPanel = document.getElementsByClassName("active")[0]
            const clickedPanel = e.target

            activatedPanel.classList.remove("active")
            clickedPanel.classList.add("active")
        })
    })
})