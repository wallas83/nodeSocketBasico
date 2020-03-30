var socket = io();

        socket.on('connect', function(){
            console.log('conectado al servidor');
        });
        //  on: escuchar lo del lado del servidor
        socket.on('disconnect', function() {
            console.log('Perdimos conexion con el servidor');
        });

        //emit: enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Wilson',
            mensaje: 'Hola Node'
        }, function(resp) {
            console.log(resp);
        });

        //on:  escuchar informacion

        socket.on('enviarMensaje', function(mensaje){
            console.log('servidor:', mensaje);
        });