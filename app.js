const h2 = document.querySelector('h2');

function loadJokes() {
    var xhttp = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";

    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            h2.innerHTML = `${data.value}`;
        } else {
            this.onerror = onerror();
        }
    };   
    xhttp.send();
}

function onerror() {
    h2.textContent = "There was an error!";
}