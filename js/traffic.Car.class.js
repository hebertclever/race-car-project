export default class TrafficCar{

    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.carsTraffic = new Image;
        this.carsTraffic.src = "./images/Ativo 30.png";
        this.carNo = Math.round(Math.random() * 4); // return the num between  to 
        this._positionY = (Math.random() * 500) *  -1;  
        this.speed = (Math.random() * 7) + 3;  //speed between 3 to 10  
        this.lane = Math.floor(Math.random() * 3);
        this.lanePosX = [130, 225, 325, 150];

    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }
    
    update (){

        this._positionY += this.game.playerCar.speed/5 + this.speed;


        this.context.drawImage(this.carsTraffic,
             this.carNo * 59,


              0,
              58, 
              124, 
              this.lanePosX[this.lane], 
              this.positionY, 
              58, 
              125)

              if(this.positionY >= 900){
                  this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
              }
    }

    
}
