
let inputValue = document.getElementById('inputValue');
let taskContainer = document.getElementById("task-container");

function addTask() {
    let taskValue = inputValue.value.trim();
    if(!taskValue) {
        alert("Enter task");
    }
    else {
        let newTask = document.createElement("li");
        newTask.innerHTML = inputValue.value;
        taskContainer.appendChild(newTask);

        // create delete button with class delBtn
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        newTask.appendChild(deleteBtn);
        deleteBtn.setAttribute('id', 'delBtn');
        deleteBtn.classList.add('delBtn');

        // create complete button with class compBtn
        let compBtn = document.createElement('button');
        compBtn.innerHTML = 'Complete';
        newTask.appendChild(compBtn);
        compBtn.setAttribute('id', 'compBtn');
        compBtn.classList.add('CompBtn');
    }
    inputValue.value = '';
}

taskContainer.addEventListener('click', deleteTask);
function deleteTask(e) {
    if(e.target.id === 'delBtn') {
        e.target.parentElement.remove();
    }
    if(e.target.id === 'compBtn') {
        e.target.parentElement.classList.toggle('completed');

        let unCompBtn = document.createElement('button');
        unCompBtn.innerHTML = 'Uncompleted';
        unCompBtn.classList.add('unCompBtn');
        unCompBtn.setAttribute('id', 'unCompleted');
        e.target.parentElement.appendChild(unCompBtn);
        
        e.target.remove();
    }
    if(e.target.id === 'unCompleted') {
        e.target.parentElement.classList.toggle('completed');

        let compBtn = document.createElement('button');
        compBtn.innerHTML = 'Complete';
        compBtn.setAttribute('id', 'compBtn');
        compBtn.classList.add('CompBtn');
        e.target.parentElement.appendChild(compBtn);

        e.target.remove();
    }
}
