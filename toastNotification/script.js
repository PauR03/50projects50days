window.addEventListener("DOMContentLoaded", () => {
    const notificationButton = document.getElementById("notificationButton")
    const notificationsDiv = document.getElementById("notificationsDiv")

    let posiblesNames = ["Message One", "Message Two", "Message Three", "Message Four"]
    let posiblesClasses = ["success", "error", "info"]

    notificationButton.addEventListener("click", () => {
        let randomMessage = Math.floor(Math.random() * (posiblesNames.length - 0) + 0)
        let message = posiblesNames[randomMessage]

        let randomClass = Math.floor(Math.random() * (posiblesClasses.length - 0) + 0)
        let messageClass = posiblesClasses[randomClass]

        const notification = document.createElement("div")
        notification.classList.add("notification")
        notification.classList.add(messageClass)
        notification.textContent = message

        notificationsDiv.appendChild(notification)

        setTimeout(() => {
            notification.remove()
        }, 3000);
    })
})