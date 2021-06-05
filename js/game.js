class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          mainmenu = new Mainmenu();
          mainmenu.display(); 
        }
        tank1 =createSprite(100,200,10,20);
        tank1.addImage("tank1",tankimg1);
        
    }
      play(){
        tank1.rotation = mouseX;
        tank1.rotation = mouseY;
        drawSprites();
        console.log(allPlayers);
        if(allPlayers !== undefined){
            
        }
    }
}
