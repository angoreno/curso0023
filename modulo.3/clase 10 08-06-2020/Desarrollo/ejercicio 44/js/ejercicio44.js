$('#anadir').on('click', function(){
    if(validar()){
        alert("formulario incompleto");
    }else{
        $nombre=$('#nombre').val();
            $apellido=$('#apellido').val();
            $correo=$('#correo').val();
            $edad=$('#edad').val();
            $telefono=$('#telefono').val();

            $('.cuerpo').append
            ("<tr>"
                +"<td>"+$nombre+"</td>"
                +"<td>"+$apellido+"</td>"
                +"<td>"+$correo+"</td>"
                +"<td>"+$edad+"</td>"
                +"<td>"+$telefono+"</td>"
            +"</tr>");

            $("#formulario")[0].reset();
    }
    
});

function validar(){
    
      $( "#formulario" ).validate({
        debug:true,
        rules: {
          nombre: {
            required: true,
            maxlength:30,
          },
          apellido: {
            required: true,
            maxlength:50,
          },
          correo: {
            required: true,
            maxlength:50,
            email:true
          },
          edad: {
            required: true,
            maxlength:150,
            minlength:0,
            digits:true,
          }
        }
      });
}
$ ( "#tabla" ). tableExport ({ 
    bootstrap : false }); 

