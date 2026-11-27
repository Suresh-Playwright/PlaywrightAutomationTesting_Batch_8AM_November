class Employee
{
    public name : string;
    public employeeId : number;
    constructor( name:string,  employeeId:number){

        this.name= name;
        this.employeeId=employeeId

    }
    displayDetails(): void{

        console.log(this.name)
        console.log(this.employeeId)
    }
}

class Developers extends Employee{

    public technology: string;
    constructor(name : string , employeeId: number, technology: string)
    {
            super(name,employeeId)
            this.technology= technology;
    }
    writeCode():void{
        console.log(`Working with ${this.technology}`)
    }

}

const developers= new Developers("Suresh", 101 , "TypeScript");
developers.displayDetails()
developers.writeCode()