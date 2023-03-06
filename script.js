window.onload = function (){
    var seconds = 00;
    var msecs = 00;
    var appendMsecs = document.getElementById("msecs")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var buttonReset = document.getElementById('btn-reset');
    var Intervel;

    buttonStart.onclick = function(){
        clearInterval(Intervel);
        Intervel = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(Intervel);
    }

    buttonReset.onclick = function(){
        clearInterval(Intervel);
        msecs = "00";
        seconds = "00";
        appendMsecs.innerHTML = msecs;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        msecs++;

        if(msecs<=9){
            appendMsecs.innerHTML="0"+msecs;
        }
        if(msecs>9){
            appendMsecs.innerHTML=msecs;
        }

        if(msecs>99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            msecs=0;
            appendMsecs.innerHTML="0"+0;
        }

        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
    }
}