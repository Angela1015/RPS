const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = 0
const computerScore =0
/*const winner =determineWinner(userChoice,computerChoice)*/
let uc = document.getElementById("user-choice")

/*let getUserChoice=(userChoice)*/

rock.addEventListener("click",function(){
  playGame("rock")})

paper.addEventListener("click",function(){
  playGame("paper")})
scissors.addEventListener("click",function(){
  playGame("scissors")})

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
        return "Computer wins";
      }else{
        return "User wins";
      }
    }
    if(userChoice==="paper"){
      if(computerChoice==="scissors"){
         return "Computer wins";
      }else{
        return "User wins"
      }  
    }
   
    if(userChoice==="scissors"){
      if(computerChoice==="rock"){
        return "Computer wins";
      }else{
        return "User wins";
      }
    }
  }
     
 
  
  function playGame(userChoice){
   // document.getElementById(user-choice).innerHTML="the computer chose"+computerChoice
    
    
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log( determineWinner(userChoice,computerChoice));
    document.getElementById("uc").innerHTML="the user chose "+userChoice
    document.getElementById("computer-choice").innerHTML="the computer chose" +computerChoice
    document.getElementById("round-winner").innerHTML="the winner is"+determineWinner(userChoice,computerChoice)
    
  }


/*funtion showWinner(winner,computerChoice){
  if(winner==="User wins")
   scoreboard.user++
}*/










   
