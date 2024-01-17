window.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input")

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", (e) => {
            let totalChecked = document.querySelectorAll("input:checked").length

            if (totalChecked === 3) {
                let nonCheck = (i === 0 ? inputs.length - 1 : i - 1)
                inputs[nonCheck].checked = false
            }
        })
    }

})