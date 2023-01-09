const modal = document.getElementById('modal');
const close =  document.getElementById('close');

modal.style.display = 'none';

close.addEventListener('click', e => {
    modal.style.display = 'none';
})