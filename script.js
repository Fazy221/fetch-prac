async function fetchReq () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if(!res.ok) {
        throw new Error('server error');
    }
    const data = await res.json();
    return data.name;
};

fetchReq().then((result)=> console.log(result));