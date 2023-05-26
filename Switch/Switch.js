// 👉  Switch Case

switch (expression) {
    case value1:
      // code block to be executed if expression == value1
      break;
    case value2:
      // code block to be executed if expression == value2
      break;
    default:
      // code block to be executed if expression is different from both value1 and value2
  }



// 1
let day = prompt();
switch (day) {
  case 'monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  default:
    console.log('Today is some other day');
}

// 2
var score = 70
switch(true){
    case score > 50:
        console.log("s")
        break;
        console.log("a")
}