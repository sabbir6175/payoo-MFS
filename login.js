

// document.getElementById('id').addEventListener('click', function)


// document.getElementById('button-login')
//     .addEventListener('click', function(event){
//         event.preventDefault();
//          console.log('login button click');
//          const phoneNumber = document.getElementById('Phone-Number').value;
//          console.log(phoneNumber);
// })


// document.getElementById('button-login')
//     .addEventListener('click', function(event) {
//         event.preventDefault();
//         // console.log('some time going the market');
//         const phoneNumber = document.getElementById('Phone-Number').value;
//         const pinNumber = document.getElementById('Pin-Number').value;
//         console.log(phoneNumber,pinNumber);


//         // this is temporary you should do like this

//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('you are log in ');
//         }
//         else{
//             alert('wrong phone number and pin')
//         }
// })


document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('click me');
    const Email = document.getElementById('Email').value;
    const pinNumber = document.getElementById('Pin-Number').value;
    console.log(Email, pinNumber);


    // simple test 
    if(Email === "sabbirhasannahid1661@gmail.com" && pinNumber == "sabbir"){
        console.log('login successfully ')
        window.location.href ='add-money/index.html'
        window.location.href = './add-money/index.html';
    }else{
        alert('wrong Email & pinNumber please provide right email & pinNumber')
    }
})




