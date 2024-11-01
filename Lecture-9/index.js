// function api1(){
//   return new Promise((res, rej) => {
//     res("fun1")
//   })
// }

// function api2(){
//   return new Promise((res, rej) => {
//     res("fun2")
//   })
// }

// function api3(){
//   return new Promise((res, rej) => {
//     res("fun3")
//   }) 
// }

// let x = api1()
// console.log(x)
// let y = api2()
// console.log(y)
// let z = api3()
// console.log(z)



// function api1(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Panner");
//     }, 6000)
//   })
// }

// function api2(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Salad");
//     }, 5000)
//   })
// }

// function api3(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Butter Nan");
//     }, 0)
//   }) 
// }

// let x = Promise.all([api1(), api2(), api3()]).then((data) => {
//   console.log(data)
// })  //Tasks are executed in parallel so in total it takes 7 seconds





// api1().then((data) => {
//   console.log(data)
// })
// api2().then((data) => {
//   console.log(data)
// })
// api3().then((data) => {
//   console.log(data)
// })




// function api1(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api1");
//     }, 6000)
//   })
// }

// function api2(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("rejected");
//     }, 5000)
//   })
// }

// function api3(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api3");
//     }, 0)
//   }) 
// }

// let x = Promise.allSettled([api1(), api2(), api3()])
//      .then((data) => {
//       console.log(data);
//      })
//      .catch((err) => {
//       console.error(err);
//      });






//Race:- In this the first one according to time is exexuted and gives output


// function api1(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api1");
//     }, 6000)
//   })
// }

// function api2(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("rejected");
//     }, 5000)
//   })
// }

// function api3(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api3");
//     }, 0)
//   }) 
// }

// let x = Promise.race([api1(), api2(), api3()])
//      .then((data) => {
//       console.log(data);
//      })
//      .catch((err) => {
//       console.error(err);
//      });



// Promise.any


// function api1(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api1");
//     }, 6000)
//   })
// }

// function api2(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("rejected");
//     }, 5000)
//   })
// }

// function api3(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("api3");
//     }, 0)
//   }) 
// }

// let x = Promise.any([api1(), api2(), api3()])
//      .then((data) => {
//       console.log(data);
//      })
//      .catch((err) => {
//       console.error(err);
//      });














