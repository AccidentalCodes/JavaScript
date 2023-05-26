for (counter = 1; counter < 4; counter++) { 
    // count from 1 to 3 three times
    console.log("Count from 1 to 3");
    for (counterTwo = 1; counterTwo < 4; counterTwo++){
        console.log(counterTwo);
    }
}



for(let i = 1; i<4; i++){
    document.write("#");
    for(let j = 1; j<4; j++){
        document.write("@");
    }
}


for ( let r = 1; r <= 8; r++) {
    let s=" "
for ( let c = 1; c <=8; c++) {
    s += "*"
    }
     document.write("<br>")
     document.write(s)           
   }
  

// 👉 Nested do while
   var i =0;
   var j =0;
   var k=0;
   var l=0;
   do{
   do{
   do{
   do{
   console.log("**");
   console.log("\n");
   l++;
   }while(l<2)
   k++;
   }while(k<2)
   j++;
   }while(j<2)
   i++;
   }while(i<2) 

// output
  // **
  // **
  // **
  // **
  // **