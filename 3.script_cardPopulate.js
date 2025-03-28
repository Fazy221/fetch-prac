async function fetchData() {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if(!resp.ok) {
        throw new Error('Network error when fetching!');
    }
    const data = await resp.json();
    return data;
};

const btn = document.querySelector('button');
const cardTemp = document.querySelector('#card_template');
const cardContainer = document.querySelector('.card_container');


btn.addEventListener(('click'), async ()=> {
    const users = await fetchData();
    users.map((user)=> {
        let cardClone = document.importNode(cardTemp.content, true);
        cardClone.querySelector('h4').textContent = user.name;
        cardClone.querySelector('p').textContent = user.website;
        cardContainer.appendChild(cardClone);
    })
})