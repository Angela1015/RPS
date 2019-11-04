const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

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
    
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log( determineWinner(userChoice,computerChoice))
  }














   
