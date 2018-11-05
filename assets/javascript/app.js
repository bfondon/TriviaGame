//When the page refreshes, a timer counts down starting at 150 seconds. 

setTimeout(function(){
    alert("Sorry - Time's Up!!");
}, 150000);

var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + 150000);

function getTimeRemaining(){
    var t = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor((t/1000) % 60);
    var minutes = Math.floor((t/1000/60) %60);
    return {
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(){
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(deadline);
        $("#clockdiv").text('minutes: ' + t.minutes + '<br>' + 'seconds' + t.seconds + '<br>')();
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },150000);
}

initializeClock('clockdiv', deadline);
    //Timer should probably slide with the page so that it is always visible.

   

   








//If the user submits in time, the page refreshes to show that you are done, along with correct/incorrect answers.
