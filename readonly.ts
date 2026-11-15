
let Numbers: readonly number[]=[10,20,30,40];
console.log(Numbers);


//Numbers.push(50); // Error: Property 'push' does not exist on type 'readonly number[]'.
//Numbers[0]=100; // Error: Index signature in type 'readonly number[]' only permits reading.