console.log('hello siya');

let title = document.getElementById('titleinht')
console.log(title.innerText);

title.innerText = 'hello again'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// let squares = document.querySelectorAll('.color')

// squares.forEach = (square => {square.onclick = () => console.log(square.value)})

redDiv.onclick = () => console.log(redDiv.value);
yellowDiv.onclick = () => console.log(yellowDiv.value);
greenDiv.onclick = () => console.log(greenDiv.value);

