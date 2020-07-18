let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true) // el tercer parámetro está en true por defecto
        xhttp.onreadystatechange = (() => {
            // 5 estados  - el 4 es completado
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText)) 
                    : reject(new Error('Error amiguito: ', url_api))
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData;