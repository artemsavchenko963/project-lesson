const inputElement = document.getElementById('title')
const createButon = document.getElementById('create')
const listElement = document.getElementById('list')

// const l = ['Empty0', 'Empty1']

// function render() {
//     for (let i = 0; i < l.length; i++) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(l[i]))
//     }
// }

// render()

createButon.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newL = {
        title: inputElement.value,
        completed: false,
    }
    l.push(newL)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            l[index].completed = !l[index].completed
        } else if (type === 'remove') {
            l.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(l, index) {
    return ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${l.completed ? 'text-decoration-line-through' : ''}">${l.title}</span>
        <span>
          <span class="btn btn-small btn-${l.completed ? 'warning' : "success"
        }" data-index="${index}" data-type='toggle'>&check;</span>
          <span class="btn btn-small btn-danger"  data-index="${index}" data-type='remove'>&times;</span>
        </span>
      </li>`

}


const l = [
    {
        title: 'Empty1',
        completed: true,
    },
    {
        title: 'Empty2',
        completed: false,
    },
]

function render() {
    listElement.innerHTML = ''
    if (l.length === 0) {
        listElement.innerHTML = `<p>There is nothing yet...</p>`
    }
    for (let i = 0; i < l.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(l[i], i))
    }
}

render()