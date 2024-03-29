// this logic implements the check box of a task
const taskCheckbox = document.querySelector('.task-done-checkbox');
const  check = document.querySelector('.checked');
const containerTasks = document.querySelector('.container-tasks');
document.body.addEventListener('change', function(event){
    if(event.target && event.target.classList.contains('task-done-checkbox') && event.target.closest('.task-box')){
        const taskCheckbox = event.target;
        const taskName = taskCheckbox.closest('.task-box').querySelector('.task-name'); 
        if(taskCheckbox.checked) {
            console.log("Checkbox is checked..");
            taskName.style.textDecoration = "line-through";
        } else {
            console.log("Checkbox is not checked..");
            taskName.style.textDecoration = "none";
        }
    }
});
// adding a  task

const btnAdd= document.querySelector('.add-task');
const taskInput = document.querySelector('#task-input');
btnAdd.addEventListener('click', ()=>{
    if(taskInput.value===null ||  taskInput.value==''){
        console.log(taskInput.value);
    }else{
        console.log(taskInput.value);
        addTask(taskInput.value);
        taskInput.value='';
    }
});


function addTask(taskName){
    let div1  = document.createElement('div'); 
    div1.classList.add('container-tasks');
    
    let div2 = document.createElement('div');
    div2.classList.add('background-task-div-task');
    div2.classList.add('task-box');
    div1.appendChild(div2);
    
    let div3 = document.createElement('div');
    div3.classList.add('icon-task-div');
    div2.appendChild(div3);
    
    let img  = document.createElement('img');
    img.src='img/icon-tasks/ace.png';
    div3.appendChild(img);

    let div4 = document.createElement('div');
    div4.classList.add('task-name-div');

    div2.appendChild(div4);

    let p = document.createElement('p');
    p.classList.add('task-name');
    p.innerText= taskName;
    div4.appendChild(p);

    let div5 = document.createElement('input');
    div5.setAttribute("type", "checkbox")
    div5.classList.add('task-done-checkbox');
    div2.appendChild(div5); 

    document.body.appendChild(div1);

}

