async function fetchData() {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if(!resp.ok) {
        throw new Error('Network error when fetching!');
    }
    const data = await resp.json();
    return data;
};

const btn = document.querySelector('button');
const listContainer = document.querySelector('ul');
btn.addEventListener(('click'), async ()=> {
    const users = await fetchData();
    users.map((user)=> {
        let listItem = document.createElement('li');
        listItem.textContent = `${user.name} with username ${user.username}`;
        listContainer.appendChild(listItem);
    })
})