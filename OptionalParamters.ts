function employeeDetails
(
    name: string,
    age?:number
): void{
    console.log("Name"+name)
    console.log("Age"+age)
}
employeeDetails("Suresh")
employeeDetails("Ravi",25)
