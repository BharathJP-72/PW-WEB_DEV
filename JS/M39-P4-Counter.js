const pbtn = document.getElementById("plus")
const mbtn = document.getElementById("minus")

let count = 0
let display = document.createElement("h1")
display.style.fontSize = "25px"
display.style.color = "#000000"
display.style.display = "block"
// display.textContent = count
displayValue()
document.body.appendChild(display)

function displayValue() {
    display.textContent = count

}

const increase = () => {
    count++
    displayValue()
}
const decrease = (vi) => {
    if(count > 0)
        count--
    displayValue()
}

pbtn.addEventListener("click",increase)
mbtn.addEventListener("click",decrease)

