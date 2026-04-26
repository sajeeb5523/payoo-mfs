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

                    // transfer money history show 
                    const container = document.getElementById('transaction_container');
                    const date = new Date();
                    const timestamp = date.toLocaleString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    });

                    const div = document.createElement('div');
                    div.classList.add('bg-white', 'mt-5', 'p-3', 'rounded');
                    div.innerHTML = `
                        <div class="text-sm text-slate-500">${timestamp}</div>
                        <div class="mt-2 text-slate-900">
                            Transfer <span class="text-rose-600 font-semibold">${- convertedAmount}</span> from account <span class="text-blue-600 font-semibold">${accountNumber}</span>
                        </div>
                    `;
                    container.appendChild(div);
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