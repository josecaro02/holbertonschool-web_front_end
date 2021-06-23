function createElement(data){
    var p = document.createElement('p');
    p.innerHTML = data;

    var body = document.body;
    body.append(p);
}

function queryWikipedia(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp.response.query.pages["21721040"].extract);
        }
    };
    xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    xhttp.responseType = 'json'
    xhttp.send();
}

queryWikipedia(createElement);