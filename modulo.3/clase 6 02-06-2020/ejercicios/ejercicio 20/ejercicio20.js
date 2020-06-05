function mostrarFecha(){

    var fecha = new Date();
    var semana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];


    alert("Hoy es " + semana[fecha.getDay()] +" " +fecha.getDate() + " de " + (fecha.getMonth()+1) + " del " + fecha.getFullYear() + " y son las "  + fecha.getHours() +  " horas " + fecha.getMinutes() + " minutos con " + fecha.getSeconds() + " segundos. ");
    
}


function calcularDiasAusencia(){   

    var fecha = new Date();
    var element = document.getElementById("tiempoRestante");

    /**** Se cargan las fechas de inicio y de fin *****/
    var fecha1 = new Date(fecha.getFullYear(),fecha.getMonth()+1,fecha.getDate(),fecha.getHours(),fecha.getMinutes(),fecha.getSeconds());
    var fecha2 = new Date(2020,12,31,00,00,00);


    var diasDif = fecha2.getTime() - fecha1.getTime();//se resta fecja inicio con fecha de fin, resultado en milisegundos
    var dias = Math.trunc(diasDif/(1000 * 60 * 60 * 24));//calcula los dias sin tomar en cuenta el resto
    var rHoras =(diasDif%(1000 * 60 * 60 * 24));//calcula el resto de dias y lo pasa a la variable rHoras en milisegundos
    var horas = Math.trunc(rHoras/(1000 * 60 * 60));//los milisegundos se convierten en horas y solo se toma el entero
    var rMinutos =(rHoras%(1000 * 60 * 60))//se calcula el resto de horas y se pasa a rMinutos en milisegundos
    var minutos = Math.trunc(rMinutos/(1000 * 60));//los milisegundos se convierten en minutos, solo se toma el entero
    var rSegundos = (rMinutos%(1000 * 60))//se calcula el resto de munitos y se pasa a rSegundos en milisegundos
    var segundos = Math.trunc(rSegundos/1000);//los milisegundos se convierten en segundos

    /**** Se escribe el mensaje con los dias faltantes *****/
    var restante = "Quedan "+dias+" dias, "+horas+" horas, "+minutos+" minutos y "+segundos+" segundos.";
    
    /**** Se inserta en el HTML la frase *****/
    element.innerHTML = restante;
}
  