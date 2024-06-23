const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
const home = document.getElementById("home")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    })
})

home.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})