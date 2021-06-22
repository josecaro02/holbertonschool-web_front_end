function changeMode (size, weight, transform, background, color){
    return function () {
        var body = document.body;
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    }
}

function main(){
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var body = document.body;
    var par = document.createElement('p');
    par.innerHTML = 'Welcome Holberton!';
    body.append(par);

    var btnSpooky = document.createElement('button');
    btnSpooky.innerHTML = 'Spooky';

    var btnDMode = document.createElement('button');
    btnDMode.innerHTML = 'Dark mode';

    var btnSMode = document.createElement('button');
    btnSMode.innerHTML = 'Scream mode';

    body.append(btnSpooky, btnDMode, btnSMode);

    btnSpooky.onclick = spooky;
    btnDMode.onclick = darkMode;
    btnSMode.onclick = screamMode;
}

main();