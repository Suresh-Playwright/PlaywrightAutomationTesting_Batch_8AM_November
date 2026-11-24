class Student
{
    studentId : number;
    studentName : string;
    age : number

    constructor(id:number, name : string , age :number)
    {
        this.studentId=id;
        this.studentName=name;
        this.age=age;
    }
    display(): void{

        console.log("ID:", this.studentId)
        console.log("Name:", this.studentName)
        console.log("Age:", this.age)
    }
}
const s1= new Student(101,"Ravi",22);
s1.display()