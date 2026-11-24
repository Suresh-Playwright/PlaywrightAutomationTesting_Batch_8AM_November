class EmployeeStatus
{
    empId: number;
    empName : string;

    constructor()
    {
        this.empId=101;
        this.empName="Suresh"
    }

    display(): void{
        console.log(this.empId)
        console.log(this.empName)
    }
}

const emp1= new EmployeeStatus();

emp1.display();