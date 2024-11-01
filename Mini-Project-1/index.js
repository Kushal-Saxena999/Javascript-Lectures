
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const items = document.getElementsByClassName("item")

for(let item of items){
  item.addEventListener('dragstart', (e) =>{
    //console.log(e.target)
    let data = e.target

    box2.addEventListener('dragover',(e) =>{
      e.preventDefault();
      e.stopPropagation();
    })

    box2.addEventListener('drop', ()=>{
      box2.append(data)
      data = ''
    })

    box1.addEventListener('dragover',(e) =>{
      e.preventDefault();
      e.stopPropagation();
    })

    box1.addEventListener('drop', ()=>{
      box1.append(data)
      data = ''
    })
  })





//   item.addEventListener('dragstart', ()=>{
//     console.log("drag start")
//   })
//   item.addEventListener('dragenter', ()=>{
//     console.log("dragenter")
//   })
//   item.addEventListener('dragover', ()=>{
//     console.log("dragover")
//   })
//   item.addEventListener('dragleave', ()=>{
//     console.log("dragleave")
//   })
//   item.addEventListener('dragend', ()=>{
//     console.log("dragend")
//   })
 }
