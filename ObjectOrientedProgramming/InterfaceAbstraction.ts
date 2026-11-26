interface Employee
{
    empId : number;
    empName : string;
    login() : void;
    logout(): void;
    status() : void;
}
class Developer implements Employee
{
    empId: number=101;
    empName: string= "Suresh";
    login(): void {
        console.log("Developer Logged In")
    }
    logout(): void {
        console.log("Developer Logout")
    }
    status(): void {
        console.log("Passed")
    }
}
const developer = new Developer()
developer.login()
developer.logout()
developer.status()