export default class CarController{
    constructor(options){
        this.road = options.road
        this.playerCar = options.playerCar

        this.init();
    }

    init(){

        document.addEventListener("keydown", (e)=>{
            
            console.log(e.keyCode);

            switch(e.keyCode){
                case 37: // Left Arrow Key to move the car left
                this.playerCar.moveLeft();
                  break;
                case 38: //Up arrow key  to increase the speed car. (will move road)
                  this.playerCar.speed += 1;
                  break;
                case 39: // Right Arrow Key 
                this.playerCar.moveRight();
                   break;
                case 40: //Down Arroy key decrease speed (Road Move)  
                  this.playerCar.speed -= 5;
                break;
                               default:
                    break;


            }
        })
    }
}