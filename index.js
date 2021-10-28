import { RickAndMortyRepository } from "./rickandmorty.js";
const repository = new RickAndMortyRepository();
repository.getCharacter(random()).then(showCharacter);

function showCharacter(character) {
    document.getElementById('image').src = character.image;
    document.getElementById('name').innerHTML = character.name;
    document.getElementById('species').innerHTML = character.species;
    document.getElementById('type').innerHTML = character.type != '' ? character.type : 'N/A';
    document.getElementById('gender').innerHTML = character.gender;
}

function random() {
    return Math.floor(Math.random() * 670) + 1;
}