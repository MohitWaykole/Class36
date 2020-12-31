class Player{
    constructor(){
        this.name = null;
        this.rank = null;
        this.index = null;
        this.distance = 0;
    }

    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();        
        })
    }

    updateCount(count){
        database.ref("/").update({playerCount:count});
    }

    static getPlayerInfo(){
        database.ref("players").on("value", (data)=>{
            allPlayers = data.val();
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }

    getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value", (data) =>{
            this.rank = data.val();
        });
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({CarsAtEnd:rank});
    }
}