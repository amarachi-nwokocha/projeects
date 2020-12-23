// header icons favicon and date
const refreshBtn =  document.querySelector('#ref');
console.log(refreshBtn);
refreshBtn.addEventListener('click', function(e){
    document.innerHTML(ul)="";
})
// date
let today = new Date();
document.getElementById("date").innerHTML = today.toLocaleDateString();
console.log(today);
//body
// the ul 
 let body  = document.querySelector('#taskList');
 console.log(body);
//delete items
body.addEventListener('click',function(e){
    if (e.target.className ==  'Rmv'){
        const li = e.target.parentElement;
        body.removeChild(li);
    }
})
//input add elements
const addTask = document.forms["add-task"];
addTask.addEventListener('submit',function(e){
    e.preventDefault();
    const input = document.getElementById('item').value;
    //if input had been added to the list
    if (input) {
        input == "";
    }
     //if the list have 6 items
    
    //create element
    const li = document.createElement('li');
    const Task = document.createElement('span');
    const btn = document.createElement('button');

    // add content
    btn.textContent ='delete';
    Task.textContent = input;

    //addclasses
    Task.classList.add('text');
    btn.classList.add('Rmv');

    //append child
    li.appendChild(Task);
    li.appendChild(btn);
    body.appendChild(li);

});