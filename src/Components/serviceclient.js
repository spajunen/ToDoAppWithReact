const apiUrl = "/api/todot/"

export function getQuotes(cb){
    fetch(apiUrl)
        .then(function(json){
            return json.json()
        }).then((data) =>{
        console.dir(data);
        cb(data)
    })
}

export function lisaaQuote(sanonta) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(sanonta)
    })
        .then(function(response) {
            return response;
        });
}

export function poistaQuote(id) {
    return fetch(apiUrl +id, {
        method: 'DELETE',
    })
        .then(function(response) {
            /*callback(response);*/
            console.dir(response);
            return (response);
        });
}

export function muutaQuote(id, sanonta){
    return fetch(apiUrl +id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(sanonta)
        //body: JSON.stringify(sanonta={author:"sini",quotetext:"moikku"})
    }).then(function(response){
        console.dir(response);
        return(response);
    })
}

