
let form = document.querySelector('.contact__form'),
    message = document.querySelector('.form-message'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    number = document.getElementById('number'),
    subject = document.getElementById('subject'),
    userMessage = document.getElementById('user-message');
const formAction = (e) => {
    e.preventDefault();
    if (name.value === '' || email.value === '' || number.value === '' || subject.value === '' || userMessage.value === '') {

        message.textContent = 'Please fill out the empty failds to contact me'
        setTimeout(() => {
            message.textContent = ''
        }, 5000)
    } else {
        setTimeout(() => {
            name.value = ''
            email.value = ''
            number.value = ''
            subject.value = ''
            userMessage.value = ''
        }, 500)
        setTimeout(() => {
            message.textContent = 'thanks for your feedback will contact you as soon possible'
        }, 400)

        setTimeout(() => {
            message.textContent = ''
        }, 5000)
    }
}
form.addEventListener('submit', formAction)