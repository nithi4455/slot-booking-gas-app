// scripts.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showBooking();
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showBooking();
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const type = document.getElementById('bookingType').value;
    document.getElementById('confirmationMessage').innerText = `Your booking for ${date} at ${time} (${type}) is confirmed.`;
    showConfirmation();
});

function showHome() {
    hideAllSections();
    document.getElementById('home').classList.remove('hidden');
}

function showLogin() {
    hideAllSections();
    document.getElementById('login').classList.remove('hidden');
}

function showRegister() {
    hideAllSections();
    document.getElementById('register').classList.remove('hidden');
}

function showBooking() {
    hideAllSections();
    document.getElementById('booking').classList.remove('hidden');
}

function showConfirmation() {
    hideAllSections();
    document.getElementById('confirmation').classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('login').classList.add('hidden');
    document.getElementById('register').classList.add('hidden');
    document.getElementById('booking').classList.add('hidden');
    document.getElementById('confirmation').classList.add('hidden');
}
