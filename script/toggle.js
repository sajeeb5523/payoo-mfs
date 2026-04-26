document.getElementById('cashout').style.display = 'none';

document.getElementById('add_money_box')
    .addEventListener('click', function () {
        document.getElementById('cashout').style.display = 'none';
        document.getElementById('add_money').style.display = 'block';
    })

document.getElementById('cash_out_box')
    .addEventListener('click', function () {
        document.getElementById('cashout').style.display = 'block';
        document.getElementById('add_money').style.display = 'none';
    })