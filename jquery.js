alert("Welcome to GunDown!");
var charselect = function(select) {
 alert("Choose yer' character!");
  $(document).ready(function() {
    $('#rhino').css("display", "initial");
 $('#starz').css("display", "initial");
     $('#bugger').css("display", "initial");
$('#starz').click(function(){
alert("'Starz iz mah' name! Yer' gonna win, sir!'");
  $('#bugger').remove();
  $('#rhino').remove();
  alert("You chose Starz!");
  alert("Your opponent is..");
  findenemy();
  
}), $('#bugger').click(function(){
  alert("'Oi, I'm Bugger! I'm an pure outlar', but I get round' dese' parts!'");
   $('#starz').remove();
  $('#rhino').remove();
  alert("You chose bugger!");
  alert("Your opponent is..");
  findenemy();
  
}), $('#rhino').click(function() {
    alert("'Da' nam' is Rhino. I'm a mysterious, walking lil' fella who knows how to shoot.'"); 
  $('#starz').remove();
  $('#bugger').remove();
  alert("You chose Rhino!");
  alert("Your opponent is..");
  findenemy();
  });
});
//FUNCTION INSIDE THE DOCUMENT
var findenemy = function() {
  var starz = Math.floor(Math.random()*3+1);
var rhino = Math.floor(Math.random()*3+1);
var bugger = Math.floor(Math.random()*3+1);
  if (starz === 1) {
      alert("You're goin' against Starz!"); $('#starz2').css("display", "initial");

    
  } else if (rhino === 2) {
      alert("You're goin' against Rhino!");
  } else {
      alert("You're goin' against Bugger!");
  }
};
  

};
charselect();


