const modal = document.getElementById('modal');
const close =  document.getElementById('close');
const main__properties__Card = document.getElementById ('main__properties--Card');

modal.style.display = 'none';

main__properties__Card.addEventListener('click', e => {
    modal.style.display = 'flex';
})

close.addEventListener('click', e => {
    modal.style.display = 'none';
})