const pets = [
    {
        name : 'Selena',
        age : '15 años',
        breed : 'Alien',
        vaccines: true,
        image : 'https://i.pinimg.com/564x/6e/74/50/6e745063e0650f23c934abc6378a1758.jpg'
    },
    {
        name : 'Rei',
        age : '17 años',
        breed : 'Humana',
        vaccines: false,
        image : 'https://64.media.tumblr.com/38070d47d6f9b3937af352cc0f73bc37/98e5fc25c3059ca4-dd/s640x960/2b86590506a0744d1dd61738f7daf80731ac0d7d.jpg'
    }
]

const main__container = document.getElementById('main__container'); 

const btnNew = document.getElementById('btnNew');
const form = document.getElementById('form')
const nombre = document.getElementById('name')
const raza = document.getElementById('breed')
const edad = document.getElementById('age')
const imagen = document.getElementById('image')
const rbAlDia = document.getElementById('rbAlDia')
const rbPendiente = document.getElementById('rbPendiente')

const renderCards = () => {
    pets.forEach(pet => {
        main__container.innerHTML += `
        <article class="card">
            <figure>
                <img src="${pet.image}" alt="" class="card_image">
            </figure>
            <div class="card__body">
                <p class="card__title">Nombre: <span class="card__name">${pet.name}</span></p>

                <p class="card__title">Edad: <span class="card__name"> ${pet.age}</span></p>

                <p class="card__title">Raza: <span class="card__name"> ${pet.breed}</span></p>

                <p class="card__title">Vacunas: <span class="card__name ${pet.vaccines ? 'succes' : 'danger'}"> ${pet.vaccines ? 'Al día' : 'Pendiente'} </span></p>
            </div>
        </article>
        `
    });
}

renderCards()

//events
const handleNew = () => {
     form.classList.remove('hidden')
}

btnNew.addEventListener('click', handleNew)

const handleSubmit = (e) => {
    e.preventDefault();
    let vacunas = false;
    if (rbAlDia.checked) {
        vacunas = true;
    }

    const newPets = {
        name: nombre.value,
        age: edad.value,
        breed: raza.value,
        image: imagen.value,
        vaccines: vacunas
    }

    pets.push(newPets);
    form.reset();
    main__container.innerHTML = '';
    form.classList.add('hidden');
     renderCards()
}

form.addEventListener('submit', (e) => {
  handleSubmit(e);
})