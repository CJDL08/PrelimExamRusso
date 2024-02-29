document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();        
        alert('Thank you for booking with us, Please check your email!');
        window.location.href = '../../main.html';


    });
});


