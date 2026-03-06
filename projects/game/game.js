let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
class dragon {
    constructor() {
        this.name = this.name;
        this.ascii = this.ascii;
    }
}


asciiDragon = `
        _^__^_
        / * * /
    ___/ \\_/ /
___/^^^^^^^^/
\\_|_|_|_|_|/
`;

asciiDog = `
            ^  ^
 ^  ^      | \' \'|
\\ | /      |  * | /
 \\|/_______| \\_/| --
  --|           | \\
    |___________|
      | |   | |
`;

petDragon = new dragon("Pet Dragon", asciiDragon);
doggo = new dragon("Doggo", asciiDog);

//If you need, add any "helper" functions here


//Make one function for each location
function house() {
    clear();
    print("\nYou are in your house!");
    print("\nWhere do you want to go next? Say one of these choices: \n\tlocationA\n\tlocationB");

    function processInput(input) {
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(house);
        }
    }
    waitForInput(processInput);
}

function locationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB");
    
    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press enter to start");
    printAscii(asciiDragon);
    printAscii(asciiDog);

    function processInput(input){
            house();
    }

    waitForInput(processInput);
}