//your code here


let btn = document.getElementById("play-game");

let rockbtn =document.getElementById("rock");
let paperbtn =document.getElementById("paper");
let scissorbtn =document.getElementById("scissors");

let useroption = document.getElementById("userChooice");
let computeroption =document.getElementById("computer-choose");
let remainround = document.getElementById("rounds-left");

let userpoint = document.getElementById("user-points");
let computerpoint =document.getElementById("computer-points");
let result = document.getElementById("round-result");

rockbtn.addEventListener('click',userchoicesoption);
paperbtn.addEventListener('click',userchoicesoption);
scissorbtn.addEventListener('click',userchoicesoption);

let round=0;

btn.addEventListener('click',(e) => {
    let userchoices =document.getElementById("game-number").value;
     if(userchoices > 0){
       
         round =userchoices;
         remainround.innerHTML = round;
     }
     else{
         alert("please entre valid value");
     }
 });


 let compscore =0;
 let userscore =0;


function userchoicesoption(e){

     console.log(e.target.value);
    let getuseroption  = e.target.value;
    useroption.innerHTML =getuseroption;

    let comparroption = ["ROCK", "PAPER", "SCISSORS"];

    let input = Math.floor(Math.random()*3);
    let getcompoption = comparroption[input];
    computeroption.innerHTML =getcompoption;
    
    if(getcompoption == getuseroption){
        result.innerHTML = 'DRAW';
        round--;

    }
else if(getuseroption == 'ROCK'){
        if(getcompoption == 'PAPER'){
             result.innerHTML = 'Computer Won';
             compscore++;
             computerpoint.innerHTML = compscore;
            round--;
        }else{
            result.innerHTML = 'User Won';
            userscore++;
            userpoint.innerHTML = userscore;
           round--;

        }
    }

    else if(getuseroption == 'SCISSORS'){

        if(getcompoption == 'ROCK'){
            result.innerHTML = 'Computer Won';
            compscore++;
            computerpoint.innerHTML = compscore;
           round--;
       }else{
           result.innerHTML = 'User Won';
           userscore++;
           userpoint.innerHTML = userscore;
          round--;

       }

    }

    else if(getuseroption == 'PAPER'){

        if(getcompoption == 'SCISSORS'){
            result.innerHTML = 'Computer Won';
            compscore++;
            computerpoint.innerHTML = compscore;
           round--;
       }else{
           result.innerHTML = 'User Won';
           userscore++;
           userpoint.innerHTML = userscore;
          round--;

       }


    }

    remainround.innerHTML = round;
   
    let finalwinner = document.getElementById('game-result');

    if(round == 0){
        remainround.innerHTML = round;

        if(userscore > compscore){
            alert("Game is over");
            finalwinner.innerText = "Finial result of User : WON";
            
        }
        else if(userscore < compscore){
            alert("Game is over ");
            finalwinner.innerText = "Finial result of User : LOSE ";
        }
        else{
            alert("Game is over");
            finalwinner.innerText = "Finial result of User : TIE ";

        }

    }

}





