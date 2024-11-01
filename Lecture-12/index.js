// async function api(){
//   let response = await fetch("https://codethreadpracticeapi.vercel.app");
//   let result = await response.json()
//   console.log(result);
// }
// api();


// async function api(){
//   let response = fetch("https://codethreadpracticeapi.vercel.app")
//   .then((data) =>{
//     return data.json;
//   })
//   .then((data)=>{
//     console.log(data);
//   });

//   // console.log(response);
//   // let result = await response.json();
//   // console.log(result);
// }
// api();





// async function api(){
//   try{
//   let response = fetch("https://codethreadpracticeapi.vercel.app/sum?a=65b=8");
//   let result = await response.json();
//   console.log(result);
// } catch (err) {
//   console.log("error aa gyaa");
// }
// }
// api();




// async function api(){
//   try{
//   let response = await fetch("https://codethreadpracticeapi.vercel.app/sum?a=65b=8");
//   let result = await response.json();
//   console.log(result);
// } catch (err) {
//   console.log("error aa gyaa");
// }
// }
// api();



// let num1 = 5;
// let num2 = 6;

// async function api() {
//   try {
//     let response = await fetch(
//       `https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`
//     );
//     let result = await response.json();
//     console.log(result);
//   }catch (err) {
//     console.log(err);
//   }
// }
// api();


let num1 = 1572;
let num2 = 6;

async function api(num1 , num2) {
  try {
      let response = await fetch(
          `https://apicodethread.cyclic.app/sub?a=${num1}&b=${num2}`
      );
      let result = await response.json();
      // document.getElementById("total").innerHTML = result.sub
  } catch (err) {
      console.log(err);
  }
}
api();


// document.getElementById("btn").addEventListener('click' ,() =>{
//   let num1 = document.getElementById("num1").value
//   let num2 = document.getElementById("num2").value
//   console.log("Inside EventListener");
//   console.log(num1);
//   console.log(num2);

// })



