import throttle from "lodash.throttle";

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

function saveData() {
    const data = {
        email: emailInput.value,
        message: messageInput.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}

function loadData() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData) {
        emailInput.value = savedData.email;
        messageInput.value = savedData.message;
    }
}

function submitData(event) {
    event.preventDefault();
    const data = {
        email: emailInput.value,
        message: messageInput.value
    }
    console.log(data);
    localStorage.clear()
    form.reset();
}

form.addEventListener('input', throttle(saveData, 500));
loadData();
form.addEventListener('submit', submitData);