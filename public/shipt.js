document.addEventListener("DOMContentLoaded", function(event) { 
   
  });
  var gamePrompt = window.prompt('Want to play a game?');
  
      console.log(gamePrompt);

  
  let humanInput = " ";
  let userInput = [];
  var humanGrid = {
    vesselLength: 0,
    vesselPlacement:{
        cell: '',
        cellStatus: ''
    }
}
    console.log(typeof(humanGrid));

  while(humanInput !== null){
        humanInput = window.prompt('Please enter the coordinates of your ships seperated by commas.  A-Z 1-9');
        console.log("the input was " + humanInput);
        if (humanInput !== null) {
            userInput = humanInput.split(', ')
            loadHumanGrid();
            console.log("****** "+JSON.stringify(humanGrid));
            humanInput = window.prompt('Your response has been recorded, press cancel to end the input process');
        } else {
              var z = window.prompt('Thank you for playing the game' );
        }
        
  }
 
 
 function loadHumanGrid(){
     console.log("inside loadHumanGrid");
     userInput.forEach(function(item, index){
        console.log(item +  " " + index); 
        var cellNum = index +1;
        return {
            vesselLength: cellNum,
            status: " ",
            cell: item
        }
     });  
 }
    
       

    
      /*  console.log("play the game here");
        humanInput = window.prompt(''); */
    
  

  //  var compGrid = {status: " ", Grid1:"a4", Grid2:"a5", Grid3:"a6"};  

  