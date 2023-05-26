class Stack {
  constructor(){
    this.array = [];
  }

  push(value) 
  {
    this.array.push(value);
  }

  pop()
  {
    if (this.array.length === 0) return "Underflow";
    return this.array.pop();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.array.length; i++) 
    {
      str += `<li> ${this.array[i]} </li>`;
    }
   return str;
  }
}

const stack = new Stack();

function pushItem() {
  const input = document.getElementById("user-input").value;

  if (input === "") {
    alert("Please enter a value!");

  } 
  else 
  {
    stack.push(input);

    document.getElementById("stack").innerHTML = stack.printStack();

    document.getElementById("input");
  }
}

function popItem() {
  const pop = stack.pop();

  document.getElementById("stack").innerHTML = stack.printStack();
}
