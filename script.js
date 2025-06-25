const button = document.getElementById('add-a-task');
const list = document.getElementById('task-list');
const input = document.getElementById('name');
const complete = document.querySelector('.complete')
const incomplete = document.querySelector('.in-complete')


button.addEventListener('click' ,() =>{
    let text = input.value.trim()
    if (text == ''){
        return
    }
    const div = document.createElement('div')
    div.className = 'task-actions'
    const done = document.createElement('button')
    done.textContent = '✅'
    done.addEventListener('click', () =>{
        const over = document.createElement('p')
        over.textContent = 'done'
        li.className = 'completed'
        div.removeChild(delbtn)
        div.removeChild(done)
        complete.appendChild(li)
    });
    const delbtn = document.createElement('button')
    delbtn.textContent = '❌'
    delbtn.addEventListener('click', () =>{
        incomplete.removeChild(li);
    });
    const li = document.createElement('li')
    li.textContent = text
    div.appendChild(done)
    div.appendChild(delbtn)
    li.appendChild(div)
    incomplete.appendChild(li)
    input.value = '';
})