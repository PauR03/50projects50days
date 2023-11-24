window.onload = () => {
    const button = document.querySelector("button")

    button.onclick = oneMoreJoke

    oneMoreJoke()
}

async function oneMoreJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com", {
            headers: {
                'Accept': 'application/json'
            }
        })

        const data = await response.json()
        const recipienteDeBromas = document.getElementById("joke")

        recipienteDeBromas.innerHTML = data.joke
    } catch (error) {
        console.error(error)
    }
}

