async function fetchData() {
    const randNum = Math.floor(Math.random() * 10) + 1;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${randNum}`);
    if(!resp.ok) {
        throw new Error('Network error when fetching!');
    }
    const data = await resp.json();
    return data.name;
};

const para = document.querySelector('p');
const btn = document.querySelector('button');
btn.addEventListener(('click'), async ()=> {
    para.textContent = await fetchData();
})