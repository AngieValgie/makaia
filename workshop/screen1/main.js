const inputUno = document.getElementById('1')
const inputDos = document.getElementById('2')
const inputTres = document.getElementById('3')
const inputCuatro = document.getElementById('4')
const inputCinco = document.getElementById('5')
const button = document.getElementById('button')
const buttonsContainer = document.getElementById('buttonsContainer')
const selected =  document.getElementById('selected')
let numero;

selected.style.display = 'none';

button.addEventListener('click', calificacion)

function calificacion(){
    if(inputUno.checked){
        numero = 1;
    } else if (inputDos.checked){
        numero = 2;
    } else if (inputTres.checked){
        numero = 3;
    } else if (inputCuatro.checked){
        numero = 4;
    }else if(inputCinco.checked){
        numero = 5;
    }

    localStorage.setItem('num', numero);

    render()
}

const render = () => {
  buttonsContainer.style.display = 'none'
  selected.style.display = 'flex'
  selected.innerHTML += `
        <img src="/images/illustration-thank-you.svg" alt="">
        <div class="selected">
            <p>You selected ${localStorage.getItem('num')} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  ` 
}

const handleNum = () => {
    console.log()
}

button.addEventListener('click', handleNum)