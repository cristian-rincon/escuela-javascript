const API_URL = 'https://pokeapi.co/api/v2/';
const POKE_URL = 'pokemon/:id';

const mewUrl = `${API_URL}${POKE_URL.replace(':id', 'mew')}`;
const opts = {
    crossDomain: true
};


function getPokemon(id, callback) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKE_URL.replace(':id', id)}`;
        $
            .get(url, opts, function (data) {
                resolve(data);
            })
            .fail(() => reject(id));
    });

}

function onError(id) {
    console.log(`Sucedió un error al obtener al personaje ${id}`);
}


async function getPokemons() {

    var ids = ['lugia', 'pikachu', 'mew', 'mewtwo', 'raichu', 'togepi'];
    var promises = ids.map(id => getPokemon(id))
    try {
        var pokemons = await Promise.all(promises)
        console.log(pokemons)
    } catch (id) {
        onError(id);
    }

}


getPokemons()