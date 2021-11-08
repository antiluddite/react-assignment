React week 1 workshop. some tinkering with code between me and ashley:

//not correct. don't use Student class in the Student.email. make a const filteredStudents with filter
<script>
registerStudents(studentToRegister); {
    if (this.students.filter(s => s.email === Student.email).length) {
        console.log(`This student is already registered`)
    } else {
        this.students.push(Student);
        console.log(`Registering ${Student.email} to the bootcamp Web Dev Fundamentals.`)
    }
}


//made Const = filteredStudents and used studentToRegister.email
registerStudent(studentToRegister); {
    const filteredStudents = this.students.filter(s => s.email === student.email).length

    if (filteredStudents) {
        console.log (`The student ${studentToRegister.email} is already registered.`)
    } else {
        this.students.push(Student);
        console.log (`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`)
    return this.students
    }
}


registerStudent(studentToRegister) 
    const isStudentRegistered = this.students.filter( student => student.email === studentToRegister.email);
    // .length === 0 means it is checking if it is true (exists)
    if (isStudentRegistered.length === 0) {
        console.log(`This student ${studentToRegister.email} is not registerd.`)
        this.students.push(studentToRegister);    
        }
        else {
            console.log(`The student ${studentToRegister.email} is already registered to ${this.name}`)
        }
        return this.students;

        </script>