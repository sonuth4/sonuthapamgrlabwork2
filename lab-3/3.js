class Student {
    constructor() {
      this.name = '';
      this.surname = '';
      this.country = '';
      this.tuition = 0;
      this._indexNumber = 0;
    }
  
    
    getName() {
      return this.name;
    }
  
    getSurname() {
      return this.surname;
    }
  
    
    helloWorld() {
      return "Hello World";
    }
  
    
    _helloFamily() {
      return "Hello Family";
    }
  
    
    #helloMe() {
      return "Hello me!";
    }
  
    
    #getTuition() {
      return this.tuition;
    }
  
    
    setTuition(value) {
      this.tuition = value;
    }
  
    setIndexNumber(value) {
      this._indexNumber = value;
    }
  
    
    getHelloMe() {
      return this.#helloMe();
    }
  
    getTuitionValue() {
      return `Tuition: ${this.#getTuition()}`;
    }
  }
  
  class PartTimeStudent extends Student {
    
    helloParent() {
      return this._helloFamily();
    }
  }
  
  
  const student1 = new Student();
  student1.name = "Sonu";
  student1.surname = "Thapa";
  student1.country = "Italy";
  student1.setTuition(5000);
  
  console.log(student1.getName()); 
  console.log(student1.getSurname()); 
  console.log(student1.helloWorld()); 
  console.log(student1.getHelloMe()); 
  console.log(student1.getTuitionValue()); 
  
  const partTimeStudent = new PartTimeStudent();
  console.log(partTimeStudent.helloParent()); 
  