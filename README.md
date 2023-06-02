# project-rock-paper-scissors

This project plays the game Rock, Paper, Scissors in the developer console. It contains 2 player: the player and the computer. The player plays using the prompt() and the computer plays using Math.random(). 

PLAN 
I first wrote a long comment block explaining some of the rules of the game. This also includes a general overview of how I think the game should be coded. 

SUBPROBLEMS 
I next used sinlge line comments to  break the pseudocode into small chucks. This helped visualize the steps needed to achieve the end result. 

CODE 
The final step in the first part of the Rock, Paper, Scissors game was to write the actual code. To achieve the results I wanted I used several new methods the weren't previously taught. 

The easiest way to get the choices rock, paper, and scissors was to put them into an array. This would be especially usefull if there were many more choices. 

I wanted to have a way for a message to show if a user entered something other than rock, paper, or 
scissors so I used a while loop. While can be used with if and else to mean while this condition is true return result, else return something else. 

A for loop was the easiest way to make the game run for rounds. The for loop is saying only run a round when round number is less than 5. 

Finally I needed a way for my score variables to know which player's score to increase so I used startsWith. By saying if (roundResult.startsWith("You Win!)) this specifies that on rounds when the result starts with "You Win!", my score is incremented by 1. The same is with "You Lose!" for the computer. 