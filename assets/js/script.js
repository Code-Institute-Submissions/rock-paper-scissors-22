//GLOBAL VARIABLES
//SAVED AT THE FRONT AND SO THEY CAN EASILY BE ACCESSED INSIDE FUNCTIONS

let playerResult = 0;
let computerResult = 0;
let playerResultNumber = document.getElementById("player-result");
let computerResultNumber = document.getElementById("computer-result");
let nameAnnouncement = document.getElementById("name-announcement");
let scoreAnnouncement = document.getElementById("score-announcement");
let rock = document.getElementById("Rock");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");
let you = document.getElementById("player");
let computer = document.getElementById("computer");

//Forces computer to create a random number that we can use to create a random selection
function initiateComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

/**
 * WIN Function that will run if the player/user has won. It also adds a class for extra visibility on a winner/loser and updates the current score.
 */
function win(userSelection, computerSelection) {
    playerResult++;
    playerResultNumber.innerHTML = playerResult;
    computerResultNumber.innerHTML = computerResult;
    nameAnnouncement.innerHTML = "👍🏻 You Won This Round! 👍🏻";
    scoreAnnouncement.innerHTML = `${userSelection} beats ${computerSelection}`;
    document.getElementById(userSelection).classList.add("win-effect");
    document.getElementById(computerSelection).classList.add("lose-effect");
    document.getElementById("player").classList.add("win-effect");
    document.getElementById("computer").classList.add("lose-effect");
    setTimeout(function () {
        document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
    setTimeout(function () {
        document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

    setTimeout(function () {
        document.getElementById("player").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
    setTimeout(function () {
        document.getElementById("computer").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
 * LOSE Function that will run if the computer won a round. It also adds a class for extra visibility on a winner/loser and updates the current score.
 */
function lose(userSelection, computerSelection) {
    computerResult++;
    computerResultNumber.innerHTML = computerResult;
    playerResultNumber.innerHTML = playerResult;
    nameAnnouncement.innerHTML = " 👎🏻 Computer Won This Round! 👎🏻";
    scoreAnnouncement.innerHTML = `${computerSelection} beats ${userSelection}`;
    document.getElementById(computerSelection).classList.add("win-effect");
    document.getElementById(userSelection).classList.add("lose-effect");
    document.getElementById("computer").classList.add("win-effect");
    document.getElementById("player").classList.add("lose-effect");
    setTimeout(function () {
        document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
    setTimeout(function () {
        document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

    setTimeout(function () {
        document.getElementById("player").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
    setTimeout(function () {
        document.getElementById("computer").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
 * DRAW Function that will run only if both player and computer selected the same element. It also adds a class for extra visibility.
 */
function draw(userSelection, computerSelection) {
    nameAnnouncement.innerHTML = "🤷🏻‍♂️ It's a Draw 🤷🏻‍♂️";
    scoreAnnouncement.innerHTML = "You Both Selected The Same";
    document.getElementById(computerSelection).classList.add("draw-effect");
    document.getElementById(userSelection).classList.add("draw-effect");

    setTimeout(function () {
        document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
    setTimeout(function () {
        document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
    }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

    setTimeout(function () {
        document.getElementById("player").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
    setTimeout(function () {
        document.getElementById("computer").classList.remove("win-effect", "lose-effect");
    }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
 * Comparison function with embedded win/lose/draw function. They will initiate after comparison between the values to determine a winner/loser. It uses a user/player clicked value.
 */
function play(userSelection) {
    const computerSelection = initiateComputerSelection();
    if (userSelection + " vs. " + computerSelection === "Rock vs. Scissors" || // Rock beat Scissors
        userSelection + " vs. " + computerSelection === "Paper vs. Rock" || // Paper beat Rock
        userSelection + " vs. " + computerSelection === "Scissors vs. Paper") { //Scissors beat Paper
        win(userSelection, computerSelection);

    } else if (userSelection + " vs. " + computerSelection === "Rock vs. Paper" || //Rock lost against Paper
        userSelection + " vs. " + computerSelection === "Paper vs. Scissors" || // Paper lost against Scissors
        userSelection + " vs. " + computerSelection === "Scissors vs. Rock") { // Scissors lost against Rock
        lose(userSelection, computerSelection);

    } else {
        draw(userSelection, computerSelection); // if both selections are the same, initiate DRAW function
    }
}

/**
 * Event listener running in the background and waiting for 'click' event. It's linked to our three elements: Rock,Paper,Scissors. Once they are clicked, it adds the value that user clicked on to 'Play' function.
 */
function main() {
    rock.addEventListener("click", function () {
        play("Rock");
    });
    paper.addEventListener("click", function () {
        play("Paper");
    });
    scissors.addEventListener("click", function () {
        play("Scissors");
    });
}
main();