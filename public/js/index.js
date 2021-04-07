

function getPost(limit){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("root").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", '/getPost?limit='+limit , true);
    xhttp.send();
}
