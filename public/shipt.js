document.addEventListener("DOMContentLoaded", function(event) { 
   
  });
  let humanInput = " ";
  let humanGrid = [];
  let humanPlacement = {
    vesselLength: 0,
    vesselPlacement:{
        cell: '',
        cell1Status: ''
    }
}
    

  while(humanInput !== null){
        humanInput = window.prompt('Please enter the coordinates of your ships seperated by commas.  A-Z 1-9');
        console.log("the input was " + humanInput);
        humanGrid = humanInput.split(', ')
        console.log(humanGrid)
        humanInput = window.prompt('Your response has been recorded, press cancel to end the input process');
  }
 console.log("outside of the while")

   humanGrid.forEach (function(item, index,humanGrid){
       console.log("In the forEach " + item, index)
      var cellNum = index +1;
      console.log("length= " + cellNum);
      humanPlacement.vesselLength.push(cellNum);
      humanPlacement.status.push("");
      humanPlacement.cell.push(item);
   });
  
      
  

    var compGrid = {status: " ", Grid1:"a4", Grid2:"a5", Grid3:"a6"};  

  