const loanAmount = document.querySelector("#input-loan-amount");
const interestRate = document.querySelector("#input-interest-rate");
const monthsToRepay = document.querySelector("#input-months-to-repay");
const btnCalculate = document.querySelector("#btn-calculate");
const outputArea = document.querySelector("#output-area");



function calculateAmount() {
    
  
    let netRate = 100+Number(interestRate.value);
    let netAmountToBePaid = netRate*loanAmount.value/(100*Number(monthsToRepay.value));

    if(isNaN(netAmountToBePaid) === true || netAmountToBePaid === Infinity || netAmountToBePaid < 0) {
        outputArea.innerText = `Please enter an appropriate input.`;
    }

    else 
    outputArea.innerText = `The amount to be repaid is : ${netAmountToBePaid} per month.`

}


btnCalculate.addEventListener("click", calculateAmount);