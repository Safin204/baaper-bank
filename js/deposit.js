document.getElementById('deposit').addEventListener('click', function () {
    // console.log('add deposit');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const curentdepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = curentdepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const curentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = curentBalanceTotal;

    depositField.value = '';

})