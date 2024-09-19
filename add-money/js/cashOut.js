

document.getElementById('btn-cash-Out-Money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = document.getElementById('cashOutAmount').value;
        const pinNumber = document.getElementById('pin').value;
        console.log(cashOut, pinNumber);

        if(pinNumber === '1234'){
            const balanceTotal = document.getElementById('Account-Balance').innerText;
            const cashOutBalance = parseFloat(balanceTotal)
            const cashOutMoney = parseFloat(cashOut)
            const newCashOutMoney = cashOutBalance - cashOutMoney;
            document.getElementById('Account-Balance').innerText = newCashOutMoney;
        }
        else{
            alert('Wrong pin number')
        }
    })