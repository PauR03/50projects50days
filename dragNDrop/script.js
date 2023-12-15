window.addEventListener("DOMContentLoaded", mainCode)

function mainCode() {
    const image = document.getElementById("photo")
    const containers = document.querySelectorAll("main>div")

    image.addEventListener("dragstart", dragStart)

    containers.forEach(container => {
        container.addEventListener("dragover", allowDrop)
        container.addEventListener("dragenter", dragEnter)
        container.addEventListener("dragleave", dragLeave)
        container.addEventListener("drop", drop)
    })

    function dragStart(e) {
        e.dataTransfer.setData("image", e.target.id)
    }

    function allowDrop(e) {
        e.preventDefault()
    }

    function dragEnter(e) {
        e.target.classList.add("hover")
    }

    function dragLeave(e) {
        e.target.classList.remove("hover")
    }

    function drop(e) {
        e.preventDefault()
        const data = e.dataTransfer.getData("image");
        e.target.appendChild(document.getElementById(data));
    }
}