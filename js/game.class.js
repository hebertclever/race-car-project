import Road from './road.class.js';
import PlayerCar from './playerCar.Class.js';
import CarController from "./car.controller.Class.js";
import TrafficCar from "./traffic.Car.class.js"
import { isCollide } from "./isCollide.js"


export default class Game {

    constructor(context) {
        this.context = context;
        this.road = new Road(this);
        this.playerCar = new PlayerCar(this)
        new CarController({
            road: this.road, playerCar: this.playerCar
        });

        this.traffic = [];

        setInterval(() => this.populateTraffic(), 5000);

        this._paused = false;

    }

    populateTraffic() {

        if (this._paused) return;
        let trafficCar = new TrafficCar(this);
        this.traffic.push(trafficCar);
    }

    tryAgain(e) {
        if (e.keyCode !== 32) {
            return;
        }

        this.traffic = [];
        this.playerCar.resetPosition();
        this._paused = false;
        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "none";
        document.onkeydown = null;
    }


    update() {

        if (this._paused) return;
        this.road.update();
        this.playerCar.update();
        this.traffic.forEach(trafficCar => {
            trafficCar.update();
        })

        if (isCollide(this.playerCar, this.traffic)) {
            this._paused = true;

            let screenTryAgain = document.querySelector(".try-again")
            screenTryAgain.style.display = "block";
            document.onkeydown = e => this.tryAgain

        }

    }

}