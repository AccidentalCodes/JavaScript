// 👉 For Loop
for (initialization; condition; finalExpression) {
    // code
  }


const fruitt = ['🍎','🍌','🥭','🍪','🍫','🍎','🍌','🥭','🍪','🍫','🍎','🍌','🥭','🍪','🍫']


for (let i = 0;i < fruitt.length; i++)
{
    console.log(i,fruitt[i]);
}

// 👉 New way to decular the FOR Loop
for (friut of fruitt)
{
    console.log(friut);
}


const checkfunction = (para) => {
    for(let i=0; i<=qq.length; i++){
    console.log(i);
}

}
checkfunction([6,7,8,9,10])



// 👉 finding the index number of strings
// let result = 0
// const many = () => {
//     let phrase = 'hello there! how are you?'
//     for(letter in phrase){
//         console.log(letter);
//     }
//     return {result : letter}
// }
// many()

let result = 0
const many = (ph1) => {    
    for(le in ph1){
    console.log(le);      
    }
    return {result : le}
}
let ph1 = prompt()
console.log(many(ph1));


const letter = (phr) => {
for (const lett of phr )
{
    console.log(lett)
    return phr.sort((a, b) => a - b)
}
}
let phr = [1,5,53,42,66]
console.log(letter(phr));


const letterfrequency = (word) => {
let freq = {}
for(const l of word)
{
    if(l in freq)
    {
        freq[l] = freq[l] + 1 // freq[l] += (or) freq[l]++
    }
    else{

        freq[l] = 1
    }
}
return freq
}

console.log(letterfrequency('hello this is siya')); 

// 👉 Incremental Operator
// ++,--,+=


