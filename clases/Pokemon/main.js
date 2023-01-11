const CardsContainer = document.getElementById("CardsContainer");

let habilidades = [];
let nombre = "";
let peso = "";
let altura = "";
let experiencia = "";
let img = "";

let url = "https://pokeapi.co/api/v2/pokemon/700/";
const getpokemon = async () => {
  const response = await fetch(url);
  console.log('hola');
  const data = await response.json();
  console.log(data);
  return data;
}

const renderPoke = () => {
  CardsContainer.innerHTML = "";
  CardsContainer.innerHTML += `
   <figure class="CardPoke">
        <img
          src="${img}"
          alt=""
        />
        <figcaption class="descripcionPokemon">
          <h2>Nombre: ${nombre}</h2>
          <h3>Peso: ${peso}</h3>
          <h3>Altura: ${altura}</h3>
          <ul>
           <li>Habilidad: ${habilidades[0].ability.name}</li>
           <li>habilidad: ${habilidades[1].ability.name}</li>
          </ul>
          <h3>Experiencia: ${experiencia}</h3>
        </figcaption>
      </figure>
   `;
};

const InfoPoke = async () => {
  const data = await getpokemon()
  habilidades = data.abilities;
  nombre = data.forms[0].name;
  peso = data.weight;
  altura = data.height;
  experiencia = data.base_experience;
  img = data.sprites.other["official-artwork"]["front_default"];
  renderPoke();
};

InfoPoke();

//Hacemos un llamado a la api



  /* .then((response) => {
    return response.json();
  })
  .then((data) => { //resultado de .JSON
    InfoPoke(data);
  })
  .catch((error) => { //en caso de que haya error 
    console.log("el error fue: " + error);
  })
  .finally(() => {
    console.log("Termine");
  }); */
