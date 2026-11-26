interface Payment
{
    pay(amount : number):void;
  
}
interface Payment2
{
    balance():void;
}
class GooglePay implements Payment, Payment2
{
    pay(amount: number): void {
        console.log(`Paid ${amount} using Google Pay`)
    }
    balance(): void {
        console.log("Balance is fetching wait")
    }
}
class CreditCard implements Payment
{
    pay(amount: number): void {
         console.log(`Paid ${amount} using Credit Card`)
    }
}
class DebitCard implements Payment{
    pay(amount: number): void {
         console.log(`Paid ${amount} using Debit Card`)
    }
}

const payment1= new GooglePay()
payment1.pay(1000)

const payment2= new CreditCard()
payment2.pay(2000)

const payment3 = new DebitCard()
payment3.pay(3000)