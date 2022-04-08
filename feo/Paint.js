

window.addEventListener('load', function (){
  let down=false;
  const canvas = document.getElementById('newCanvas');
  const context = canvas.getContext('2d');
  var i=canvas.addEventListener("click", getCoordinate);
  canvas.addEventListener('mousedown',dragDown);


});

// get coordinates

function getCoordinate(event){
 var x;
 var y;
  
  
    x=event.screenX;
    y=event.clientY;
    
      console.log([x,y]);

    var initialCoordinatesX=document.getElementById("coor").innerHTML=x;
    var initialCoordinatesY=document.getElementById("coor").innerHTML=y;

    return [initialCoordinatesX,initialCoordinatesY];

}

function dragDown(event){
  var x;
  var y;

     x=event.screenX;
     y=event.clientY;
       console.log([x,y]);
       alert("drag");

}
// function move(event)
// {if(!down){
//   return;
// }
//   var movedX;
//   var movedY;
//     movedX=event.screenX;
//     movedY=event.clientY;

//    console.log("sec",[movedX,movedY]);
// }

  
  
  

