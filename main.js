let text = document.getElementById('enter-text');
let submit = document.getElementById('submit-btn')
let arr = [];

submit.onclick = (e) => {
    e.preventDefault();
    if (text.value == '') {
        console.log("Enter something!")
    } else {
        arr.push(text.value)
        makeList();
        text.value = ''
    }
}

function makeList() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(arr[arr.length - 1]))
    let list = document.getElementById('todo-list');
    list.appendChild(li)

    let CLOSE = document.createElement('button');
    CLOSE.appendChild(document.createTextNode("X"))
    li.appendChild(CLOSE);
    CLOSE.setAttribute('class', 'btn')
    
    deleteFromList();
}

function deleteFromList(){
    let btn = document.querySelectorAll('.btn')
    btn[btn.length - 1].onclick = (e) => {
        let r = btn[btn.length - 1].parentElement;
        r.remove();

    }
}

