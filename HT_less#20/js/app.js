'use strict';

const peopleBtn = document.querySelector('.peopleBtn');
const planetBtn = document.querySelector('.planetBtn');
const vehiclesBtn = document.querySelector('.vehiclesBtn');
const nextBtn = document.querySelector('.nextBtn');
const backBtn = document.querySelector('.backBtn');
const vehicles = document.querySelector('.vehicles');
const people = document.querySelector('.people');
const planet = document.querySelector('.planet');
let urlForPeople = 'https://swapi.dev/api/people/?page=2';
let urlForPlanets = 'https://swapi.dev/api/planets/?page=2';
let urlForVehicles = 'https://swapi.dev/api/vehicles/?page=2';

peopleBtn.addEventListener('click', () => {
    axios.get(' https://swapi.dev/api/people')
    .then(result => {
        const objPeople = result.data.results;
        people.innerHTML = '';

        for(let i = 0; i < objPeople.length; i++) {
            const divForPeople = createElement('div', {classname: 'infoBlock'}, null, null, people);
            createElement('div', {classname: 'peopleCatalog', id: objPeople[i].url}, {click: informAboutPeople}, objPeople[i].name, divForPeople);
            createElement('div', {id: 'block'+ objPeople[i].url}, null, null, divForPeople);
        }

        peopleBtn.style.display = 'none';
        planetBtn.style.display = 'none';
        vehiclesBtn.style.display = 'none';
        planet.style.display = 'none';
        vehicles.style.display = 'none';
        people.style.display = 'flex';
        nextBtn.style.display = 'block';
        backBtn.style.display = 'block';
        nextBtn.addEventListener('click', createEnsuingDivForPeople);
        backBtn.addEventListener('click', turnBack);
    })
});

function createEnsuingDivForPeople() {
    axios.get(urlForPeople)
    .then(result => {
        urlForPeople = result.data.next;
        const objPeople = result.data.results;

        for(let i = 0; i < objPeople.length; i++) {
            const divForPeople = createElement('div', {classname: 'infoBlock'}, null, null, people);
            createElement('div', {classname: 'peopleCatalog', id: objPeople[i].url}, {click: informAboutPeople}, objPeople[i].name, divForPeople);
            createElement('div', {id: 'block'+ objPeople[i].url}, null, null, divForPeople);
        }

        if(!urlForPeople) {
            nextBtn.style.display = 'none';
        }
    })
}

function informAboutPeople(event) {
    const click = event.target.getAttribute('id');
    axios.get(click)
    .then(result => {
        const catalogPeopleMoreInf = document.getElementById(`block${click}`);
        catalogPeopleMoreInf.innerHTML = '';
        const peopleInf = result.data;

        createElement('div', null, null, 'height:' + peopleInf.height, catalogPeopleMoreInf);
        createElement('div', null, null, 'mass:' + peopleInf.mass, catalogPeopleMoreInf);
        createElement('div', null, null, 'birth year:' + peopleInf.birth_year, catalogPeopleMoreInf);
        createElement('div', null, null, 'eye color:' + peopleInf.eye_color, catalogPeopleMoreInf);
        createElement('div', null, null, 'created:' + peopleInf.created, catalogPeopleMoreInf);
        createElement('div', null, null, 'edited:' + peopleInf.edited, catalogPeopleMoreInf);
        createElement('div', null, null, 'gender:' + peopleInf.gender, catalogPeopleMoreInf);
        createElement('div', null, null, 'hair_color:' + peopleInf.hair_color, catalogPeopleMoreInf);
        createElement('div', null, null, 'skin_color:' + peopleInf.skin_color, catalogPeopleMoreInf);

        axios.get(peopleInf.homeworld)
        .then(nameHome => {
            const home = nameHome.data.name;
            createElement('div', null, null, 'homeworld:' + home, catalogPeopleMoreInf);
        });

        const film = peopleInf.films;
        createArrFilms(film, click);

        const species = peopleInf.species;
        const speciesName = 'species'; 
        createArrPromise(species, speciesName, click);

        const vehicles = peopleInf.vehicles;
        const vehiclesName = 'vehicles';
        createArrPromise(vehicles, vehiclesName, click);

        const starships = peopleInf.starships;
        const starshipsName = 'starships';
        createArrPromise(starships, starshipsName, click);
    })
}

planetBtn.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets')
    .then(result => {
        const objPlanet = result.data.results;
        planet.innerHTML = '';

        for(let i = 0; i < objPlanet.length; i++) {
            const divForPlanet = createElement('div', {classname: 'infoBlock'}, null, null, planet);
            createElement('div', {classname: 'planetCatalog', id: objPlanet[i].url}, {click: informAboutPlanet}, objPlanet[i].name, divForPlanet);
            createElement('div', {id: 'block'+ objPlanet[i].url}, null, null, divForPlanet);
        }

        planetBtn.style.display = 'none';
        peopleBtn.style.display = 'none';
        vehiclesBtn.style.display = 'none';
        vehicles.style.display = 'none';
        people.style.display = 'none';
        planet.style.display = 'flex';
        nextBtn.style.display = 'block';
        backBtn.style.display = 'block';
        nextBtn.addEventListener('click', createEnsuingDivForPlanet);
        backBtn.addEventListener('click', turnBack);
    })
})

function createEnsuingDivForPlanet() {
    axios.get(urlForPlanets)
    .then(result => {
        urlForPlanets = result.data.next;
        const objPlanet = result.data.results;

        for(let i = 0; i < objPlanet.length; i++) {
            const divForPlanet = createElement('div', {classname: 'infoBlock'}, null, null, planet);
            createElement('div', {classname: 'planetCatalog', id: objPlanet[i].url}, {click: informAboutPlanet}, objPlanet[i].name, divForPlanet);
            createElement('div', {id: 'block'+ objPlanet[i].url}, null, null, divForPlanet);
        }

        if(!urlForPlanets) {
            nextBtn.style.display = 'none';
        }
    })
}

function informAboutPlanet(event) {
    const click = event.target.getAttribute('id');
    axios.get(click)
    .then(result => {
        const catalogPlanetMoreInf = document.getElementById(`block${click}`);
        catalogPlanetMoreInf.innerHTML = '';
        const planetInf = result.data;

        createElement('div', null, null, 'climate:' + planetInf.climate, catalogPlanetMoreInf);
        createElement('div', null, null, 'created:' + planetInf.created, catalogPlanetMoreInf);
        createElement('div', null, null, 'diameter:' + planetInf.diameter, catalogPlanetMoreInf);
        createElement('div', null, null, 'edited:' + planetInf.edited, catalogPlanetMoreInf);
        createElement('div', null, null, 'gravity:' + planetInf.gravity, catalogPlanetMoreInf);
        createElement('div', null, null, 'orbital period:' + planetInf.orbital_period, catalogPlanetMoreInf);
        createElement('div', null, null, 'population:' + planetInf.population, catalogPlanetMoreInf);
        createElement('div', null, null, 'rotation period:' + planetInf.rotation_period, catalogPlanetMoreInf);
        createElement('div', null, null, 'surface water:' + planetInf.surface_water, catalogPlanetMoreInf);
        createElement('div', null, null, 'terrain:' + planetInf.terrain, catalogPlanetMoreInf);

        const film = planetInf.films;
        createArrFilms(film, click);

        const residents = planetInf.residents;
        const residentsName = 'residents'; 
        createArrPromise(residents, residentsName, click);
    })
}

vehiclesBtn.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/vehicles')
    .then(result =>{
        const objVehicles = result.data.results;
        vehicles.innerHTML = '';

        for(let i = 0; i < objVehicles.length; i++) {
            const divForVehicles = createElement('div', {classname: 'infoBlock'}, null, null, vehicles);
            createElement('div', {classname: 'vehiclesCatalog', id: objVehicles[i].url}, {click: informAboutVehicles}, objVehicles[i].name, divForVehicles);
            createElement('div', {id: 'block'+ objVehicles[i].url}, null, null, divForVehicles);
        }

        peopleBtn.style.display = 'none';
        planetBtn.style.display = 'none';
        vehiclesBtn.style.display = 'none';
        planet.style.display = 'none';
        people.style.display = 'none';
        vehicles.style.display = 'flex';
        nextBtn.style.display = 'block';
        backBtn.style.display = 'block';
        nextBtn.addEventListener('click', createEnsuingDivForVehicles);
        backBtn.addEventListener('click', turnBack);
    })
})

function createEnsuingDivForVehicles() {
    axios.get(urlForVehicles)
    .then(result => {
        urlForVehicles = result.data.next;
        const objVehicles = result.data.results;

        for(let i = 0; i < objVehicles.length; i++) {
            const divForVehicles = createElement('div', {classname: 'infoBlock'}, null, null, vehicles);
            createElement('div', {classname: 'vehiclesCatalog', id: objVehicles[i].url}, {click: informAboutVehicles}, objVehicles[i].name, divForVehicles);
            createElement('div', {id: 'block'+ objVehicles[i].url}, null, null, divForVehicles);
        }

        if(!urlForVehicles){
            nextBtn.style.display = 'none';
        }

    })
}

function informAboutVehicles(event) {
    const click = event.target.getAttribute('id');
    axios.get(click)
    .then(result => {
        const catalogVehiclesMoreInf = document.getElementById(`block${click}`);
        catalogVehiclesMoreInf.innerHTML = '';
        const vehiclesInf = result.data;

        createElement('div', null, null, 'cargo capacity:' + vehiclesInf.cargo_capacity, catalogVehiclesMoreInf);
        createElement('div', null, null, 'consumables:' + vehiclesInf.consumables, catalogVehiclesMoreInf);
        createElement('div', null, null, 'cost in credits:' + vehiclesInf.cost_in_credits, catalogVehiclesMoreInf);
        createElement('div', null, null, 'created:' + vehiclesInf.created, catalogVehiclesMoreInf);
        createElement('div', null, null, 'crew:' + vehiclesInf.crew, catalogVehiclesMoreInf);
        createElement('div', null, null, 'edited:' + vehiclesInf.edited, catalogVehiclesMoreInf);
        createElement('div', null, null, 'length:' + vehiclesInf.length, catalogVehiclesMoreInf);
        createElement('div', null, null, 'manufacturer:' + vehiclesInf.manufacturer, catalogVehiclesMoreInf);
        createElement('div', null, null, 'max atmosphering speed:' + vehiclesInf.max_atmosphering_speed, catalogVehiclesMoreInf);
        createElement('div', null, null, 'model:' + vehiclesInf.model, catalogVehiclesMoreInf);
        createElement('div', null, null, 'passengers:' + vehiclesInf.passengers, catalogVehiclesMoreInf);
        createElement('div', null, null, 'vehicle class:' + vehiclesInf.vehicle_class, catalogVehiclesMoreInf);

        const film = vehiclesInf.films;
        createArrFilms(film, click);
        const pilots = vehiclesInf.pilots;
        const pilotsName = 'pilots'; 
        createArrPromise(pilots, pilotsName, click);
    })
}

function createArrPromise(name, nameAttr, clicks) {
    const catalogPeopleMoreInf = document.getElementById(`block${clicks}`);
    let newArr = [];
    for(let i = 0; i<name.length; i++){
        newArr.push(axios.get(name[i]));
    }

    if(newArr.length > 0){
        Promise.allSettled(newArr)
        .then((result) => {
            let arr = [];
            for(let i = 0; i < result.length; i++) {
                arr.push(result[i].value.data.name);
            }
            createElement('div', null, null, `${nameAttr}: ` + arr.join(', '), catalogPeopleMoreInf);
        });
   }
    else{
        createElement('div', null, null, `${nameAttr}: doesn't have ` , catalogPeopleMoreInf);
    }
}

function turnBack() {
    planetBtn.style.display = 'block';
    peopleBtn.style.display = 'block';
    vehiclesBtn.style.display = 'block';
    vehicles.style.display = 'none';
    people.style.display = 'none';
    planet.style.display = 'none';
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
}

function createArrFilms(film, click) {
    const catalogPeopleMoreInf = document.getElementById(`block${click}`);
    let newArr = [];
    for(let i = 0; i<film.length; i++){
        newArr.push(axios.get(film[i]));
    }

    if(newArr.length > 0){
        Promise.allSettled(newArr)
        .then((result) => {
            let arrfilm = [];
            for(let i = 0; i < result.length; i++){
                arrfilm.push(result[i].value.data.title);
                console.log(result[i].value.data.title);
            }
            createElement('div', null, null, 'films:' + arrfilm.join(', '), catalogPeopleMoreInf);
        });
    }

    else{
        createElement('div', null, null, `films: doesn't have` , catalogPeopleMoreInf);
    }
}