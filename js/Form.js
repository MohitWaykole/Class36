class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        this.button1 = createButton('Play');
        this.button2 = createButton('Reset');
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button1.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-100, 50);
        this.input.position(displayWidth/2+100, displayHeight/2);
        this.button1.position(displayWidth/2, displayHeight/2+200);
        this.button2.position(displayWidth-100, 50);

        this.button1.mousePressed(()=>{
            this.input.hide();
            this.button1.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2, displayHeight/2);
        })
    }
}