const taskCheckbox = document.querySelector('.task-done-checkbox');
const  check = document.querySelector('.checked');
const taskName = document.querySelector('.task-name');
taskCheckbox.addEventListener('change', function(){
    if (this.checked) {
        console.log("Checkbox is checked..");
        taskName.style.textDecoration="line-through";
      } else {
        console.log("Checkbox is not checked..");
            taskName.style.textDecoration="none";
      }
    });
