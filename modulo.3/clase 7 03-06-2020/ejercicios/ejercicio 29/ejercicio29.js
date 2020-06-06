
var pag=1;

function avanzarFoto(){

   
    if(pag<6&&pag>0){

        pag=pag+1;
        console.log(pag);

        switch (pag){
            case 1:
            document.getElementById("foto").src="img/1.jpg";
            break;
            case 2:
            document.getElementById("foto").src="img/2.jpg";
            break;
            case 3:
            document.getElementById("foto").src="img/3.jpg";
            break;
            case 4:
            document.getElementById("foto").src="img/4.jpg";
            break;
            case 5:
            document.getElementById("foto").src="img/5.jpg";
            break;
            default:
                alert("Galeria terminada");
                document.getElementById("foto").src="img/1.jpg";
        }
    }else{
        pag=1;
    }
    

    //document.getElementById("foto").src="img/2.jpg";

}

function retrocederFoto(){

    

    if(pag<6&&pag>0){

        pag=pag-1;
        console.log(pag);

        switch (pag){
            case 1:
            document.getElementById("foto").src="img/1.jpg";
            break;
            case 2:
            document.getElementById("foto").src="img/2.jpg";
            break;
            case 3:
            document.getElementById("foto").src="img/3.jpg";
            break;
            case 4:
            document.getElementById("foto").src="img/4.jpg";
            break;
            case 5:
            document.getElementById("foto").src="img/5.jpg";
            break;
            default:
                alert("Galeria terminada");
                document.getElementById("foto").src="img/1.jpg";
        }
    }else{
        pag=1;
    }


}

function imagenAzar(){

    var pag = Math.round(Math.random()*5);
    console.log(pag);
    switch (pag){
        case 1:
        document.getElementById("foto").src="img/1.jpg";
        break;
        case 2:
        document.getElementById("foto").src="img/2.jpg";
        break;
        case 3:
        document.getElementById("foto").src="img/3.jpg";
        break;
        case 4:
        document.getElementById("foto").src="img/4.jpg";
        break;
        case 5:
        document.getElementById("foto").src="img/5.jpg";
        break;
        default:
            alert("Galeria terminada");
            document.getElementById("foto").src="img/1.jpg";
    }

}