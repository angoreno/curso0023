$('#volatil').offset({top:0,left:0});

var posVer=0;
var posHor=0;

$('#arr').click(function(){
    posVer=posVer-10;
    $('#volatil').offset({top:posVer,left:posHor});

})

$('#izq').click(function(){
    posHor=posHor-10
    $('#volatil').offset({top:posVer,left:posHor});
})

$('#der').click(function(){
    posHor=posHor+10
    $('#volatil').offset({top:posVer,left:posHor});
})

$('#abaj').click(function(){
    posVer=posVer+10;
    $('#volatil').offset({top:posVer,left:posHor});
    
})

$('#reinicia').click(function(){
    posVer=0;
    posHor=0;
    $('#volatil').offset({top:posVer,left:posHor});
})