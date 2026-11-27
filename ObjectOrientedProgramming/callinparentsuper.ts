class Bank
{
    calculateInterest(): void {
        console.log(" Default Interest Calculation")
    }
}
class SavingsAccount extends Bank{

    override calculateInterest(): void {
         super.calculateInterest()
         console.log("Savings account Interest calculator")
    }
}

const account = new SavingsAccount();
account.calculateInterest()