async function apis(){
    const post = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const postnew = await post.json();
    console.log(postnew);
}

apis()