const API_ofertas = "http://localhost:3000/ofertas";
const API_ubicaciones = "http://localhost:3000/ubicaciones";
const API_usuarios = "http://localhost:3000/usuarios"

const close = document.getElementById('close');
const address = document.getElementById('address');
const location = document.getElementById('location');
const offerCard = document.getElementById('offerCard')
const locationSelect =  document.getElementById('locationSelect');
const locationName = document.getElementById('locationName');
const productsInCart = document.getElementById ('productsInCart');

locationSelect.style.display = 'none';

locationName.addEventListener('click', e => {
    locationSelect.style.display = 'flex';
})

close.addEventListener('click', e => {
    locationSelect.style.display = 'none';
})

const opcionesUbicaciones = async () => {
    const respuesta = await fetch(API_ubicaciones);
    const data = await respuesta.json()
    data.forEach(element => {
        const{id, ciudad} = element;
        address.innerHTML += `
        <option value="${id}">${ciudad}</option>
        `
    });
}
document.addEventListener('DOMContentLoaded', opcionesUbicaciones)

const pintarProductos = async () => {
    const respuesta = await fetch(API_ofertas);
    const data = await respuesta.json()
    data.forEach(element => {
        const{nombre, precioFinal, imagen} = element;
        offerCard.innerHTML += `
            <div class="offerCardiv">
                <label id="discount" for="">32% dto.</label>
                <div id="offerCardinfo" class="offerCardinfo">
                    <figure><img src="${imagen}" alt=""></figure>
                    <div class="precios">
                        <p class="precio">${precioFinal}/kg</p>
                    </div>
                    <p class="nombre">${nombre}</p>
                    <button class="button" type="button">Agregar</button>
                </div>
            </div>
        `
    });
}

document.addEventListener('DOMContentLoaded', pintarProductos)