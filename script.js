const loanAmount = document.querySelector("#input-loan-amount");
const interestRate = document.querySelector("#input-interest-rate");
const monthsToRepay = document.querySelector("#input-months-to-repay");
const btnCalculate = document.querySelector("#btn-calculate");
const outputArea = document.querySelector("#output-area");


function calculateAmount() {
    // let amountToBePaid = (100+Number(interestRate.value/100))*loanAmount.value;

    let netRate = 100+Number(interestRate.value);
    console.log(netRate);
    let netAmountToBePaid = netRate*loanAmount.value/(100*Number(monthsToRepay.value));

    outputArea.innerText = `The amount to be repaid is : ${netAmountToBePaid} per month.`

}


btnCalculate.addEventListener("click", calculateAmount);