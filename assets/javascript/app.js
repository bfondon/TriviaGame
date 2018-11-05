//When the page refreshes, a timer counts down starting at 150 seconds. 
//An alert shows up (stopping the page) notifying the user that time is up.
setTimeout(function(){
    alert("Sorry - Time's Up!!");
}, 150000);

//Set variables for current time and the deadline - 150 seconds from when the user enters the page.
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + 150000);

//Create function to determine the amount of time remaining.
function getTimeRemaining(){
    var t = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor((t/1000) % 60);
    var minutes = Math.floor((t/1000/60) %60);
    return {
        'minutes': minutes,
        'seconds': seconds
    };
};
//Create a function to start the clock, update it every second, and add that information to the div.
function initializeClock(){
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(deadline);
        $("#clockdiv").text('minutes: ' + t.minutes + 'seconds' + t.seconds)();
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },1000);

}
initializeClock();


//If the user submits in time, the page refreshes to show that you are done, along with correct/incorrect answers.
