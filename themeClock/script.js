window.addEventListener("DOMContentLoaded", () => {
    const dayWeek = document.getElementById("dayWeek")
    const month = document.getElementById("month")
    const dayNumber = document.getElementById("dayNumber")

    const hourHand = document.querySelector(".hour-hand")
    const minuteHand = document.querySelector(".minute-hand")
    const secondHand = document.querySelector(".second-hand")

    const hour = document.getElementById("hour")
    const minute = document.getElementById("minute")

    const button = document.querySelector("button")

    button.addEventListener("click", (e) => {
        document.querySelector("body").classList.toggle("black")
        button.innerHTML = button.innerHTML === "Light mode" ? "Dark mode" : "Light mode"
    })

    timer()

    function refreshDay(date) {
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        dayWeek.innerHTML = daysOfWeek[date.getDay()] + ","
        month.innerHTML = months[date.getMonth()]
        dayNumber.innerHTML = date.getDate()
    }

    function refreshDigitalWatch(date) {
        hour.innerHTML = date.getHours()
        minute.innerHTML = date.getMinutes()

    }

    function refreshSeconds(date) {
        let second = date.getSeconds() + 1
        secondHand.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * second}deg)`
    }

    function refreshMinutes(date) {
        let minute = date.getMinutes() + 1
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * minute}deg)`
    }

    function refreshHours(date) {
        let hour = date.getHours() + 1
        hourHand.style.transform = `translate(-50%, -100%) rotate(${360 / 12 * hour}deg)`
    }

    function timer() {
        const date = new Date()

        refreshSeconds(date)
        refreshMinutes(date)
        refreshHours(date)

        refreshDay(date)
        refreshDigitalWatch(date)

        setTimeout(timer, 1000)
    }
})