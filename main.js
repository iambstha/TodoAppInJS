let text = document.getElementById('enter-text');


let submit = document.getElementById('submit-btn')
let arr = [];
submit.onclick = () => {
    if (text.value == '') {

    } else {
        arr.push(text.value)
        console.log(arr)

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(arr[arr.length - 1]))
        let list = document.getElementById('todo-list');
        list.appendChild(li)

        let remove = document.createElement('button');
        remove.appendChild(document.createTextNode("Remove"))
        li.appendChild(remove);


        remove.setAttribute('class', 'btn')
        text.value = ''
        let btn = document.querySelectorAll('.btn')
        console.log(btn)
        btn[btn.length - 1].onclick = (e) => {
            console.log(btn[btn.length - 1].parentElement)
            let r = btn[btn.length - 1].parentElement;
            r.remove();

        }
    }
}

