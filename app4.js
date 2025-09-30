const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filtredUsers = USERS.filter((user) =>
        user.name.toLowerCase().includes(value)
    )
    render(filtredUsers)
})

async function start() {
    list.innerHTML = 'Loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
    } catch (err) {
        list.innerHTML = 'Error...'
        list.style.color = 'red'
    }
}

function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}
function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

start()