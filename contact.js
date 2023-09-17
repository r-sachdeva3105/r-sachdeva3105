(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('Jlt9qiJOLMGoiJ5N9');
})();

var values = {
    user_name: document.getElementById('name').value,
    user_email: document.getElementById('email').value,
    message: document.getElementById('message').value
};

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_98xyw8s', 'template_kcngaov', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('contact-form').reset();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}