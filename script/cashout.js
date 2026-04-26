document.getElementById('cashout')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const pin = document.getElementById('cashout_pin').value;
        const convertedPin = parseInt(pin);

        const amount = document.getElementById('cashout_amount').value;
        const convertedAmount = parseFloat(amount);

        const mainBalance = document.getElementById('main_balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if (convertedPin === 1234) {
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main_balance').innerText = sum;
        }
        else {
            console.log('Enter valid pin');
        }
    })