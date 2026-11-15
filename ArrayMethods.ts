let Data:number[]=[10,20,40,50]

Data.splice(2,0,30)
console.log(Data)

console.log("Before: "+ Data)

Data.push(40)

console.log("After: "+ Data)

Data.unshift(5);

console.log("After unshift: "+ Data)

Data.splice(2,0,30)
console.log(Data)