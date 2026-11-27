class Animal
{
    sound(): void{
        console.log("Animal makes a sound")
    }
}

class Dog extends Animal{

    override sound(): void{
         console.log("Dog Barks")
    }
}

class Cat extends Animal{

    override sound(): void {
         console.log("Cat meows")
    }
}
const dog= new Dog()
const cat = new Cat()
dog.sound()
cat.sound()