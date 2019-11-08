const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let userScore = 0
let computerScore = 0
/*const winner =determineWinner(userChoice,computerChoice)*/
let uc = document.getElementById("user-choice")
const reset = document.getElementById("reset")
let name = prompt("enter yout name")

/*let getUserChoice=(userChoice)*/

rock.addEventListener("click",function(){
  playGame("rock")})

paper.addEventListener("click",function(){
  playGame("paper")})
scissors.addEventListener("click",function(){
  playGame("scissors")})

reset.addEventListener("click",resetScore)
// This starts code form CC lesson

/*const getUserChoice=(userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput==="rock"||userInput==="scissors"||userInput==="paper"||userInput==="bomb"){
      return userInput
    }else{
      console.log("pleae enter a correct choice")
    }
  }*/
  
  
  
  const getComputerChoice=()=>{
   let number= Math.floor(Math.random()*3);
    if(number===0){
      return "rock";
    }else if(number===1){
      return "paper";
    }else{
      return "scissors";
    }
  }
  
  
           
  const determineWinner=(userChoice,computerChoice)=>{
    
    if(userChoice===computerChoice){
    
      return "Game is a tie";
      
    }
   
    if(userChoice ==="rock"){
      if(computerChoice ==="paper"){
        computerScore++
        return "Computer wins";
      }else{
        userScore++
        return name +" wins" ; 
        
  
      }

    }
    if(userChoice==="paper"){
      if(computerChoice==="scissors"){
        computerScore++
         return "Computer wins";
      }else{
        userScore++
        return name + " wins"
      }  
    }
   
    if(userChoice==="scissors"){
      if(computerChoice==="rock"){
        computerScore++
        return "Computer wins";
      }else{
        userScore++
        return name + " wins";
      }
    }
  }
     
 
  
 function playGame(userChoice){
   // document.getElementById(user-choice).innerHTML="the computer chose"+computerChoice
    
    if(computerScore<3&&userScore<3){
    let computerChoice = getComputerChoice();
    let roundwinner = determineWinner(userChoice,computerChoice)
    console.log(userChoice);
    console.log(computerChoice);
    console.log(roundwinner);
    document.getElementById("uc").innerHTML=name +" chose "+userChoice
    document.getElementById("computer-choice").innerHTML="The computer chose " +computerChoice
    document.getElementById("round-winner").innerHTML=roundwinner + " this round"
    document.getElementById("user-score").innerHTML=userScore
    document.getElementById("computer-score").innerHTML = computerScore
      console.log(computerScore)
      console.log(userScore)
    }else{
      if(userScore>computerScore){
        document.getElementById("game-winner").innerHTML=name + " wins the game"
      }else{
        document.getElementById("game-winner").innerHTML="Computer wins the game"
        
      }
    }
  }
    
  
      
    
      
    

  
    
  function resetScore(){
computerScore=0
userScore=0
document.getElementById("user-score").innerHTML=userScore
document.getElementById("computer-score").innerHTML=computerScore
document.getElementById("uc").innerHTML=""
    document.getElementById("computer-choice").innerHTML="" 
    document.getElementById("round-winner").innerHTML=""
    document.getElementById("game-winner").innerHTML=""
    
  }


/*funtion showWinner(winner,computerChoice){
  if(winner==="User wins")
   scoreboard.user++
}*/








