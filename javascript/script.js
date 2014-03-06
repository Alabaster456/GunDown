//Variables
var userclick = true; //If this is true, it will automatically contribute to the user's action in winning.
//END

//HUMAN OBJECT (PLAYER)
var human = {
    name: find(""),
  accuracy: function(speed) {
    human.speed = speed;
    if(speed < 2) {
      console.log("You're fast, cowboy!");
      return "Your speed was" + " " + human.speed;
    } else if(speed >= 2) {
    console.log("You're pretty slow, my friend!");
    return human.speed;
    
    } 
    }
  };


//Finds the user's name for the human Object
function find() {
  human.name = prompt("What's your name?");
  return human.name;
  
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
