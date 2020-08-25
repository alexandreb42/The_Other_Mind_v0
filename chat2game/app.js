var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'); // Permet de bloquer les caractères HTML
                        // (sécurité équivalente à htmlentities en PHP)

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
  //res.send({ response: "Server is up and running." }).status(200);
});

io.sockets.on('connection', function (socket, pseudo, room) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    // et on informe les autres personnes
    
    socket.on('nouveau_joueur', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_joueur', pseudo);
        socket.emit('nouveau_joueur', pseudo);
    });

    socket.on('join', ({ pseudo, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, pseudo, room });
    
        if(error) return callback(error);
    
        socket.join(user.room);
    
        socket.emit('message', { user: 'admin', text: `${user.pseudo}, welcome to room ${user.room}.`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        
        callback();
    });
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
    
        io.to(user.room).emit('message', { user: user.name, text: message });
    
        callback();
    });
    
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
    
        if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })

    /*
    socket.join([room], (pseudo) => {
        //pseudo = ent.encode(pseudo);
        //socket.pseudo = pseudo;
        console.log("rejoint la room");
        io.to(room).emit('a new user has joined the room');
    })
    */

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur
    // et on le transmet aux autres personnes
    
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message',
            {pseudo: socket.pseudo, message: message});
        socket.emit('message',
            {pseudo: socket.pseudo, message: message});
    });
    

    socket.on('shuriken', function (shuriken) {
        shuriken = ent.encode(shuriken);
        socket.broadcast.emit('shuriken',
            {pseudo: socket.pseudo});
        socket.emit('shuriken',
            {pseudo: socket.pseudo});
    });
});

server.listen(8080);
