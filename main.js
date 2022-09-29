let text = document.getElementById('enter-text');
let submit = document.getElementById('submit-btn')
let arr = [];

submit.onclick = (e) => {
    //Prevents the browser to refresh everytime a form is submitted 
    e.preventDefault();
    if (text.value == '') {
        //Check whether something is typed in the input field or not
        console.log("Enter something!")
    } else {
        //Pushing the newly added task in the array
        arr.push(text.value)
        // Calliing the function for generating the list
        makeList();
        // Clearing the value property in the input field
        text.value = ''
    }
}

function makeList() {
    let time = new Date().toLocaleTimeString();
    //Generarting a list
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(arr[arr.length - 1]))
    let timeStamp = document.createElement('span');
    timeStamp.appendChild(document.createTextNode(time));
    li.appendChild(timeStamp);
    let list = document.getElementById('todo-list');
    list.appendChild(li)
    li.setAttribute('completed', "false")
    // A close button for deleting item from the list
    let CLOSE = document.createElement('button');
    CLOSE.appendChild(document.createTextNode("X"))
    li.appendChild(CLOSE);
    CLOSE.setAttribute('class', 'btn')
    //A function for deleting item from the list
    deleteFromList();
    //A function for checking and unchecking the completed status of the task
    completed(li);
}

//A function for deleting items from the list
function deleteFromList() {
    let btn = document.querySelectorAll('.btn')
    btn[btn.length - 1].onclick = (e) => {
        let r = btn[btn.length - 1].parentElement;
        r.remove();

    }
}

//A function for checking the status of the task - completed or not completed
function completed(li) {
    li.addEventListener('click', (e) => {
        if (e.target.getAttribute('completed') == "false") {
            // li.style.textDecoration = 'line-through';
            li.setAttribute('class','completed')
            e.target.setAttribute('completed', "true");
        } else {
            li.style.textDecoration = 'none';
            li.setAttribute('class','not-completed')
            e.target.setAttribute('completed', "false");
        }
    })
}