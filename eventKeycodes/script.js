window.onload = () => {
    const key = document.getElementById("key")
    const keyCode = document.getElementById("keyCode")
    const eventKey = document.getElementById("eventKey")

    document.addEventListener("keydown", (e) => {
        key.innerHTML = (e.code === "Space" ? "Space" : e.key)
        keyCode.innerHTML = e.keyCode
        eventKey.innerHTML = e.code
    });
}