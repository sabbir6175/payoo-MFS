document.getElementById('show-Cash-Out-btn')
    .addEventListener('click', function(){
    

        document.getElementById('cash-out-from').classList.remove('hidden');
        document.getElementById('add-money-from').classList.add('hidden');

    
    })



document.getElementById('show-add-money-button')
    .addEventListener('click', function(){
    

        document.getElementById('add-money-from').classList.remove('hidden');
        document.getElementById('cash-out-from').classList.add('hidden');
 
    
    })