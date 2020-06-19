
export default class PlayerCar{

    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this._positionX = 222;
        this._positionY = 650;
        this._speed = 0;
        this.maxSpeed = 120;
        this.car = new Image;
        this.car.src = "./images/Ativo 28.png"; // the car player
    }

    get positionX(){
        return this._positionX;
    }

    get positionY(){
        return this._positionY;
    }

    moveLeft(){
        this._positionX -= 5;
        if(this._positionX <= 110) this._positionX = 110;
    }

    moveRight(){
        this._positionX += 5;
        if(this._positionX >= 335) this._positionX = 335;
    }
     

    resetPosition(){
        this._positionX = 222;
        this._positionY = 650;
    }


    set speed(speed){
        if (speed >= this.maxSpeed){
          this._speed = this.maxSpeed;  
        }else if(speed <= 0){
            this._speed = 0;
        }else{
            this._speed = speed;
        }

        document.querySelector(".speedo-meter .speed").innerHTML = this._speed;
        
    }

    get speed(){
        return this._speed;
    }


    update(){
        this.context.drawImage(this.car, this._positionX, this._positionY);

    }
}