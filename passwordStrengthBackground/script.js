window.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById("background")
    const passwordInput = document.querySelector("input[type='password']")

    passwordInput.addEventListener("input", (e) => {
        const textLen = e.target.value.length
        background.style.filter = `blur(${20 - textLen * 2}px)`
    })
})