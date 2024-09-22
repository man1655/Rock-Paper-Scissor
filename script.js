let user = 0;
let computer = 0;

let choices = document.querySelectorAll(".choice"); 
let message=document.querySelector(".reasult")

let userscore=document.querySelector("#user_score");
let compscore=document.querySelector("#comp_score")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log("Button was Clicked");
        const userchoice=choice.getAttribute("id")
        gameplay(userchoice)
        console.log(userchoice)
    });
});
const getcomputerchoice= ()=>{
  let arr=["rock","scissors","paper"]
  let number=Math.floor(Math.random()*3)
  return arr[number];

}

const showinner=(userWin,userchoice,computerchoice)=>{
  console.log(userchoice+"Win")
  if(userWin===true){
    user++;
    message.innerHTML=`You Won ! your ${userchoice} beats ${computerchoice}`;
    message.style.backgroundColor="green";
    document.body.style.backgroundColor = "#b3ffb3";
    userscore.innerHTML=user;
  }
  else{
    computer++;
    message.innerHTML=`You Lose ! ${computerchoice} beat ${userchoice}`;
    message.style.backgroundColor="Red"
    document.body.style.backgroundColor = "#ffb3b3";
    compscore.innerHTML=computer;
  }

}
const gameplay=(userchoice)=>{
  let  computerchoice=getcomputerchoice();
  let userWin=true;
  if(userchoice===computerchoice){
    message.innerHTML="Match Is Draw!! Play Again"
    message.style.backgroundColor="purple"; 
  }
  else{
     if(userchoice==="rock"){
         userWin=computerchoice==="paper"?false:true;
     }
     else if (userchoice==="paper") {
       userWin=computerchoice==="scissors"?false:true
      
     }
     else{
      userWin=computerchoice==="rock"?false:true;
     }
     showinner(userWin,userchoice,computerchoice)
  }
 

}