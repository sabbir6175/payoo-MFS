

//Add money start
document.getElementById('btn-add-Money')
    .addEventListener('click', function(event){
        event.preventDefault();


        const addMoneyInput = document.getElementById('addAmount').value;
        const pinNumber = document.getElementById('pinNumber').value;
        console.log(addMoneyInput , pinNumber);
        // wrong way in the check pin number
        if(pinNumber === '1234'){
            console.log('you are login successfully');

            const balance = document.getElementById('Account-Balance').innerText
            const addBalance = parseFloat(balance);
            const addMoneyBalance = parseFloat(addMoneyInput);
            const newBalance = addBalance + addMoneyBalance;
            document.getElementById('Account-Balance').innerText = newBalance
        }else{
            alert('Wrong Pin Number please current pinNumber');
        }
});