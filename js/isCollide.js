export function isCollide(playerCar, traffic){
    

    for(let i=0; i<traffic.length; i++){

       let trafficCar = traffic[i];
      

       if(trafficCar.positionY > 531 && trafficCar.positionY < 679){
         
        if(Math.abs(trafficCar.positionX - playerCar.positionX)<= 64){

            return true;     
        }
        
                              
       } 
       
    }
          return false;
    
}


