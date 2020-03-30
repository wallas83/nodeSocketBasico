const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido Administrador'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //escuchar el cliente
    client.on('enviarMensaje', (message, callback) => {
        
        client.broadcast.emit('enviarMensaje', message);
            // if(message.usuario){

            //     callback({
            //         resp: 'Todo salio bien'
                    
            //     });

            // } else {
            //     callback({
            //         resp: 'Todo salio mal !!'
            //     });
            // }   
        });
});