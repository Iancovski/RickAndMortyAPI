export class RickAndMortyRepository {
    getCharacter(index) {
        const request = new Request('https://rickandmortyapi.com/api/character/' + index);
        return fetch(request).then(response => {
            return response.json();
        });
    }
}