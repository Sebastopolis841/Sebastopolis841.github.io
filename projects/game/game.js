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

asciiHole = `
/\\___/\\___/\\___/\\___/\\___/\\
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | /~~~\\ | | | | | | |
| | | |/   /| | | | | | | |
| | | |    || | | | | | | |
`

let houseLook = false;
let BYLook = false;
let MTLook = false;
let hasDoggo = false;
let hasPoster = false;
let hasDragon = false;

let seenMt = false;
let seenTH = false;
let seenVet = false;
let seenComps = false;
let seenLake = false;
let seenFrst = false;
let hasStick = false;

let drgnStr = 1;
let drgnHp = 3;
let drgnTempHp = 3;

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
    let modifier = random(0,2) - 1;
    return modifier;
}

function attack() {
    let damage = drgnStr + attkRand();

    enemyHp -= damage;
    if (hasDoggo == true) {
        print("The Doggo attacked the opposing dragon for ∞ damage!");
        print("Your opponent stands slackjawed and admits defeat.");
        return "victory";
    } else {
        print("Your dragon attacked the opponent for " + damage + " damage!");

        if (enemyHp <= 0) {
            print("The opponent dropped below 0 hp and you won the battle!");
            return "victory";
        } else {
            print("The opponent dropped to " + enemyHp + " hp.");
            return "N/A";
        }
    }
}

function oppAttack() {
    let damage = drgnStr + attkRand();

    drgnTempHp -= damage;
    print("Your dragon was attacked for " + damage + " damage!");
    print("Your dragon droppd to " + drgnTempHP + " HP!");

}

function battle() {
    print("Choose an action:\n\tAttack\n\tFlee");
    function processInput(input) {

        while (true) {
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

    waitForInput(processInput);
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
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall\n\tBackyard");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "backyard" || input === "by") {
                        backyard();
                    } else if (input === "town hall") {
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
        } else {
            stayHere();
            waitThenCall(backyard);
        }
    }

    } else {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around\n\tRead note\n\tGet dragon");
        function processInput(input) {
            input = lower(input);

            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall\n\tBackyard");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "backyard" || input === "by") {
                        backyard();
                    } else if (input === "town hall") {
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
            } else if (input === "read note" || input === "read" || input === "note") {
                print("\nThe note reads as follows: \n\n \"Hello player. Make sure to take the pet dragon to the vet today!\"\n");
                print("\nClick enter to continue.");

                waitForInput(house);
            } else if (input === "get dragon" || input === "get" || input === "dragon") {
                print("\nYou have gotton your pet dragon!");
                print("Click enter to continue.")

                printAscii(asciiDragon);

                hasDragon = true;
                
                waitForInput(house);
            } else {
                stayHere();
                waitThenCall(house);
            }
        }
    }

    waitForInput(processInput);
}



function townHall() {
    clear();
    print("\nYou are in the town hall!");
    print("What would you like to do? Say one of these choices: \n\tMove\n\tLook around");
    function processInput(input) {
        input = input.toLowerCase();
        if (input === "move") {
            print("\nWhere do you want to go next? Say one of these choices: \n\tVet\n\tForest\n\tLake\n\tCompetitions\nHouse");

            function processInput(input) {
                input = input.toLowerCase();

                if (input === "house") {
                    house();
                } else if (input === "vet") {
                    vet();
                } else if (input === "forest") {
                    forest();
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
        } else {
            stayHere();
            waitThenCall(townHall);
        }
    }

    waitForInput(processInput)
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
        } else {
            stayHere();
            waitThenCall(backyard);
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
                print("\n It is a normal backyard, with a hole in the fence.");

                printAscii(asciiHole);

                print("Click enter to continue.");
                BYLook = true;

                waitForInput(backyard);
            } else {
                stayHere();
                waitThenCall(backyard);
            }
        }
    }

    waitForInput(processInput);
}

function mountain() {
    clear();
    print("\nYou are in the mountains!");

    if (MTLook === false) {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around");
        function processInput(input) {
            input = lower(input);
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tBackyard");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "backyard" || input === "by") {
                        backyard();
                    } else {
                        stayHere();
                        waitThenCall(mountain);
                    }
                }
            
                waitForInput(processInput);

        } else if (input === "look around" || input === "look") {
            print("\n In the distance, you see what appears to be a badly drawn dog.");

            printAscii(asciiDog);

            print("Click enter to continue.");
            MTLook = true;

            waitForInput(mountain);
        } else {
            stayHere();
            waitThenCall(mountain);
        }
    }

    } else {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tLook around\n\tGet dog");
        function processInput(input) {
            input = lower(input);

            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tBackyard");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "backyard" || input === "by") {
                        house();
                    } else {
                        stayHere();
                        waitThenCall(mountain);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "look around" || input === "look") {
                print("\n In the distance, you see what appears to be a badly drawn dog.");

                printAscii(asciiDog);

                print("Click enter to continue.");
                MTLook = true;

                waitForInput(mountain);
            } else if (input === "get dog" || input === "get" || input ==="dog") {
                if (hasStick === true) {
                    print("You got the dog!")

                    printAscii(asciiDog);

                    print("Click enter to continue.");
                    hasDoggo = true

                    waitForInput(mountain)
                } else {
                    print("The dog growls at you and dashes away. If only you had a way to tame it...")
                }
            } else {
                stayHere();
                waitThenCall(mountain);
            }
        }
    }

    waitForInput(processInput);
}

function vet() {
    clear();
    print("\nYou are in the vet's office!");

    if (hasDragon === false) {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove");
        function processInput(input) {
            input = lower(input);
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(vet);
                    }
                }
            
                waitForInput(processInput);

            } else {
                stayHere();
                waitThenCall(vet);
            }
    }

    } else {
        print("\nWhat would you like to do? Say one of these choices: \n\tMove\n\tCheck in");
        function processInput(input) {
            input = lower(input);

            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tTown Hall");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(vet);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "check in") {
                print("<h1>You win the boring ending</h1>")
                print("You got the dragon to the vet. BOOORING!")
            } else {
                stayHere();
                waitThenCall(vet);
            }
        }
    }

    waitForInput(processInput);
}

function forest() {
    clear();
    print("\nYou are in the forest!");
    if (hasDragon === true) {
        print("What would you like to do? Say one of these choices: \n\tMove\n\tForage\n\tTrain");
            function processInput(input) {
                input = input.toLowerCase();
                if (input === "move") {
                    print("\nWhere do you want to go next? Say one of these choices: \n\tLake\n\tTown Hall");

                    function processInput(input) {
                        input = input.toLowerCase();

                        if (input === "lake") {
                            lake();
                        } else if (input === "town hall") {
                            townHall();
                        } else {
                            stayHere();
                            waitThenCall(forest);
                        }
                    }
                
                    waitForInput(processInput);

                } else if (input === "forage") {
                    let forageResult = random(1,10);

                    if (forageResult === 10) {
                        hasStick = true;
                        print("You found a stick! I wonder what you could use this for...");
                    } else if (forageResult >= 7 && forageResult <= 9) {
                        print("You found a berry! It tastes sweet.");
                    } else if (forageResult >= 4 && forageResult <= 6) {
                        print("You almost got lost and had to turn back.")
                    } else if (forageResult === 2 || forageResult === 3) {
                        print("You hear a low growl in the distance and run off in fear.")
                    } else {
                        print("You tripped on a pinecone and fell on your face.")
                    }

                    waitForInput(forest);
                } else if (input === "train") {
                    if (!(forestUse === 5)) {
                        print("Your dragon takes on a woodland animal. It comes back with a few nicks and scratches, but overall looks hardier now.")
                        drgnHp += random(1,2);
                        drgnTempHP = drgnHp;
                        print("Your dragon now has " + drgnHp + " HP!")
                    }
                } else {
                    stayHere();
                    waitThenCall(forest);
                }
            }
    } else {
        print("What would you like to do? Say one of these choices: \n\tMove\n\tForage")
        function processInput(input) {
            input = input.toLowerCase();
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tLake\n\tTown Hall");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "lake") {
                        lake();
                    } else if (input === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(forest);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "forage") {
                let forageResult = random(1,10);

                if (forageResult === 10) {
                    hasStick = true;
                    print("You found a stick! I wonder what you could use this for...");
                } else if (forageResult >= 7 && forageResult <= 9) {
                    print("You found a berry! It tastes sweet.");
                } else if (forageResult >= 4 && forageResult <= 6) {
                    print("You almost got lost and had to turn back.")
                } else if (forageResult === 2 || forageResult === 3) {
                    print("You hear a low growl in the distance and run off in fear.")
                } else {
                    print("You tripped on a pinecone and fell on your face.")
                }

                waitForInput(forest);
            } else {
                stayHere();
                waitThenCall(forest);
            }
        }
    }

    waitForInput(processInput)
}

function lake() {
    clear();
    print("\nYou are in the forest!");
    if (hasDragon === true) {
    print("What would you like to do? Say one of these choices: \n\tMove\n\tFight");
        function processInput(input) {
            input = input.toLowerCase();
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tForest\n\tTown Hall");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "forest") {
                        forest();
                    } else if (input === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(forest);
                    }
                }
            
                waitForInput(processInput);

            } else if (input === "fight") {
                if (!(forestUse === 5)) {
                    print("Your dragon leaps into the lake. It comes back with a a large fish in it's mouth and claws.")
                    drgnStr += random(1,2);
                    print("Your dragon now has " + drgnStr + " strength!")
                }
            } else {
                stayHere();
                waitThenCall(lake);
            }
        }
    } else {
        function processInput(input) {
            input = input.toLowerCase();
            if (input === "move") {
                print("\nWhere do you want to go next? Say one of these choices: \n\tForest\n\tTown Hall");

                function processInput(input) {
                    input = input.toLowerCase();

                    if (input === "forest") {
                        forest();
                    } else if (input === "town hall") {
                        townHall();
                    } else {
                        stayHere();
                        waitThenCall(forest);
                    }
                }
            
                waitForInput(processInput);

            } else {
                stayHere();
                waitThenCall(lake);
            }
        }
    }

    waitForInput(processInput)
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to townHall
function start() {
    print("Welcome to my game! Press enter to start");

    function processInput(input){
        house();
    }

    waitForInput(processInput);
}