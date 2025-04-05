document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const formContent = document.getElementById('form-content');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Zabrání odeslání formuláře
        formContent.style.display = 'none'; // Skryje celý div #form-content
        thankYouMessage.style.display = 'block'; // Zobrazí poděkování a kontaktní informace
    });
});

