// function searchFood(item) {
//   return new Promise(function fun1(res, rej) {
//       console.log("searching start for", item, ".....");
//       setTimeout(function timer1() {
//           let data = `list of ${item}`;
//           res({ item, data });
//       }, 3000);
//   });
// }

// function orderFood(item) {
//   return new Promise(function fun2(res, rej) {
//       console.log("Select ", item);
//       setTimeout(function timer2() {
//           let id = Math.floor(Math.random() * 999999);
//           res({id, item});
//       }, 4000);
//   });
// }

// function payment(item, id) {
//   return new Promise(function fun3(res, rej) {
//       console.log(`payment starting for ${item} with id no.`, id);
//       setTimeout(function timer3() {
//           let status = true;
//           res(status);
//           if (status) {
//             res(status);
//           } else {
//             rej(new Error (`Payment rejected due to some technical error`))
//           }
//       }, 6000);
//   });
// }


// let result = searchFood("dal chawal")
//   .then(
//     function consume1(detail) {
//       console.log(detail.data);
//       return orderFood(detail.item);
//   },
//   function reject(err) {
//     console.log(err);
//   }
// )
//   .then(function consume2(detail2) {
//       console.log("order created successfully with id no.", detail2.id);
//       return payment(detail2.item, detail2.id);
//   })
//   .then(function consume3(status) {
//       console.log("Payment successfull with status", status);
//   },
//   function reject(err) {
//     console.log(err);
//   }
// )
// .then(() =>{
//   console.log("After Error")
// })
// .catch(function reject(err) {
//   console.log(err);
// })
// .finally(() => {
//   console.log("Always executed")
// })




//else{
//rej(new Error("list is Empty"));
//}






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
          let status = false;
          if(status){
            res(status);
          }else{
            rej(new Error("Payment Rejected due to some technical Error with technical difficulties"))
          }
          res(status);
      }, 6000);
  });
}


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

