var userElection;
var cpuElection;
var cpuWinsMsj = "¡Has perdido!";
var userWinsMsj = "¡Has Ganado!";
var tieMsj = "Empate"
var userScore = document.getElementById('user-score');
var cpuScore = document.getElementById('CPU-score');
var winner = document.getElementById('winner');
var userSelectionImg = document.getElementById('user-selection');
var cpuSelectionImg = document.getElementById('CPU-selection');

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnReset = document.getElementById('reset');

var rock={id:1, name:"Piedra", imgPath:"resources\\rock.png"};
var paper={id:2, name:"Papel", imgPath:"resources\\paper.png"};
var scissors={id:3, name:"Tijeras", imgPath:"resources\\scissors.png"};

function compare(){
    if(userElection===cpuElection){
        return tieMsj;
    }else if(userElection===cpuElection+1){
        return userWinsMsj;
    }else if(cpuElection===userElection+1){
        return cpuWinsMsj;
    }else if(userElection===cpuElection-2){
        return userWinsMsj;
    }else if(cpuElection===userElection-2){
        return cpuWinsMsj;
    }
}
function userWins(){
    winner.innerHTML = userWinsMsj;
    userScore.innerHTML++;
}
function cpuWins(){
    winner.innerHTML = cpuWinsMsj;
    cpuScore.innerHTML++;
}
function tie(){
    winner.innerHTML = tieMsj;
}
function getRockPaperOrScissor(number){
    if(number===1){
        return rock;
    }else if(number === 2){
        return paper;
    }else return scissors;
}

function getRandomBetween(min, max){
    var num = Math.random() * (max+1 - min) + min;
    return Math.trunc(num);
}

function initGame(object){
    userElection = object.id;
    console.log("user choice: "+ getRockPaperOrScissor(userElection).name);
    userSelectionImg.src = object.imgPath;

    cpuElection = getRandomBetween(rock.id, scissors.id);
    console.log("cpu choice: "+ getRockPaperOrScissor(cpuElection).name);
    cpuSelectionImg.src = getRockPaperOrScissor(cpuElection).imgPath;

    console.log(compare());
    if(compare()===userWinsMsj){
        userWins();
    }else if(compare()===cpuWinsMsj){
        cpuWins();
    }else{
        tie();
    }
}
function resetGame(){
    userSelectionImg.src = "";
    cpuSelectionImg.src = "";
    winner.innerHTML="Resultado";
    userScore.innerHTML=0;
    cpuScore.innerHTML=0;
}

btnRock.onclick = function(){
    initGame(rock);
}
btnPaper.onclick = function(){
    initGame(paper);
}
btnScissors.onclick = function(){
    initGame(scissors);
}
btnReset.onclick = function(){
    resetGame();
}