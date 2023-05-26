class Person {
    constructor(name,age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    printFullDetails(){
       return "Personla Detial"
    }

  }
  
  class Teacher extends Person {
    constructor(name, age, gender, subject) {
      super(name, age, gender);
      this.subject = subject;
    }
  
    printFullDetails(){
      console.log(super.printFullDetails());  
      console.log(`Name - ${this.name}`);
      console.log(`Age - ${this.age}`);
      console.log(`Gender - ${this.gender}`);
      console.log(`Subject - ${this.subject}`);
    }
  }

  let mathsTeacher = new Teacher("Sumit","30", "male", "Maths");
  mathsTeacher.printFullDetails();



  // 👉 New 

  // 👉 Object
  const user = {
    name: 'Nehal Mahida',
    userName: 'nehal_mahida',
    password: 'password:)',
    login: function(userName, password) {
      if (userName === this.userName && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    },
  };
  
  
 user.login('nehal', 'nehal');
 user.login('nehal_mahida', 'password:)');


  // 👉 Class
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
  
    setPassword(newPassword) {
      this.#password = newPassword;
    }
  };
  
  const nehal = new User('Nehal Mahida', 'nehal_mahida', 'password:)');
  const js = new User('JavaScript', 'js', 'python:)');
  
  
  nehal.login('nehal_mahida', 'password:)'); // Login Successfully
  js.login('js', 'python:)'); // Login Successfully
  
  console.log(nehal.name); // Nehal Mahida
  console.log(nehal.password); // undefined
  // console.log(nehal.#password); // Syntax Error
  
  nehal.setPassword('new_password:)');
  nehal.login('nehal_mahida', 'password:)'); // Authentication Failed!!
  nehal.login('nehal_mahida', 'new_password:)'); // Login Successfully





  class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }

    #validateEmail(email) {
      // check email is valid or not.
      return true;
    }
  
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    setPassword(newPassword) {
      this.#password = newPassword;
    }
  }

  class Author extends User {
    #numOfPost;
  
    constructor(email, password) {
      super(email, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      // add content to your DB. :)
      this.#numOfPost++;
    }

    getNumOfPost() {
      return this.#numOfPost;
    }
  
  }
  
  
  const h = new  Author('Siyayoudeen', 'Siya', 'holidays');
  const h2 = new User('Hello', 'js', 'learn');
  
  
  h.login('Siya', 'holidays'); // Login Successfully
  h.createPost('leave your feedback :)');
  console.log(h.getNumOfPost());
 
  h2.login('js', 'learn'); // Login Successfully

  console.log(h1.name); // Siyayoudeen
  console.log(h1.password); // undefined
  // console.log(nehal.#password); // Syntax Error
  
  h.setPassword('moreholidays');
  h.login('Siya', 'holidays'); // Authentication Failed!!
  h.login('Siya', 'moreholidays'); // Login Successfully




  class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }

    #validateEmail(userName) {
      // check email is valid or not.
      return true;
    }
  
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    setPassword(newPassword) {
      this.#password = newPassword;
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
  
  }
  
  
  const t = new  Author('Siyayoudeen', 'Siya', 'holidays');
  
  t.login('Siya', 'holidays'); // Login Successfully
  t.createPost('leave your feedback :)');
  console.log(t.getNumOfPost());
 
  console.log(t.name); // Siyayoudeen
  console.log(t.password); // undefined
  // console.log(nehal.#password); // Syntax Error

  t.setPassword('moreholidays');
  t.login('Siya', 'holidays'); // Authentication Failed!!
  t.login('Siya', 'moreholidays'); // Login Successfully