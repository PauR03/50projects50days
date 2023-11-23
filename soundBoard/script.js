window.onload = () => {
    const buttons = document.querySelectorAll("button");
    var snd = null

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            const buttonId = e.target.id
            if (snd) {
                snd.pause()
                snd.currentTime = 0
            }

            snd = new Audio(`sounds/${buttonId}.mp3`);
            snd.play();
        })
    }
}