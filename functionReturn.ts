function calculateSalary() {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}

let salary = calculateSalary(50000, 10000);
console.log(salary); // Output: 60000



// let basicSalary: number = 50000;
// let bonus: number = 10000;
// let totalSalary: number = basicSalary + bonus;
// console.log(totalSalary); // Output: 60000