
let Status="Order is Placed";
let user="Available";
let product="Available";
let amount =2000;
for(let i =2;Status=="Order is Placed" && user==="Available" && product==="Available" && amount>=2000 && i<=1;i++)
{
    console.log("Order is Confirmed");
}



while(Status=="Order is Placed" && user==="Available" && product==="Available")
{
    if(amount>=2000)
    {
        console.log("Order is Confirmed");
    }
    else
    {
        console.log("Order is Not Confirmed");
    }
    break;
}