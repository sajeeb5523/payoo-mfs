document.getElementById('transfer_money_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById('transfer_account_number').value;

        const amount = document.getElementById('transfer_amount').value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById('transfer_pin').value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main_balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if (convertedAmount > convertedMainBalance) {
            alert('Insufficient balance');
            return;
        }

        if (accountNumber.length === 11) {
            if (convertedAmount > 0) {
                if (convertedPin === 1234) {
                    const sum = convertedMainBalance - convertedAmount;
                    document.getElementById('main_balance').innerText = sum;
                }
                else {
                    alert('Enter valid pin');
                }
            }
            else {
                alert('Add some money')
            }
        }
        else {
            alert('Enter valid account number')
        }



    });