TITLE 

     Rock-Paper-Scissors game


DESCRIPTION

    The code is written in JavaScript to operate at the browser level without any special inclusion of HTML
    or CSS for styling.


AN OUTLINE OF THE CODE

     •	Initialized 4 variables to 0 to calculate the:
  
      1.	Number of rounds played = count
      2.	Player Score = ps
      3.	Computer’s Score = cs
      4.	Number of rounds tied = tie
      
    •	Created a function ‘letsplay()’ to :
  
      1.	Read the player’s choice
      2.	Terminate the game and display the scoreboard if the spelling of the choice is incorrect.
      3.	Generate the computer’s choice using ‘Math.random()’
      4.	Check for the winner of the round.
      5.	Continue playing multiple rounds until the player chooses to exit.
      6.	Display the final scoreboard after the player chooses to exit.
      
    •      The final scoreboard is displayed using the function, ‘displayscore()’
           having the following parameters- ps,cs,count,tie

HOW TO RUN THE GAME?

    • Open the HTML file on a browser
      (through Live Server on VS code or other applicable options)
      
    • The game will automatically start running in the browser.


