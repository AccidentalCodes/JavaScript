// 👉 Constructor
// A constructor is a special function that creates and initializes an object instance of a class.

class Student{
    constructor(name,idnum,age,salary)
    {
        this.name = name
        this.idnum =  idnum 
        this.age = age
        this.salary = salary
    }
}

student1 = new Student('a',1,20,30000)
student2 = new Student('b',2,22,50000)
student3 = new Student('c',3,22,35000)
student4 = new Student('d',4,25,40000)
console.log(student4);

// 👉 Class and Constructor
// class student{
//     constructor(name,idnum,age,salary)
//     {
//         this.name = name
//         this.idnum = idnum 
//         this.age = age
//         this.salary = salary
//     }
// }
// student1 = new student(prompt('Name'),prompt('IDNum'),prompt('Age'),prompt('Salary'))


// console.log(student1);
