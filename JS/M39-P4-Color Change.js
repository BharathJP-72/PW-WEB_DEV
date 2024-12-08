// let b1 = document.getElementById("btn")
// let arr = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// let changeColor = () => {
//     let color = "#"
//     for (let i = 0;i < 6; i++) {
//         color +=  arr[Math.floor(Math.random() * 16)] 
//     }
//     document.body.style.backgroundColor = color
// }

// b1.addEventListener("click",changeColor)
// b1.style.padding = "12px"
// b1.style.borderRadius = "12px"
// b1.style.borderColor = "transparent"


// let plusButton = document.getElementById("plus")
// let minusButton = document.getElementById("min")

const btn = document.getElementById("button");

const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + hex[Math.floor(Math.random() * 16)];
  }

  return hash;
};

function changeBGC() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeBGC);
