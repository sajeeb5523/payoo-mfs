document.getElementById('login_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account_number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    if (accountNumber.length === 11) {
        console.log('number okey');
        if (convertedPin === 1234) {
            sessionStorage.setItem('loggedIn', 'true');
            window.location.replace('./main.html');
        }
        else {
            alert('Pin wrong');
        }
    }
    else {
        alert("Need valid account number");
    }
})