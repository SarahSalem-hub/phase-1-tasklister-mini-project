document.addEventListener("DOMContentLoaded", () => {
  let obj = document.querySelector("#create-task-form")
  let color ;
  let optionsIndex;

  obj.addEventListener("submit",function(e){
    e.preventDefault()
    addTask(e.target.new_task_description.value, color, optionsIndex);
    obj.reset()
  })


  let select = document.querySelector("select")
  select.addEventListener("change",function(){
   color =  select.options[select.selectedIndex]
   optionsIndex = select.options.selectedIndex
  })

  let down = document.querySelector("#down")
  down.addEventListener("click",order)

});


function addTask(input,color,optionsIndex){
  let list = document.createElement("li")
  let btn = document.createElement("button")
    btn.addEventListener("click", deleteTask)
    btn.innerHTML = "X"
    list.innerHTML = `${input} `
    list.setAttribute("value",optionsIndex)
    list.style.color = color.value
    list.appendChild(btn)
    document.querySelector("#tasks").appendChild(list)
}

function deleteTask(e){
    e.target.parentNode.remove()
}

function order(){
  let tasks = document.querySelector("#tasks")
  let listValue = [] ;
    
   let list = Array.from(tasks.children)
   list.sort(function(a,b){
    return  a.getAttribute("value")
    - b.getAttribute("value")
   }) 

   list.forEach(function(ele){
    tasks.appendChild(ele)
   })
  
   
}