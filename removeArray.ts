let removeArray: number[] = [10, 20, 30, 40, 50];
removeArray.pop();
console.log(removeArray);

removeArray.shift();
console.log(removeArray);


let spliceRemove: number[]=[10,20,30,40,50,60]

spliceRemove.splice(2,1);

console.log(spliceRemove)

spliceRemove.splice(2,4);
console.log(spliceRemove)


spliceRemove.splice(2,0);
console.log(spliceRemove)


delete spliceRemove[1];
console.log(spliceRemove)