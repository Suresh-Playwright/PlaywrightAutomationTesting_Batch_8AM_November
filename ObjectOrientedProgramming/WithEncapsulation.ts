class AxisBank
{
    private balance : number = 50000;

    public Deposit(amount : number) : void{
           
        if(amount >=0)
        {
            this.balance+=amount; // this.balance= this.balance+amount
            // this.balance= 50000+ 10000;
            // 60000
            console.log("Balance is Updated")
        }

        else{
            console.log("Invalid Balance")
        }
        


    }

    public CheckBalance(): number
    {
          return this.balance
    }

}

const axis= new AxisBank();

//axis.balance=1000000;

axis.Deposit(10000);

console.log(axis.CheckBalance())
axis.Deposit(-10000);
console.log(axis.CheckBalance())

