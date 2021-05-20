let userScore = 0;
let computerScore = 0;

let userscore_p = document.getElementById("user-score");
let compscore_p = document.getElementById("comp-score");
let action_message = document.getElementById("action-message");
const buttons = document.querySelector(".btn");
const rock_icon = document.getElementById("rock");
const paper_icon = document.getElementById("paper");
const scissor_icon = document.getElementById("scissor");

function getCompChoice() {
    const choice = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function capitalize(word) {
    if (word == "rock") {
        return "Rock"
    }
    if (word == "paper") {
        return "Paper"
    } else {
        return "Scissor"
    }
}

function win(user, comp) {
    userScore++;
    userscore_p.innerHTML = userScore;
    compscore_p.innerHTML = computerScore;
    action_message.innerHTML = `${capitalize(user)} beats ${comp}. You Win!`;
}

function lose(user, comp) {
    computerScore++;
    userscore_p.innerHTML = userScore;
    compscore_p.innerHTML = computerScore;
    action_message.innerHTML = `${capitalize(user)} loses to ${comp}. You Loose!`;
}

function tie(user, comp) {
    userscore_p.innerHTML = userScore;
    compscore_p.innerHTML = computerScore;
    action_message.innerHTML = `Its a draw!`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "paperrock":
        case "scissorpaper":
        case "rockscissor":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            tie(userChoice, compChoice);
            break;
        }
}

function main() {
    rock_icon.addEventListener('click', function() {
        game("rock");
    })

    paper_icon.addEventListener('click', function() {
        game("paper");
    })

    scissor_icon.addEventListener('click', function() {
        game("scissor");
    })
}

main();
