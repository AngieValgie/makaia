const cardNum = document.getElementById('cardNum');
const cardName = document.getElementById('cardName');
const cardExpDate = document.getElementById('cardExpDate');
const cardCvc = document.getElementById('cardCvc');

const name = document.getElementById('name');
const cardNumber = document.getElementById('cardNumber');
const mm = document.getElementById('mm');
const yy = document.getElementById('yy');
const cvc = document.getElementById('cvc');
const form = document.getElementById('form');

const namep = document.getElementById('namep');
const numberp = document.getElementById('numberp');
const expDatep = document.getElementById('expDatep');
const cvcp = document.getElementById('cvcp');

form.addEventListener("submit", e => {
    e.preventDefault();

    if (name.value.length < 1) {
      namep.innerHTML += `<p class="message">Can't be blank</p>`
    }

    if (cardNumber.value.length < 1) {
      numberp.innerHTML += `<p class="message">Can't be blank</p>`
    }

    if (mm.value.length < 1) {
      expDatep.innerHTML += `<p class="message">Can't be blank</p>`
    }
})