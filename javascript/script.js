// THIS CODING IS UNECESSARY FOR THE TIME BEING. MESSING WITH THE CODING IN THIS FILE DOESN'T AFFECT THE GAME ITSELF.

//Variables
var userclick = true; //If this is true, it will automatically contribute to the user's action in winning.
//END

//HUMAN OBJECT (PLAYER)
var human = {
    name: find(""),
  accuracy: function(speed) {
    human.speed = speed;
    if(speed < 2 && userclick) {
      console.log("You're fast, cowboy! You got em'!");
      return "Your speed was" + " " + human.speed;
    } else if(speed >= 2 && userclick) {
    console.log("You're pretty slow, my friend! But you got em'!");
    return "Your speed was" + " " + human.speed;
    else {
        console.log("You got shot! Oh no!");
        userclick = false;
    }
    } 
    }
  };


//Finds the user's name for the human Object
function find() {
  human.name = prompt("What's your name?");
  return human.name;
  
}


//OPPONENT CONSTRUCTOR
var opponent = function(name, speed) { 
  this.name = name; 
  this.speed = speed; 
}

//Creates multiple opponents with the custom constructor 'opponent'.
var Steven = new opponent("Steven", 0.25);
var Chuckie = new opponent("Chuckie", 0.56);
//END

