abstract class Vehicle
{
    abstract startEngine(): void;

    stopEngine(): void{
        console.log("Engine Stopped")
    }
}
abstract class Test
{
    abstract startEngine(): void;

    stopEngine(): void{
        console.log("Engine Stopped")
    }
}
class Car extends Vehicle
{
    startEngine(): void {
        console.log("Car Engine Started")
    }
}

class Bike extends Test
{
    startEngine(): void {
        console.log("BIKE Engne Started")
    }
}
// Creating Objects

const car = new Car()
car.startEngine()
car.stopEngine()
const bike= new Bike()
bike.startEngine()
bike.stopEngine()
//const vehicle= new Vehicle();