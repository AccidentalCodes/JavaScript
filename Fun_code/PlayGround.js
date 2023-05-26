// 👉 Input from User
item = prompt("what is ur favirote fruit")
console.log(item);

// 👉 Percentage Calculation
amount = Number(prompt("Enter the Number")) 
tips = Number(prompt("Tips")) / 100
total = amount + tips
console.log(total);

console.log("Amount",amount)
console.log("Tips",tips);


// 👉 Variables 
Let // 👉 value can be changed
Var // 👉 value can be changed
Const // 👉 value cannot be changed




const generate =()=> {
    const otp = ""
    for(let i = 0;i<4;i++){
        otp += Math.floor(Math.random()*9)
    }
    console.log(otp);
}