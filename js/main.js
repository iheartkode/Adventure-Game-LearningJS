var name;
var health = 100;

var zombie = {
	name: 'zombie',
	health: 60,
	dmg: 15,
	deathMessage: "ughhhh no brains for me..."
}

var witch = {
	name: 'witch',
	health: 70,
	dmg: 20,
	deathMessage: 'my spells have failed me.. ughhhhh...'
}

// sword object
var sword = {
	name: "Sword",
	dmg: 25,
	info: "The sword is a medium level weapon that does 25 dammage"
}

// axe object
var axe ={
	name: "Axe",
	dmg: 35,
	info: "The mighty axe does a dammage of 35."
}


// make a shorter way to write console.log
function con(str) {
	console.log("=> " + str);
}

// ask for weapon they want then display the info
function chooseWeapon(choice) {
	var choice = prompt("Which weapon would you like?  The Sword? or the Axe?");

	if (choice == "Sword") {
		 con("You have chosen the sword:  " + sword.info);
		}else{
			con("You have chosen the axe: " + axe.info);
	}
 }

// gets the player name and welcomes them
function greet(name) {
	name = prompt('What is thine name young soldier?');
	con("Welcome to oddvale, you have a torch and a potion in your inventory.")
	con("You're starting health is 100");
 }

// the forest of null, the first scene in the game
function forestOfNull() {
	con("You enter the forestOfNull(), and it is very very odd.");
	con("It's very dark and you can't even see in front of your nose, but you can feel a presence  touching you...");
 	    setTimeout(function() {
	    	var choice = prompt("Do you light your torch and see what is touching you? or do you run for your life?");

	    	if (choice == 'run') {
	    		con("You run as fast as you can but slam into an object, you are knocked out unconsious...");
	    	} else {
	    		con("You try and light your torch in a hurry and you fail the first time, suddenly it lights and there is nothing you can see.. but vast forest.");
	    	}
    	}, 4000);
}
