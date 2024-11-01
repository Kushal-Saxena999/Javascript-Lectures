
// const body = document.getElementsByTagName("body");

// function colorChange(){
//   let colorString = '0123456789abcdef'
//   let color = ""
//   for(let i = 0 ; i < 6 ; i++){
//   let randNum = Math.floor(Math.random() * colorString.length)
//   color = color + colorString[randNum];
//   }

//   body[0].style.backgroundColor = `#${color}`;
// }

// setInterval(colorChange, 1000);

// setTimeout(function () {
//   console.log("Set timeout")
// },3000)

// console.log("Step 1")
// setTimeout(function () {
//   console.log("Step 2");
// }, 1000);
// console.log("Step 3")

// console.log("hello 1")
// console.log("hello 2")
// for(let i = 0 ; i < 10000000 ; i++){ // Heavy Task Occurs

// }
// console.log("helloo 3")


// function fun1(text){
//   console.log("starting fun")
//   setTimeout(function hello() {
//     console.log(text)
//   } , 4000)
//   console.log("ending fun")

//   text = "changed"
// }

// fun1("nice");


// function fun1(text) {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function hello() {
//       console.log(text);
//     }, 4000);
//   }
// }

// fun1();


// function fun1(text) {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function hello() {
//       console.log(i);
//     }, 4000);
//   }
// }

// fun1();


// function fun1(text) {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function hello() {
//       console.log(i);
//     }, i*1000);
//   }
// }

// fun1();


// function fun1(text) {
//   for (var i = 0; i < 5; i++) { // Here we change let to var and the reason of output is Scope
//     setTimeout(function hello() {
//       console.log(i);
//     }, i*1000);
//   }
// }

// fun1();


// console.log(a) //Hoisting
// {
//   var a = 8
// }



// function fun1() {
//   for (var i = 0; i < 5; i++){
//     function inner(i){
//       setTimeout(function hello() {
//         console.log(i);
//       }, i*1000)
//     }
//     inner(i)
//   }
// }
//fun1();



// function fun1() {
//   for (var i = 0; i < 5; i++) {
//     let j = i
//         setTimeout(function hello() {
//           console.log(j);
//         }, j*1000);
//   }
// }

// fun1();




// console.log("starting");
// setTimeout(function hello() {
//   console.log("setTimeout");
// }, 5000);
// console.log("Ending");


console.log("starting");
setTimeout(function hello() {
  console.log("setTimeout");
}, 5000);
setTimeout(function hello() {
  console.log("setTimeout");
}, 3000);
setTimeout(function hello() {
  console.log("setTimeout");
});
console.log("Ending");













