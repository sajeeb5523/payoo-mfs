document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction_history').style.display = 'none';
document.getElementById('transfer_money').style.display = 'none';

document.getElementById('add_money_box')
    .addEventListener('click', function () {
        document.getElementById('add_money').style.display = 'block';
        document.getElementById('cashout').style.display = 'none';
        document.getElementById('transaction_history').style.display = 'none';
        document.getElementById('transfer_money').style.display = 'none';
    })

document.getElementById('cash_out_box')
    .addEventListener('click', function () {
        document.getElementById('cashout').style.display = 'block';
        document.getElementById('add_money').style.display = 'none';
        document.getElementById('transaction_history').style.display = 'none';
        document.getElementById('transfer_money').style.display = 'none';
    })

document.getElementById('transaction_box')
    .addEventListener('click', function () {
        document.getElementById('transaction_history').style.display = 'block';
        document.getElementById('cashout').style.display = 'none';
        document.getElementById('add_money').style.display = 'none';
        document.getElementById('transfer_money').style.display = 'none';
    })

document.getElementById('transfer_money_box')
    .addEventListener('click', function () {
        document.getElementById('transfer_money').style.display = 'block';
        document.getElementById('transaction_history').style.display = 'none';
        document.getElementById('cashout').style.display = 'none';
        document.getElementById('add_money').style.display = 'none';
    })