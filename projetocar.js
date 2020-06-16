let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d")


let road = new Image;
road.src = "./car/images/road2.png";

road.onload = () => {

}

function gameLoop(){
    context.drawImage(road, 0, 0);
    requestAnimationFrame(gameLoop);
}
