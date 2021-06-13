var treasureLocation = Math.floor(Math.random() *9)
var bombLocation = Math.floor(Math.random() *9)
if (treasureLocation == bombLocation){
bombLocation = Math.floor(Math.random() *9)
}
const treasure = (location) =>{

   if (location === treasureLocation) {
       document.getElementById(location).innerHTML = "&#x1F4B0"
       setTimeout(function(){
         alert("You have found the treasure YOU'RE A WINNER!"),
         window.location.reload();
       }, 90);

    }
    else if (location === bombLocation){
     document.getElementById(location).innerHTML = "&#128169"
     setTimeout(function(){
       alert("You have found the bomb and EXPLODED! womp.. womp.. womp.."),
       window.location.reload();
     }, 90);
    }
    else  {
      return document.getElementById(location).innerHTML = "&#128556"
    }


}
