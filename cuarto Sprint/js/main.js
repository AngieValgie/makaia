const API_ofertas = "http://localhost:3000/ofertas";
const API_ubicaciones = "http://localhost:3000/ubicaciones";
const API_usuarios = "http://localhost:3000/usuarios";

const address = document.getElementById("address");
const carrito = document.getElementById("carrito");
const location = document.getElementById("location");
const close = document.getElementById("close");
const closeProducts = document.getElementById("closeProducts");
const cerrarDetallesProducto = document.getElementById(
  "cerrarDetallesProducto"
);
const offerCard = document.getElementById("offerCard");
const detallesProducto = document.getElementById("detallesProducto");
const carrusel = document.getElementById("carrusel");
const locationSelect = document.getElementById("locationSelect");
const locationName = document.getElementById("locationName");
const productsInCart = document.getElementById("productsInCart");
const subtractProduct = document.getElementById("subtractProduct");
const sumProduct = document.getElementById("sumProduct");
const amount = document.querySelector(".amount");
const addRemove = document.querySelector(".addRemove");
const deliver = document.querySelector(".deliver");
let cantidad = 0;
let productos = [];
let ubi = [];

const productosAPI = (data) => {
  productos = data;
  console.log(productos);
};

const ubiAPI = (data) => {
  ubi = data;
  console.log(ubi);
};

productsInCart.style.display = "none";
carrito.addEventListener("click", (e) => {
  productsInCart.style.display = "flex";
});

closeProducts.addEventListener("click", (e) => {
  productsInCart.style.display = "none";
});

detallesProducto.style.display = "none";
cerrarDetallesProducto.addEventListener("click", (e) => {
  detallesProducto.style.display = "none";
});

locationSelect.style.display = "none";
locationName.addEventListener("click", (e) => {
  locationSelect.style.display = "flex";
});

close.addEventListener("click", (e) => {
  locationSelect.style.display = "none";
});

/* agregar los productos al inicio */
const pintarProductos = async () => {
  const respuesta = await fetch(API_ofertas);
  const data = await respuesta.json();
  productosAPI(data);
  data.forEach((element) => {
    const { id, nombre, precioFinal, imagen } = element;
    offerCard.innerHTML += `
            <div class="offerCardiv">
                <label id="discount" for="">32% dto.</label>
                <div id="offerCardinfo" class="offerCardinfo">
                    <figure><img src="${imagen}" alt=""></figure>
                    <div class="precios">
                        <p class="precio">${precioFinal}/kg</p>
                    </div>
                    <p class="nombre">${nombre}</p>
                    <button id="${id}" class="button" type="button">Agregar</button>
                </div>
            </div>
        `;
  });
};
document.addEventListener("DOMContentLoaded", pintarProductos);

/* para agregar las opcines de ubicación desde la API */
const opcionesUbicaciones = async () => {
  const respuesta = await fetch(API_ubicaciones);
  const data = await respuesta.json();
  ubiAPI(data);
  data.forEach((element) => {
    const { id, ciudad } = element;
    address.innerHTML += `
        <option value="${id}">${ciudad}</option>
        `;
    localStorage.setItem("Ciudad", ciudad);
  });
};
document.addEventListener("DOMContentLoaded", opcionesUbicaciones);

/* usar la ubicación guardada */
const ubiGuardada = () => {
  deliver.innerHTML += `
  <p>Entregar en: <span>${localStorage.getItem("Ciudad")}</span></p>
  `;
};
document.addEventListener("DOMContentLoaded", ubiGuardada);

offerCard.addEventListener("click", (e) => {
  if (e.target.localName == "button") {
    const arrayFilter = productos.filter((item) => item.id == e.target.id);
    console.log(arrayFilter);

    detallesProducto.style.display = "flex";
    const img = document.querySelector(".producto");
    const detallesPrecio = document.querySelector(".detallesPrecio");
    const nombrecito = document.querySelector(".nombrecito");

    arrayFilter.forEach((item) => {
      img.src = item.imagen;
      detallesPrecio.textContent = item.precioFinal;
      nombrecito.textContent = item.nombre;
      /* detallesProducto.querySelector(".producto").src = item.imagen; */
    });
  }
  addRemove.addEventListener("click", (e) => {
    console.log("escuchando para sumar o restar");
  });
});
