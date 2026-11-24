class Car 
{
    brand : string = "BMW";
    color : string = "Black";

    start()
    {
        console.log("Car Started");
    }
    stop()
    {
        console.log("Car Stopped")
    }
}
// Creating Object

const car1 = new Car();

console.log(car1.brand)
console.log(car1.color)

car1.start()
car1.stop()