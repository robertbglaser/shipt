document.addEventListener("DOMContentLoaded", function(event) { 
   
  });
  var gamePrompt = window.prompt('Want to play a game?');
  
      console.log(gamePrompt)

  
  let humanInput = " ";
  let humanGridInput = [];
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
        humanGridInput = humanInput.split(', ')
        console.log()
        humanInput = window.prompt('Your response has been recorded, press cancel to end the input process');
  }
 console.log("outside of the while")
   var cellNum = 0;
   humanGrid = humanGridInput.map(function(value){
   cellNum += 1

   humanGrid.vesselLength.push(cellNum);
   humanGrid.vesselPlacement.cell.push(humanGridInput)
    console.log("the value is " + humanGrid.vesselPlacement.cell); 
    return value;
   });

   //for 

   

 /*  pluralArray = singularArray.map(function(value){
    return value+'s';
 
 humanGridInput.forEach (function(item, index, humanGridInput){
      var cellNum = index +1;
      humanGrid.vesselLength = cellNum;
      console.log(index + " "+item);
    //  humanGrid.vesselPlacement[index].status = "blank";
      humanGrid.vesselPlacement[index].cell = item;
   }); */
  
       console.log("after the map " + JSON.stringify(humanGrid.vesselPlacement) );

    
        console.log("play the game here");
        humanInput = window.prompt('');
    
  

    var compGrid = {status: " ", Grid1:"a4", Grid2:"a5", Grid3:"a6"};  

  