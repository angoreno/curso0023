
var cont =0;
function marcar(id){

    var equis = "X";
    var circulo = "O";

    switch (cont){
        case 0:
        document.getElementById(id).innerHTML = equis;
        desabilitaUsado()
        cont++;
        break;
        case 1:
        document.getElementById(id).innerHTML = circulo;
        desabilitaUsado()
        cont++;
        break;
        case 2:
        document.getElementById(id).innerHTML = equis;
        desabilitaUsado()
        cont++;
        break;
        case 3:
        document.getElementById(id).innerHTML = circulo;
        desabilitaUsado()
        cont++;
        break;
        case 4:
        document.getElementById(id).innerHTML = equis;
        validaX();
        desabilitaUsado()
        cont++;
        break;
        case 5:
        document.getElementById(id).innerHTML = circulo;
        validaO();
        desabilitaUsado()
        cont++;
        break;
        case 6:
        document.getElementById(id).innerHTML = equis;
        validaX();
        desabilitaUsado()
        cont++;
        break;
        case 7:
        document.getElementById(id).innerHTML = circulo;
        validaO();
        desabilitaUsado()
        cont++;
        break;
        case 8:
        document.getElementById(id).innerHTML = equis;
        validaX();
        desabilitaUsado()
        cont++;
        break;
        case 9:
        document.getElementById(id).innerHTML = circulo;
        validaO();
        desabilitaUsado()
        cont++;
        break;

    }
}

function validaX(){

    var uno = document.getElementById('1').innerHTML;
    var dos = document.getElementById('2').innerHTML;
    var tres = document.getElementById('3').innerHTML;
    var cuatro = document.getElementById('4').innerHTML;
    var cinco = document.getElementById('5').innerHTML;
    var seis = document.getElementById('6').innerHTML;
    var siete = document.getElementById('7').innerHTML;
    var ocho = document.getElementById('8').innerHTML;
    var nueve = document.getElementById('9').innerHTML;
    
    if(uno=="X"&&dos=="X"&&tres=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(cuatro=="X"&&cinco=="X"&&seis=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(siete=="X"&&ocho=="X"&&nueve=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(uno=="X"&&cuatro=="X"&&siete=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(dos=="X"&&cinco=="X"&&ocho=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(tres=="X"&&seis=="X"&&nueve=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(uno=="X"&&cinco=="X"&&nueve=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }else if(tres=="X"&&cinco=="X"&&siete=="X"){
        alert("han Ganado las X Congartulationes");
        desabilitaTablero()
    }
}
function validaO(){

    var uno = document.getElementById('1').innerHTML;
    var dos = document.getElementById('2').innerHTML;
    var tres = document.getElementById('3').innerHTML;
    var cuatro = document.getElementById('4').innerHTML;
    var cinco = document.getElementById('5').innerHTML;
    var seis = document.getElementById('6').innerHTML;
    var siete = document.getElementById('7').innerHTML;
    var ocho = document.getElementById('8').innerHTML;
    var nueve = document.getElementById('9').innerHTML;
    
    if(uno=="O"&&dos=="O"&&tres=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(cuatro=="O"&&cinco=="O"&&seis=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(siete=="O"&&ocho=="O"&&nueve=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(uno=="O"&&cuatro=="O"&&siete=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(dos=="O"&&cinco=="O"&&ocho=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(tres=="O"&&seis=="O"&&nueve=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(uno=="O"&&cinco=="O"&&nueve=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }else if(tres=="O"&&cinco=="O"&&siete=="O"){
        alert("han Ganado las O Congartulationes");
        desabilitaTablero()
    }
    
}

function desabilitaTablero(){
   
    for (var i=1;i-10;i++){
        var elemento = document.getElementById(i);
        elemento.onclick = null;
    }
}

function desabilitaUsado(){

    for(var i=1;i<10;i++){
        var value = document.getElementById(i).innerHTML;
        if(value=="X"||value=="O"){
            var elemento = document.getElementById(i);
            elemento.onclick = null;
        }
    }
}