
// function fun1(){
//   console.log("hello")
// }

// fun1()

// Working same as above

// function fun1(){
//   return "hello"
// }

// let x = fun1();
// console.log(x);



// async function fun1(){
//   return "hello";
// }

// let x = fun1();
// console.log(x);



// function fun2(){
//   return Promise.resolve("hello");
// }

// let y = fun2();
// console.log(y);




// async function fun1() {
//   return "hello";
// }

// fun1.then((data) => {
//   console.log(data)
// })



// function pro() {
//   return new Promise(function pro1(res, rej) {
//     res("helooo")
//   });
// }

// async function fun1() {
//   let x = await pro()
//   console.log(x)
// }

// fun1().then((data) => {
//   console.log("data", data);
// })



// function pro() {
//   return new Promise(function pro1(res, rej) {
//     setTimeout(() => {
//       res("helloo")
//     } ,1000)
//   });
// }

// async function fun1() {
//   console.log("start")
//   let x = await pro()  // If we remove await from here we get promise as object
//   console.log("end")
//   console.log(x)
//   return "dtata"
// }

// fun1().then((data) => {
//   console.log("data", data);
// })



// function pro() {
//   return new Promise(function pro1(res, rej) {
//     setTimeout(() => {
//       res("helloo")
//     } ,1000)
//   });
// }

// async function fun1() {
//   console.log("start")
//   let x = await pro() 
//   return x
// }

// let y = fun1();
// console.log(y)




// function pro() {
//   //return new Promise(function pro1(res, rej) {
//     setTimeout(() => {
//       res("helloo")
//     } ,1000)
// }

// async function fun1() {
//   console.log("start")
//   let x = await pro();
//   console.log("end"); 
// }

// fun1()




function searchFood(item) {
  return new Promise(function fun1(res, rej) {
      console.log("searching start for", item, ".....");
      setTimeout(function timer1() {
          let data = `list of ${item}`;
          res({ item, data });
      }, 3000);
  });
}

function orderFood(item) {
  return new Promise(function fun2(res, rej) {
      console.log("Select ", item);
      setTimeout(function timer2() {
          let id = Math.floor(Math.random() * 999999);
          res({id, item});
      }, 4000);
  });
}

function payment(item, id) {
  return new Promise(function fun3(res, rej) {
      console.log(`payment starting for ${item} with id no.`, id);
      setTimeout(function timer3() {
          let status = true;
          res(status);
      }, 6000);
  });
}

/* Now we have to make below code short */

// let result = searchFood("dal chawal")
//   .then(function consume1(detail) {
//       console.log(detail.data);
//       return orderFood(detail.item);
//   })
//   .then(function consume2(detail2) {
//       console.log("order created successfully with id no.", detail2.id);
//       return payment(detail2.item, detail2.id);
//   })
//   .then(function consume3(status) {
//       console.log("Payment successfull with status", status);
//   });

async function foodOrder(item) {
  let res1 = await searchFood(item);
  let res2 = await orderFood(res1.item);
  let res3 = await payment(res2.item, res2.id);
  return res3;
  // console.log("Payment successfull with status", res3);
}

foodOrder("kadai panner").then((status) => {
  console.log("Payment successfull with status", status);
});

