// 👉 Ternary_operator

// condition ? trueExpression : falseExpression

// 1
function printPoor() {
    console.log("Poor result")
    return "poor"
  }
  
  function printSuccess() {
    console.log("Nice result")
    return "success"
  }
  
  const pass = false;
  
  const result = pass ? printSuccess() : printPoor()
  // Poor result (console.log executed)
  
  console.log(result)
  // poor