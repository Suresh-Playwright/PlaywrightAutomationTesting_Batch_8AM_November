class BankAccount
{
    balance : number = 50000;
}
const account = new BankAccount();

account.balance=100000;
console.log(account.balance)