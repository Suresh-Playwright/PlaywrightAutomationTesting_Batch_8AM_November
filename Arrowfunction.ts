// Without Parameters

const Welcome= () : void =>
     {console.log("Welcome to Playwright")}

Welcome();

// With Parameters
const addition1 = (a:number , b:number) : number =>

{

    return a+b;
}
console.log(addition1(10,20))

//Single Line arrow Function:

const square = (num : number) : number => num * num;
console.log(square(5))