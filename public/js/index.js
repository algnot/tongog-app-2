

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

function getNotify(user){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            if(obj.status > 0){
                document.getElementById('notify').style.display = 'none';
            }
        }
    };
    xhttp.open("GET", '/getNotify?username='+user , true);
    xhttp.send();
}
