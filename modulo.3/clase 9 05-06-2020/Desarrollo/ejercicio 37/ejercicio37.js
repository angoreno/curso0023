
function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
 }

function colorAleatorio(){
    arrColor = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
    cAleatorio = "#";
    for (i=0;i<6;i++){
       var posarray = aleatorio(0,arrColor.length);
       cAleatorio += arrColor[posarray]
    }
    return cAleatorio;
 } 

 var aColor = colorAleatorio(); 

 $('canvas').drawPolygon({
    draggable: true,
    fillStyle: '#333',
    strokeWidth: 2,
    x: 160, y: 150,
    radius: 100,
    sides: 3,
    mouseover: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: aColor
      }, 500);
    },
    mouseout: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: '#333'
      }, 500);
    },
  });

  $("canvas").drawPolygon({
    draggable: true,
    fillStyle: '#333',
    x: 50, y: 50,
    radius: 50, 
    sides: 4,
    mouseover: function(layer) {
        $(this).animateLayer(layer, {
          fillStyle: aColor
        }, 500);
      },
      mouseout: function(layer) {
        $(this).animateLayer(layer, {
          fillStyle: '#333'
        }, 500);
      },
  });

  $('canvas').drawEllipse({
    draggable: true,
    fillStyle: '#333',
    x: 300, y: 200,
    width: 100, height: 100,
    mouseover: function(layer) {
        $(this).animateLayer(layer, {
          fillStyle: aColor
        }, 500);
      },
      mouseout: function(layer) {
        $(this).animateLayer(layer, {
          fillStyle: '#333'
        }, 500);
      },
  });
  

