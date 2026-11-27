class Vehicle1
{
    start(): void{
        console.log("Vehicle Started")
     }
     stop(): void{
        console.log("Vehicle Stopped")
     }

}
class Car1 extends Vehicle1
{
    drive(): void{
         console.log("Car is Driving")
    }
}

const car1 = new Car1();
car1.start()
car1.stop()
car1.drive()
