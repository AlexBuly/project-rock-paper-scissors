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
        
         const rockBtn = document.getElementById("rock");
         const paperBtn = document.getElementById("paper");
         const scissorsBtn = document.getElementById("scissors");
         const results = document.querySelector(".round-results");
         const playScore = document.querySelector(".player-score");
         const compScore = document.querySelector(".computer-score");
         const playerImg = document.querySelector(".player-img");
         const computerImg = document.querySelector(".computer-img");

         rockBtn.addEventListener("click", () => {
            playerSelection = "Rock";
            computerSelection = getComputerChoice();
            results.textContent = playRound(playerSelection, computerSelection);
            playerImg.innerHTML = "<img src='rock.png' alt='rock'/>"
            computerImg.innerHTML = `<img src='${computerSelection.toLowerCase()}.png' alt='${computerSelection.toLowerCase()}'/>`;
         });
         paperBtn.addEventListener("click", () => {
            playerSelection = "Paper";
            computerSelection = getComputerChoice();
            results.textContent = playRound(playerSelection, computerSelection);
            playerImg.innerHTML = "<img src='paper.png' alt='paper'/>";
            computerImg.innerHTML = `<img src='${computerSelection.toLowerCase()}.png' alt='${computerSelection.toLowerCase()}'/>`;            
         });
         scissorsBtn.addEventListener("click", () => {
            playerSelection = "Scissors"
            computerSelection = getComputerChoice();
            results.textContent = playRound(playerSelection, computerSelection);
            playerImg.innerHTML = "<img src='scissors.png' alt='scissors'/>";
            computerImg.innerHTML = `<img src='${computerSelection.toLowerCase()}.png' alt='${computerSelection.toLowerCase()}'/>`;        
         });
         // Computer makes a choice randomly between rock, paper, or scissors.
         function getComputerChoice() {
            const choices = ["Rock", "Paper", "Scissors"];
            const random = Math.floor(Math.random() * choices.length);
            return choices[random];
        }
         let playerScore = 0;
         let computerScore = 0;
         playScore.textContent = `Player: ${playerScore++}`;
         compScore.textContent = `Computer: ${computerScore++}`;
         
         function playRound(playerSelection, computerSelection) {
         // If player chooses rock and computer chooses paper, return "You lose! Paper beats rock". 
         // If player chooses paper and computer chooses scissors, return "You lose! Scissors beat paper."
         // If player chooses scissors and computer chooses rock, return "You lose! Rock beats scissors."
         // If player chooses paper and computer chooses rock, return "You win! Paper beats rock". 
         // If player chooses scissors and computer chooses paper, return "You win! Scissors beat paper."
         // If player chooses rock and computer chooses scissors, return "You win! Rock beats scissors."
         // If player choice is not valid, return "Please input rock, paper, or scissors."
         // Else, return "Game tied."
         if (playerSelection === computerSelection) {
            return "Game tied.";
         } else if (
         (playerSelection === "Rock" && computerSelection === "Scissors") ||
         (playerSelection === "Paper"&& computerSelection === "Rock") ||
         (playerSelection === "Scissors" && computerSelection === "Paper")
         ) {
            playScore.textContent = `Player: ${playerScore++}`;
            if (playerScore === 6) {
               disableButtons();
               showResetButton();
               return `YOU WIN! Final Score: Player ${--playerScore} - Computer ${--computerScore}`;
            }
            return `You win! ${playerSelection} beats ${computerSelection}.`;
         } else {
            compScore.textContent = `Computer: ${computerScore++}`;
            if (computerScore === 6) {
               disableButtons()
               showResetButton();
               return `YOU LOSE! Final Score: Player ${--playerScore} - Computer ${--computerScore}`;
            }
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
         }
         }
         

            function showResetButton() {
               const resetBtn = document.createElement("button");
               resetBtn.textContent = "Reset Game";
               resetBtn.addEventListener("click", resetGame);
               results.insertAdjacentElement("afterend", resetBtn);
             }
             

            function resetGame() {
               playerScore = 0;
               computerScore = 0;
               playScore.textContent = `Player: ${playerScore}`;
               compScore.textContent = `Computer: ${computerScore}`;
               results.textContent = "";
               playerImg.innerHTML = "";
               computerImg.innerHTML = "";
               enableButtons();
               hideResetButton();
             }
             
             function disableButtons() {
               rockBtn.disabled = true;
               paperBtn.disabled = true;
               scissorsBtn.disabled = true;
               rockBtn.classList.add("disabled");
               paperBtn.classList.add("disabled");
               scissorsBtn.classList.add("disabled");
             }
             
             function enableButtons() {
               rockBtn.disabled = false;
               paperBtn.disabled = false;
               scissorsBtn.disabled = false;
               rockBtn.classList.remove("disabled");
               paperBtn.classList.remove("disabled");
               scissorsBtn.classList.remove("disabled");
             }
             
             function hideResetButton() {
               const resetBtn = document.querySelector("button");
               if (resetBtn) {
                 resetBtn.remove();
               }
             }