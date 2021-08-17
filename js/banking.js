// handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    // deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmountText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBlanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the input deposite field
    depositeInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBlanceText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);

    const newBalanceTotal = previousBlanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    // clear the input withdraw field
    withdrawInput.value = '';
});
