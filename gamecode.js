let count =1; let ps =0; let cs=0; let tie=0;

function letsplay()
{
    let comp;
    let playerip = prompt("Enter your choice: rock , paper or scissor? \n Wrong spelling of choice will terminate the game.");
    let pc= playerip.toLowerCase();

        if(pc!="rock" && pc!="paper" && pc!= "scissor")
        {
            alert("Incorrect spelling, exiting the game.")
            displayscore(ps, cs, count, tie )
            exit()
        }
       
    let ran= Math.ceil(Math.random()*3);

    if(ran===1)
     comp= "rock";
    else if(ran===2)
     comp = "paper";
    else 
     comp = "scissor";

    if(comp===pc)
    {   
        tie++;
        let check= confirm(`Your choice = ${pc} \n Computer's choice = ${comp}\n Tie round!\n click OK to replay and Cancel to display the scoreboard and exit`);
      
        if(check === true)
        { 
           count++;
           letsplay();
        }
        else
        displayscore(ps, cs, count, tie )
    }
    else if(comp === "paper" && pc ==="rock" ||comp === "scissor" && pc ==="paper" || comp === "rock" && pc ==="scissor")
    { 
        cs++;
        let check= confirm(`Your choice = ${pc} \n Computer's choice = ${comp} \n Computer wins this round!\n click OK to replay and Cancel to display scoreboard and exit`);
       
        if(check === true)
        {
          count++;
          letsplay();
        }
        else
        displayscore(ps, cs, count, tie )
    }
    else
    {
        ps++
        let check= confirm(`Your choice = ${pc} \n Computer's choice = ${comp}\n You win this round! \n click OK to replay and Cancel display scoreboard and exit`);
        if(check === true)
        {
            count++;
            letsplay();
        }
        else
        displayscore(ps, cs, count, tie )
    }
}
function displayscore()
{
    if(ps>cs)
    alert(`number of rounds played = ${count} \n Your score = ${ps} \n Computer's score = ${cs}\n Games tied = ${tie}\n Congrats! You are the final winner!`);

    if(cs>ps)
    alert(`number of rounds played = ${count} \n Your score = ${ps} \n Computer's score = ${cs}\n Games tied = ${tie}\n Computer wins, better luck next time..`);

    if(ps==cs)
    alert(`number of rounds played = ${count} \n Your score = ${ps} \n Computer's score = ${cs}\n Games tied = ${tie}\n Tiebreaker!`);
}

let proceed = confirm("Welcome to Rock Paper Scissors!\n Click OK to proceed and Cancel to exit");
if(proceed===false)
alert("Ok. Bye!");
else
letsplay();
