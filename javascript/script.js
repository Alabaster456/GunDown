//Variables
var userclick = true; //If this is true, it will automatically contribute to the user's action in winning.
//END

//HUMAN OBJECT (PLAYER)
var human = {
  name: find;
  };

//Finds the user's name
function find(name) {
  return name;
}

//VARIETY OF OPPONENTS
var opponent = function(name, speed) { 
  this.name = name; 
  this.speed = speed; 
}

//Creates multiple opponents with the custom constructor 'opponent'.
var Steven = new opponent("Steven", 0.25);
var Chuckie = new opponent("Chuckie", 0.56);
//END


if (!userclick) {
  console.log("You lost," + " " + human.name);
} else {
  console.log("You won," + " " + human.name);
}
