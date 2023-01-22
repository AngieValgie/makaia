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
const compliteContainer = document.getElementById('compliteContainer');

form.addEventListener("submit", e => {
    e.preventDefault();
    namep.innerHTML = ''; /* para que no se sobre escriba el inner de los ifs */
    numberp.innerHTML = '';
    expDatep.innerHTML = '';

    if (name.value.length < 1) {
      namep.innerHTML += `<p class="message">Can't be blank</p>`
    }
    localStorage.setItem('Name',name.value); // Para tener en cuenta con los input: Con this estás haciendo referencia am input, que es un elemento html, de ahí el resultado que obtienes. Si quieres que aparezca el contenido del input, accede a la propiedad value del input: this.value.

    if (cardNumber.value.length < 1) {
      numberp.innerHTML += `<p class="message">Can't be blank</p>`
    }
    localStorage.setItem('CardNumber',cardNumber.value);

    if (mm.value.length < 1) {
      expDatep.innerHTML += `<p class="message">The MM can't be blank</p>`
    }
    localStorage.setItem('Mm',mm.value);

    if (yy.value.length < 1) {
      expDatep.innerHTML += `<p class="message">The YY inf can't be blank</p>`
    }
    localStorage.setItem('Yy',yy.value);

    if (cvc.value.length < 1) {
      expDatep.innerHTML += `<p class="message">The cvc info can't be blank</p>`
    }
    localStorage.setItem('Cvc',cvc.value);

    if (name.value.length > 0 && cardNumber.value.length > 0 && mm.value.length > 0 && yy.value.length > 0) {
      form.style.display = 'none';
      compliteContainer.innerHTML += `
        <figure> <img src="images/icon-complete.svg" alt=""></figure>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button type="button">Continue</button>
      `
    }
})
 
