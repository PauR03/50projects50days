window.addEventListener("DOMContentLoaded", () => {
    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")

    const divText = document.querySelector("div#text")
    const divImages = document.querySelector("div#images")

    const translatePositions = [
        ["translateY(-75%)", "translateY(0%)"],
        ["translateY(-50%)", "translateY(-25%)"],
        ["translateY(-25%)", "translateY(-50%)"],
        ["translateY(0%)", "translateY(-75%)"]
    ]
    let index = 0

    upButton.addEventListener("click", () => {
        index = (index == translatePositions.length - 1 ? 0 : index + 1)
        divText.style.transform = translatePositions[index][0]
        divImages.style.transform = translatePositions[index][1]
    })

    downButton.addEventListener("click", () => {
        index = (index == 0 ? translatePositions.length - 1 : index - 1)
        divText.style.transform = translatePositions[index][0]
        divImages.style.transform = translatePositions[index][1]
    })
})