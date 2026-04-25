document.getElementById('add_money')
    .addEventListener('click', function () {
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main_balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if (amount && pin) {
            if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById('main_balance').innerText = sum;
            }
            else {
                console.log('add kora jabe na');
            }
        }
        else{
            alert("Enter valid pin and some money")
        }
    })