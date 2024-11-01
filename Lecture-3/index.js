
const mainDiv = document.getElementById("mainDiv")
const box = document.getElementById("div 1")
console.log(box)

box.addEventListener('click' , () => {
  console.log("Box")
})

mainDiv.addEventListener('click' , () => {
  console.log("Main Div")
})

document.body.addEventListener('click' , () => {
  console.log("body");
},true)