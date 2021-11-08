class Student {
    constructor(name, email, community) {
      this.name = name;
      this.email = email;
      this.community = community;
    }
    
  }

  class Bootcamp {
    constructor(name, level, students=[]) {
      this.name = name;
      this.level = level;
      //Bootcamp class so that if it the "students" parameter is not passed in, it is by default initialized to be an empty array from within the constructor parameter list itself.
      this.students = students;
    }
    registerStudent(studentToRegister) {
        //Array method to verify if the student's email address is already registered
        const filteredEmail = this.students.filter(s => s.email === studentToRegister.email);
        //the s in s and s.email could be anything but in this case it stands for student and student.email
        //you don't need >0; it is assumed
        if (filteredEmail.length > 0) {
            console.log(`Student ${Student.email} already exists.`)
            return
        }
        else {
            console.log(`Student ${Student.email}does not alrealy exist`)
            this.students.push(studentToRegister)
        }
        console.log(this.students)
        return this.students
    }
    
  }

const student1 = new Student("maureen", "maureen@gmail.com", "nucamp")
const bootcamp1 = new Bootcamp("maureen", "1")

bootcamp1.registerStudent(student1)
bootcamp1.registerStudent(student1)







