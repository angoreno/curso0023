var y;
var x;

function coordenadas(event) {

    x = event.clientX;
    y = event.clientY;

    

    document.getElementById("x").value = x; 
    document.getElementById("y").value = y;

}

function escribirCoord(){

    console.log(x);
    console.log(y);

    var coordenada = ("X= "+x+","+" Y="+y);

    document.getElementById("areatexto").innerHTML = coordenada;
}

function reseteo(){

    var borrar = "";

    document.getElementById("x").innerHTML = borrar;
    document.getElementById("y").innerHTML = borrar;
    document.getElementById("areatexto").innerHTML = borrar;
}

