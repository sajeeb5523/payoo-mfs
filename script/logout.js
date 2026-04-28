document.getElementById('logout_btn')
    .addEventListener('click', function () {
        sessionStorage.removeItem('loggedIn');
        window.location.replace('index.html');
    });