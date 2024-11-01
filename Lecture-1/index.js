//const heading = document.getElementsByTagName('h1')
//heading.innerText = "from Js File"//Dom
//console.log(heading.innerText);
//console.log(heading)

//const heading = document.getElementsByClassName("hello")
//heading[0].innerHTML = "<i>Hello</i>"
//console.log(heading[0].innerText)

const heading= document.querySelector("h1")
//heading.style.backgroundColor = "red"
//heading.style.border = "5px solid black"
//console.log(heading)

//const heading = document.querySelector("h1")
//heading.setAttribute("style","background-color:red")

//const heading = document.querySelector("h1")
//heading.removeAttribute("class")

//const newTag = document.createElement("p");
//newTag.setAttribute("id","para")
//newTag.innerText = "Paragraph Tag";

//document.append(newTag)
//const body = document.getElementsByTagName("body")
//console.log("body")

//body[0].appendChild(newTag)
//console.log(newTag)

//let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard"]

//const ul = document.getElementById("specs")
//const liTag = document.createElement('li')
//liTag.innerText = "Monitor"
//ul.append(liTag)

//let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard"]

//const ul = document.getElementById("specs")
//for(let i = 0 ; i < data.length ; i++){
//  console.log(data[i])
//}

let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard"]
const ul = document.getElementById("specs")

for(let i = 0 ; i < 8 ; i++){
  const liTag = document.createElement("li");
  liTag.style.backgroundColor = "pink"
  liTag.style.margin = "2px"
  liTag.style.padding = "5px"
  liTag.borderRadius = "5px"
  liTag.style.textAlign = "center"
  liTag.innerText = data[i];
    ul.appendChild(liTag);
    //ul.remove();
  }
  heading.remove()
heading.remove()