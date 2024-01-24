var timer = 10;
var score = 0;
var hitrn;

function makebubble(){
    var clutter="";
for(var i = 1; i<=161; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#body").innerHTML = clutter;
}

function runTimer()
 {
    var timerint = setInterval(function ()
    {
        if(timer > 0)
        {    
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#body").innerHTML=`<h1>GAME OVER<h1>`
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#body").addEventListener("click", function(dets){
    var clickednumber = Number(dets.target.textContent);
    if(clickednumber == hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})

makebubble();
runTimer();
getNewHit();