
//If we start or Reset the game
//If we are playing
//Reload the page
//If we are not playing
//Set score to 0
//show couundown box
//Reduce time by 1 sec loops
//Time left????
//Yes--> Continue
//No---> Gameover
//change button to reset
//Generate a new Question and Answer
//If we click on the answer box
//If we are playing
//correct?
//yes
    //Increase score
    //show correct box for 1sec
    //Generate a new Q&A
    //No
    //Shor try again box for 1sec

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick= function(){
    if(playing==true){
        location.reload();
    }
    else{
        hide("gameover");
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
//        document.getElementById("timeremaining").style.display="block";
        show("timeremaining");
        document.getElementById("startreset").innerHTML="Reset game";
        
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        startCoundown();
        
        generateQA();
    }
}
for(i=1;i<5;i++){
    
 document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML== correctAnswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
        
    }
}
function startCoundown(){
    action = setInterval(function(){
        timeremaining = timeremaining-1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining==0){
            stopcounter();
//            document.getElementById("gameover").style.display="block";
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>GAME OVER!</p><p>YOUR score is: " +score+ "</p>" ;
//            document.getElementById("timeremaining").style.display="none";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start again";
        }
    },1000)
}

function stopcounter(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}

function generateQA(){
    var x= 1+ Math.round(Math.random()*9);
    var y= 1+ Math.round(Math.random()*9);
    correctAnswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctPosition= 1+ Math.round(Math.random()*3);
    
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
    
    for(i=1;i<5;i++){
        var wrongAnswer= 1+ Math.round(Math.random()*99);
        if(correctPosition!=i){
            do{
                document.getElementById("box"+i).innerHTML=wrongAnswer;
            }
            while(wrongAnswer==correctAnswer)
        }
    }
    
}
   















