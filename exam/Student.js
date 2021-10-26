class Student {
    constructor(id, name, gpa) {
        this.id = id; this.name = name;
        this.gpa = gpa
    }
    toString() {
        return ''
    }
}
class Course {
    constructor(code) {
        this.code = code; this.students = []
    }
    toString() {
        return ''
    }
    addStudent(c) {
        this.students.push(c)
    }
}

c = new Course('BLM305')
c.addStudent(new Student(1234, "Ali", 3.25))
c.addStudent(new Student(5678, "Veli", 2.61))