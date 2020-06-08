function validar(){

    $("#boton").click(function(){
        $('#form').validate({
            rules:{
                name:{
                    required:true,
                    maxlength:25,
                    lettersonly:true,
                    digits: true,
                },
                marca:{
                    required:true,
                    maxlength:30
                },
                modelo:{
                    minlength:5,
                    maxlength:20
                },
                stock:{
                    required:true,
                    digits: true,
                    range: [0, 1000]
                },
                color:{
                    maxlength:20,
                    lettersonly:true,
                }
            },
            messages:{
                name:{
                  
                }
            }
        })
    })

}

