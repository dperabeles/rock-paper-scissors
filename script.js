// Rock, Paper, Scissors Project for the Odin Project Fundamentals.
// by dperabeles


// Choice selection (rock,paper,scissor)
function playerChoice() {
    let playerChoice = prompt("rock, paper or scissors ?")
};

// Made user input to lowercase for the script to work
lowplayerChoice = playerChoice.toLowerCase();

// Random choice selection for computer

function computerChoice(arr) {
    const randomChoice = Math.floor(Math.random() * arr.length);
    const item = arr[randomChoice];
    return item;
};

const array = ["rock", "paper", "scissors"];

const result = computerChoice(array);

console.log(result);

// After choosing one of the three
if (lowplayerChoice === null || playerChoice === " ") {
    alert("Choice one of the three! ")
}


// If your choice is ROCK

// And the computer choice is rock = tie
else if (lowplayerChoice === "rock" && computerChoice === "rock") {
    alert("Its a TIE")
}
// And the computer choice is scissors = win
else if (lowplayerChoice === "rock" && computerChoice === "scissors") {
    alert("You WIN!")
}
// And the computer choice is paper = lose
else if (lowplayerChoice === "rock" && computerChoice === "paper") {
    alert("You LOSE!")
}

// If your choice is PAPER

// And the computer choice is rock = win
else if (lowplayerChoice === "paper" && computerChoice === "rock") {
    alert("You WIN!")
}
// And the computer choice is scissors = lose
else if (lowplayerChoice === "paper" && computerChoice === "scissors") {
    alert("You LOSE!")
}
// And the computer choice is paper = tie
else if (lowplayerChoice === "paper" && computerChoice === "paper") {
    alert("Its a TIE")
}

// If your choice is SCISSORS

// And the computer choice is rock = lose
else if (lowplayerChoice === "scissors" && computerChoice === "rock") {
    alert("You LOSE!")
}
// And the computer choice is scissors = tie
else if (lowplayerChoice === "paper" && computerChoice === "paper") {
    alert("Its a TIE")
}
// And the computer choice is paper = win
else if (lowplayerChoice === "scissors" && computerChoice === "paper") {
    alert("You WIN!")
};

// After the winner (or tie) is announced you can start again


