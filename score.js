

var team1count=0;
var team2count=0;
function addone()
{

    let para=document.getElementById("score1");
    team1count+=1;
    score1.textContent=team1count;
}
function addone1()
{

    let para=document.getElementById("score2");
    team2count+=1;
    score2.textContent=team2count;
}
function addtwo(){
    
    let para=document.getElementById("score1");
    team1count+=2;
    score1.textContent=team1count;
}
function addtwo1(){
  let para=document.getElementById("score-2");
  team2count+=2;
    score2.textContent=team2count;
}
function addthree(){
    let para=document.getElementById("score-1");
    team1count+=3;
      score1.textContent=team1count;
  }
  function addthree1(){
    let para=document.getElementById("score-2");
    team2count+=3;
      score2.textContent=team2count;
  }
  
  