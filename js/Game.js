class Game{
    constuctor(){

    }

    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({gameState:state});
    }

    start(){

    }

    end(){

    }

    play(){
        
    }

}