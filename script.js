 /* The Rock Paper Scissors Game is no longer played in the console. Instead, it is played 
    in the browser. The player selection is now controlled with a buttons for rock, paper, 
    and scissors. When a button is clicked, the player and computer make a choice. The
    choice information, score, and results are now displayed in the browser. A reset/new 
    game button is also added. This project uses many DOM methods and also callback 
    functions. 
 
 /* 
        This is a game of Rock Paper Scissors.
        For now, the game is played entirely in the console so there is no user interface. 

        Rock Paper Scissors has 2 players. In real life, each player randomly chooses between
        rock, paper, or scissors. Rock represents players' hands in a fist. Paper represents
        players' fingers fully extended so their hand looks flat like paper. Scissors are 
        represented by only players' index and middle finger extended, as to look like scissors. 
        Rock beats scissors, scissors beat paper, scissors beat paper, and paper beats rock 
        (or paper covers rock as often said). 

        In this game, rock, paper, and scissors are represented by the words rock, paper,
        and scissors. The 2 players are a human and the computer. Once this is defined, 
        the player makes their choice using a prompt(). The computer makes a choice randomly.
        Once the winner is determined, a message is displayed telling the player who won 
        the game. If both the computer and player make the same choice, the game is tied. 
        If the player does not input a valid choice, a message displayd telling the player 
        to input rock, paper, or scissors. This is a single round. The console also keeps score. 
        The game is played for 5 rounds. 
        */

        // When button is clicked, return, rock, paper, or scissors.
        const choices = ["rock", "paper", "scissors"];
        
        let rockButton = document.getElementById("rock");
        rockButton.addEventListener("click", getPlayerSelection);
        
        function getPlayerSelection() {
            let choice = choices;
            choice[0] = "rock";
            choice[1] = "paper";
            choice[2] = "scissors";
            return choice;
        }

        // Computer makes a choice randomly between rock, paper, or scissors.
        function getComputerChoice() {
            const choices = ["Rock", "Paper", "Scissors"];
            const random = Math.floor(Math.random() * choices.length);
            return choices[random];
        }
        // Case-insenitive 
        function playRound(playerSelection, computerSelection) {
            //playerSelection = playerSelection.toLowerCase();
            //computerSelection = computerSelection.toLowerCase();
        // If player chooses rock and computer chooses paper, return "You lose! Paper beats rock". 
        // If player chooses paper and computer chooses scissors, return "You lose! Scissors beat paper."
        // If player chooses scissors and computer chooses rock, return "You lose! Rock beats scissors."
        // If player chooses paper and computer chooses rock, return "You win! Paper beats rock". 
        // If player chooses scissors and computer chooses paper, return "You win! Scissors beat paper."
        // If player chooses rock and computer chooses scissors, return "You win! Rock beats scissors."
        // If player choice is not valid, return "Please input rock, paper, or scissors."
        // Else, return "Game tied."
             if (playerSelection === computerSelection) {
                return "Game tied."
            } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                return `You Win! ${playerSelection} beats ${computerSelection}.`;
            } else {
                return `You Lose! ${computerSelection} beats ${playerSelection}.`
            }
        }
        
            function game() {
            //Player and computer score 
                let playerScore = 0;
                let computerScore = 0;
                //Play 5 times 
            for (let i = 0; i < 5; i++) {
                const playerSelection = getPlayerSelection();
                const computerSelection = getComputerChoice();
                const roundResult = playRound(playerSelection, computerSelection)
                console.log(roundResult);
                 // If player wins, increase player score by one.
                if (roundResult.startsWith("You Win!")) {
                    playerScore++
                // If computer wins, increase computer score by one. 
                } else if (roundResult.startsWith("You Lose!")) {
                    computerScore++
                }
            }

    console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);

        }

        // Call game 
        game();