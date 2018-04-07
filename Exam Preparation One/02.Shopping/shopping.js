const priceOfChocolate = 0.65;
const priceMilkperLiter = 2.70;
const orangesPrice = 0.20;
const percent = 65 / 100;


function shopping(array) {
    let budgetPesho = array[0];
    let countOfChocolatesN = array[1];
    let litersMilkToBuy = array[2];
    let orangesCount = Math.floor(percent * countOfChocolatesN) ;

    let totalSum = ((countOfChocolatesN * priceOfChocolate) + (litersMilkToBuy * priceMilkperLiter) + (orangesCount * orangesPrice));

    let message;


    if(totalSum < budgetPesho){
        message = `You got this, ${(budgetPesho - totalSum).toFixed(2)} money left.`
    }else {
        message = `Not enough money, you need ${(totalSum - budgetPesho).toFixed(2)} more.`;
    }

    console.log(message);

}



shopping([10, 5, 1.5]);
shopping([3, 4, 2.7]);