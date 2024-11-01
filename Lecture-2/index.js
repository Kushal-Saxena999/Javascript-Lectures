

// const btn = document.getElementById("btn")
// const body = document.querySelector("body")

// btn.onclick = () => {
//   console.log("hello from js file")
// }

// btn.onclick = () => {
//   console.log("hello from js file 2")
// }

// btn.addEventListener('click' , ()=>{
//   console.log("hello from js file 1")
// })

//btn.addEventListener('click' , (e)=>{
  //btn.innerHTML = "hhh"
  //e.target.innerText = "submitted"

  // alert("hello sir jii")

  //const ischange = confirm("color change ?")
  //console.log(ischange); // return -> true or false

  // if(ischange){
  //   const colorName = prompt("which Color");
  //   //console.log("colorName")
  //   body.style.backgroundColor = `${colorName}`
  // }

  // body.style.backgroundColor = "purple"
  // console.log(e.target)
  // console.log("hello from js file")
  // const ischange = confirm("color change ?") // return -> true or false
  // console.log(ischange)

//})

const submit = document.getElementById("submit");
const ColorName = document.getElementById("ColorName")

ColorName.addEventListener('input' , (e) => {
  e.preventDefault();
  //console.log(e)
  //body.style.backgroundColor = `${ColorName.value}`
  //console.log(ColorName.value)

  // const p = document.createElement("p")
  // p.innerHTML = ColorName.value;
  // document.body.appendChild(p)
  document.getElementById("ptag").innerText = ColorName.value;
})

// const btn = document.querySelector("#btn");

// function random(number){
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });






