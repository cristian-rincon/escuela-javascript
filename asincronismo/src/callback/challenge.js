let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true) // el tercer parámetro está en true por defecto
    xhttp.onreadystatechange = function (event) {
        // 5 estados  - el 4 es completado
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200 /* Para conocer si todo salió bien en la petición */ ) {
                callback(null, JSON.parse(xhttp.responseText /* Converts JSON into an object */ ))
            } else {
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}
/* Encadenando callbacks 
   Callback hell - más de 3 callbacks encadenados
*/
fetchData(API, function (error1, data1) {
    if (error1) {
        return console.error(error1);
    }
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) {
            return console.error(error2)
        }
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) {
                return console.error(error3)
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})