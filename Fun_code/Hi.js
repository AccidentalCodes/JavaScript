
  class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }
   
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    setPassword(newPassword) {  //Encapsulation
      this.#password = newPassword;
    }

    
    getNationality(Nationality){
      this.Nationality= Nationality
  }   

  #isInidan(Nationality) { //abstraction
    // check Nationality
    // let d = "Indian"
    // if(d===this.Nationality){
    //     return true;
    // }
    // else
    // {
    //   return false
    // }
    let t = "Indian" === this.Nationality ?  true : false
    
  }

  showNationality()
  {   
      if(this.#isInidan()){
          return' You are an Indian'
      }
      else{
        return 'You are not an Indian'
      }
  }

    cartInfor(){
      return' Your cart is empty'
    }

  }

  class Author extends User { 
    #numOfPost;
  
    constructor(name, userName, password) {
      super(name, userName, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      // add content to your DB. :)
      this.#numOfPost++;
    }

    getNumOfPost() {
      return this.#numOfPost;
    }
    
    cartInfor(){ // Method over riding - polymorphism
      return' You have one item in your cart'
    }
  
  }
  
  const u= new User();
  u.getNationality('African'); 
  console.log(u.showNationality()); // You are not an Indian
  const t = new  Author('Siyayoudeen', 'Siya', 'holidays');
  
  t.login('Siya', 'holidays'); // Login Successfully
  t.createPost('leave your feedback :)');
  t.createPost('leave your feedback :)');
  console.log(t.getNumOfPost());
 
  console.log(t.name); // Siyayoudeen
  console.log(t.password); // undefined
  // console.log(nehal.#password); // Syntax Error

  t.setPassword('moreholidays');
  t.login('Siya', 'holidays'); // Authentication Failed!!
  t.login('Siya', 'moreholidays'); // Login Successfully
 console.log( t.cartInfor());
console.log(u.cartInfor());





// 

const generate = function(numRows) {
  if (!numRows) {
    return [];
  }
  const output = new Array(numRows);
  output[0] = [1];
  for (let i = 1; i < numRows; i++) {
    output[i] = new Array(i + 1).fill(0);
    for (let j = 0; j < i + 1; j++) {
      output[i][j] = (output[i - 1][j - 1] || 0) + (output[i - 1][j] || 0);
    }
  }
  return output;
};

generate()

// 

function hello(n){
  for(let i = 1;i<=n;i++){
    let c= 1
    for(let j=1;j<=i;j++){
      document.write(c+" ");
      c=c*(i-j)/j
    }
    document.write("<br>")
  }
}
hello(5)



function hello(n){
  let d = []
  for(let i = 1;i<=n;i++){
    let c = 1
    let w = []
    for(let j=1;j<=i;j++){
      console.log("w",w);
      w.push(c+" ")
      console.log(c+" ");
      console.log(j,"bef-j");
      c=c*(i-j)/j
      console.log(c,"c");
    }
 d.push(w);
  }
return d
}
console.log(hello(5));



function hello(n){
  let d = []
  for(let i = 1;i<=n;i++){
    let c = 1
    let w = []
    for(let j=1;j<=i;j++){
      w.push(c+" ")
      c=c*(i-j)/j
    }
 d.push(w);
  }
return d
}
console.log(hello(5));