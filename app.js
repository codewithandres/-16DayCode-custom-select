
const wrapper = document.querySelector('.wrapper'),
    slectButton = wrapper.querySelector('.select-btn'),
    searchINput = document.querySelector('#search'),
    options = wrapper.querySelector('.optional');


const contries = [
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda",
    "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica",
    "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia",
    "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria",
    "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún",
    "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano",
    "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil",
    "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador",
    "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia",
    "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas",
    "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana",
    "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial",
    "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak",
    "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel",
    "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán",
    "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia",
    "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte",
    "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos",
    "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco",
    "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal",
    "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán",
    "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea",
    "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana",
    "República Checa", "República del Congo", "República Democrática del Congo",
    "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa",
    "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas",
    "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles",
    "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia",
    "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
    "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga",
    "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania",
    "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam",
    "Yemen", "Yibuti", "Zambia", "Zimbabue"
];

const addContries = (selectedContry) => {

    options.innerHTML = '';
    contries.forEach(contry => {

        let isSelected = contry == selectedContry ? 'selected' : '';
        let li = `<li onclick="updateName(this)" class=' ${isSelected} '> ${contry} </li>`;
        options.insertAdjacentHTML('beforeend', li);
    });
};

addContries();

const updateName = (selectedLi) => {

    searchINput.value = '';
    addContries(selectedLi.innerText);
    wrapper.classList.remove('active')
    slectButton.firstElementChild.innerText = selectedLi.innerText
}

searchINput.addEventListener('keyup', () => {

    let arr = [];
    let searchVla = searchINput.value.toLowerCase();

    arr = contries.filter(data => data.toLocaleLowerCase().startsWith(searchVla)

    ).map(data => ` <li onclick="updateName(this)" > ${data}</li> `).join("");

    options.innerHTML = arr ? arr : `<p> Oops country not found </p>`;


})

slectButton.addEventListener('click', () => wrapper.classList.toggle('active'));