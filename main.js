let text = document.getElementById('enter-text');


let submit = document.getElementById('submit-btn')
let arr = ["Hi"];
submit.onclick = () => {
    if(text.value == ''){

    }else{
        arr.push(text.value)
        console.log(arr)
    
        let list = document.getElementById('todo-list');
        let li = document.createElement('li');
        let span = document.createElement('button');
        li.appendChild(document.createTextNode(arr[arr.length - 1]))
        span.appendChild(document.createTextNode("Remove"))
        list.appendChild(li)
        li.appendChild(span);
        text.value = ''
    }

}