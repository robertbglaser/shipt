document.addEventListener("DOMContentLoaded", function(event) { 
   
  });

  let sign = window.prompt('Please enter your guess.  A-Z 1-9');
  console.log("the imput was " + sign);

  (function(){
  var dialog = ('<p>Are you sure?</p>').dialog({
    buttons: {
        "Yes": function() {alert('you chose yes');},
        "No":  function() {alert('you chose no');},
        "Cancel":  function() {
            alert('you chose cancel');
            dialog.dialog('close');
        }
    }
})
  
})();