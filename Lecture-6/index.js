
// console.log("start");
// const promise1 = new Promise(function fun1(resolve, reject) {
//   console.log("inside promise");
// });
// console.log("end");



// console.log("start");
// setTimeout(() =>{
//   console.log("inside setTimeout");
// }, 4000);
// console.log(promise1)
// console.log("end");



// console.log("start");
// const promise1 = new Promise(function fun1(resolve, reject) {
//   resolve("hello");
// });
// console.log(promise1);
// console.log("end");
// console.log(promise1);



// console.log("start");
// const promise1 = new Promise(function fun1(resolve, reject) {
//   reject("hello");
// });
// console.log(promise1);
// console.log("end");



// const promise1 = new Promise(function fun1(resolve, reject) {
//   resolve("promise resolve");
// });
// console.log(promise1);




// const promise1 = new Promise(function fun1(resolve, reject) {
//   resolve("promise resolve");
// });
// console.log(typeof(promise1));


// const promise1 = new Promise(function fun1(resolve, reject) {
//   resolve("promise resolve");
//   //return "Data"
//   console.log("he")
// });
// console.log(promise1);



// const promise1 = new Promise(function fun1(resolve, reject) {
//   return resolve("promise resolve");
//   console.log("he") //doesn't print
// });
// console.log(promise1);



// const promise1 = new Promise(function fun1(resolve, reject) {
//   resolve("promise resolve");
// });


// promise1.then(function success(result) {
//   console.log(result);
// },function reject(err){
//   console.log(err)
// });


// const promise1 = new Promise(function fun1(resolve, reject) {
//   //resolve("promise resolve");
//   reject("promise rejected");
// }).then(
//   function success(result) {
//     console.log(result);
//   },
//   function reject(err) {
//     console.log(err);
//   }
// );




// const promise1 = new Promise(function fun1(resolve, reject) {
//   //resolve("promise resolve");
//   resolve("promise resolve");
// }).then(
//   function success(result) {
//     console.log(result);
//   },
//   function reject(err) {
//     console.log(err);
//   }
// );


// const promise1 = new Promise(function fun1(resolve, reject) {
//   //resolve("promise resolve");
//   reject("promise rejected");
// }).then(
//   function success(result) {
//     console.log(result);
//   },
//   function reject(err) {
//     console.log(err);
//   }).catch(function reject(err) { // In this case .catch doesn't work.
//   console.log(err);
// });



// const promise1 = new Promise(function fun1(resolve, reject){
//   resolve("promise resolve");
// });

// promise1.then(function success(result) {
//   console.log(result);
// })




// function isData(item) {
//   const promise1 = new Promise(function fun1(resolve, reject){
//     if(item){
//       resolve("promise resolve");
//     } else {
//       reject ("data is empty")
//     }
//   });

//   return promise1;

// }

// let result = isData("KUSHAL SAXENA");

// result.then(function success(result) {
//   console.log(result);
// });




// function isData(item) {
//   const promise1 = new Promise(function fun1(resolve, reject) {
//       if (item) {
//         resolve("promise resolve");
//       } else {
//         reject("data is empty");
//       }
//   });

//   return promise1;
// }

// let result = isData("kushal saxena");


// setTimeout(function hello(){
//   console.log("setTimeout")
// },6000)

// result.then(function success(result) {
//   console.log(result);
// });

// console.log("end")



// const x = Promise.resolve("ashepochepohaa")

// console.log(x)


// const x = Promise.resolve("ashepopo")

// console.log(x);
// console.log("end");












