class StudentInfo1{


    studentName: string;

    constructor(studentName : string)
    {
        this.studentName= studentName;
    }
}

const s2= new StudentInfo1("Ravi")
console.log(s2.studentName)