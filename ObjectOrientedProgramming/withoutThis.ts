class StudentInfo
{
     studentName : string;

     constructor(studentName : string)
     {
        studentName= studentName;
     }
}

const s1= new StudentInfo("Ravi");
console.log(s1.studentName)