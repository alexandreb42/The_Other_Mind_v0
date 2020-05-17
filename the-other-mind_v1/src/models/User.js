//import uuid from Uuid();

class User {

    constructor(name, gameId) {
        this.name = name;
        this.gameId = gameId;
        this.isConnected = false;
        //this.userId = uuid(4);
        this.points = 0;
    }

    isConnected() {
        return this.isConnected;
    }
}

module.exports = User;