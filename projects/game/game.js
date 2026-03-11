let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
asciiDragon = `
         ^__^_
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

asciiNote = `
            @~~~~~~~~~~~@
           /  ~^~^~^~  /
          /  ~^~^~^~  /
         /  ~^~^~^~  /
        /  ~^~^~^~  /
       @~~~~~~~~~~~@
`

let houseLook = false;
let BYLook = false;
let backyardLook = false;
let hasDoggo = false;
let hasPoster = false;

let seenMt = false;
let seenTH = false;
let seenVet = false;
let seenComps = false;
let seenLake = false;
let seenFrst = false;
let hasStick = false;

let drgnStr = 1;
let drgHp = 3;

let enemyStr = null;
let enemyHp = null;

let lakeUse = 0;
let ForestUse = 0;

let wonEasy = false;
let wonMid = false;
let wonHard = false;

let goodInput = false;

let checkedIn = false;

//If you need, add any "helper" functions here
function random(min,max) {
    max += 1 - min;

    return Math.floor(Math.random() * max) - min;
}

function attkRand() {
    let mod = random(0,2) - 1;
    return mod;
}

function attack() {
    let damage = drgnStr + attkRand();

    enemyHp -= damage;
    print("Your dragon attacked the opponent for " + damage + " damage!");

    if (enemyHp <= 0) {
        print("The opponent dropped below 0 hp and you won the battle!");
        return "victory";
    } else {
        print("The opponent dropped to " + enemyHp + " hp.");
        return "N/A"
    }
}

function oppAttack() {
    let damage = drgnStr + attkRand();

    drgnHp -= damage;
    print("Your dragon was attacked for " + damage + " damage!");

}

function battle() {
    print("Choose an action:\n\tAttack\n\tFlee");
    function processInput(input) {
        goodInput = false;

        while (goodInput = false) {
            input = lower(input);
            if (input === "attack") {
                attack();
            } else if (input === "flee") {
                return "flee";
            } else {
                print("Please select a valid option.");
            }
        }
    }
}


//Make one function for each location
function house() {
    clear();
    print("\nYou are in your house!");

    if (houseLook === false) {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around");
        function processInput(input) {
            input = lower(input);
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall\n\tlocationB");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "locationb") {
                        locationB();
                    } else if (input() === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(house);
                    }
                }
            
                waitForInput(processInput);

        } else if (input === "look around" || input === "look") {
            print("\n You see your pet dragon and a note on the fridge.");

            printAscii(asciiDragon);
            printAscii(asciiNote);

            print("Click enter to continue.");
            houseLook = true;

            waitForInput(house);
        }
    }

    } else {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around\n\tRead note\n\tGet dragon");
        function processInput(input) {
            input = lower(input);

            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall\n\tlocationB");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "locationb") {
                        locationB();
                    } else if (input() === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(house);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "look around" || input === "look") {
                print("\n You see your pet dragon and a note on the fridge.");

                dragon();

                print("Click enter to continue.");
                houseLook = true;

               waitForInput(house);
            } else if (input === "read note") {
                print("\nThe note reads as follows: \n\n \"Hello player. Make sure to take the pet dragon to the vet today!\"\n");
                print("\nClick enter to continue.");

                waitForInput(house);
            } else if (input === "get dragon") {
                print("\nYou have gotton your pet dragon!");

                dragon();

                print("\n\n\tI need to code this more\n");
            }
        }
    }

    waitForInput(processInput);
}



function townHall() {
    clear();
    print("\nYou are in the town hall!");
        
    input = lower(input);
    if (input === "move") {
        print("\nWhere do you want to go next? Say one of these choices: \n\tVet\n\tForest\n\tLake\n\tCompetitions\nHouse");

        function processInput(input) {
            input = input.toLowerCase();

            if (input === "house") {
                house();
            } else {
                stayHere();
                waitThenCall(townHall);
            }
        }
    
        waitForInput(processInput);

    } else if (input === "look around" || input === "look") {
        print("\n You see a poster for dragon competitions!");

        printAscii(asciiNote);

        print("Click enter to continue.");

        hasPoster = true;

        waitForInput(townHall);
    }
    
    waitForInput(processInput);
}

function backyard() {
    clear();
    print("\nYou are in your backyard!");

    if (BYLook === false) {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around");
        function processInput(input) {
            input = lower(input);
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tHouse");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "house") {
                        house();
                    } else {
                        stayHere();
                        waitThenCall(backyard);
                    }
                }
            
                waitForInput(processInput);

        } else if (input === "look around" || input === "look") {
            print("\n It is a normal backyard, with a hole in the fence.");

            printAscii(asciiHole);

            print("Click enter to continue.");
            BYLook = true;

            waitForInput(backyard);
        }
    }

    } else {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around");
        function processInput(input) {
            input = lower(input);

            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tHouse\n\tHole");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "house") {
                        house();
                    } else if (input === "hole") {
                        mountain();
                    } else {
                        stayHere();
                        waitThenCall(backyard);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "look around" || input === "look") {
                print("\n You see your pet dragon and a note on the fridge.");

                dragon();

                print("Click enter to continue.");
                houseLook = true;

               waitForInput(house);
            }
        }
    }

    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tTown Hall");
    
    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to townHall
function start() {
    print("Welcome to my game! Press enter to start");
    printAscii(asciiDragon);
    printAscii(asciiDog);

    function processInput(input){
        house();
    }

    waitForInput(processInput);
}