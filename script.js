const button = document.getElementById('add-a-task');
const list = document.getElementById('task-list');
const input = document.getElementById('input');
const complete = document.querySelector('.complete')
const incomplete = document.querySelector('.in-complete')


button.addEventListener('click' ,() =>{
    let text = input.value.trim()
    if (text == ''){
        return
    }
    const done = document.createElement('button')
    done.textContent = '✅'
    done.addEventListener('click', () =>{
        const over = document.createElement('p')
        over.textContent = 'done'
        li.className = 'completed'
        li.removeChild(delbtn)
        li.removeChild(done)
        complete.appendChild(li)
    });
    const delbtn = document.createElement('button')
    delbtn.textContent = '❌'
    delbtn.addEventListener('click', () =>{
        list.removeChild(li);
    });
    const li = document.createElement('li')
    li.textContent = text
    li.appendChild(done)
    li.appendChild(delbtn)
    incomplete.appendChild(li)
    input.value = '';
})