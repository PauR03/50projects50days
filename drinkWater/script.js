window.addEventListener("DOMContentLoaded", () => {
    const glasses = document.querySelectorAll(".glass")

    for (let i = 0; i < glasses.length; i++) {

        glasses[i].addEventListener("click", () => {
            if (i == glasses.length - 1 && glasses[i].classList.contains("added")) {

                glasses[i].classList.remove("added")
            } else if (i != glasses.length - 1 && !glasses[i + 1].classList.contains("added") && glasses[i].classList.contains("added")) {

                glasses[i].classList.remove("added")
            } else {

                for (let j = 0; j < glasses.length; j++) {
                    if (j <= i) {
                        glasses[j].classList.add("added")
                    } else {
                        glasses[j].classList.remove("added")
                    }
                }
            }
            calcWater(countGlassesAddeds())
        })
    }

    function calcWater(index) {
        const water4Comsum = document.getElementById("water4Comsum")
        const waterComsumed = document.getElementById("waterComsumed")
        const water4ComsumNumber = document.querySelector("#water4Comsum h3 span")
        const waterComsumedNumber = document.querySelector("#waterComsumed p span")
        const quantityGlasses = glasses.length

        const newWater4ComsumNumber = 2.00 / 8.00 * (quantityGlasses - index)
        const newWaterComsumedNumber = index * 100 / quantityGlasses

        water4ComsumNumber.innerHTML = newWater4ComsumNumber
        waterComsumedNumber.innerHTML = newWaterComsumedNumber

        water4Comsum.style.height = (100 - newWaterComsumedNumber) + "%"
        waterComsumed.style.height = newWaterComsumedNumber + "%"

        if (newWaterComsumedNumber > 0) {
            waterComsumed.style.visibility = "visible"
        } else {
            waterComsumed.style.visibility = "hidden"
        }
    }

    function countGlassesAddeds() {
        return document.querySelectorAll(".glass.added").length
    }
})