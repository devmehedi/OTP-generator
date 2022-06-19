function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit', pin)
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function submitPin() {
    const displayPin = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (displayPin == calcInput) {

        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {

        failMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }

}