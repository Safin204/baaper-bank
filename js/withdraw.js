document.getElementById('btn-withdraw').addEventListener('click', function () {


    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert('PLEASE PROVIDE A VALID NUMBER');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank ato taka nai');
        return;
    }

    const curentWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = curentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})