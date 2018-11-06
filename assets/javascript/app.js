
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
        $("#clockdiv").text(t.minutes + ' m ' + t.seconds + ' s ');
        //I'm not sure why the below doesn't appear to be kicking in and stopping the countdown.
        //No issues in the console, but it won't trigger an alert either.
        if(t===0){
            clearInterval(timeinterval);
        }
    },1000);

}
initializeClock();


//Variables to track correct and incorrect answers.
var correct= 0;
var incorrect= 0;

//If statement that checks for correct answers, and increments the appropriate variable.
if($("#correct").checked){
    correct++;
}else {
    incorrect++;
}

//Function that creates new div & elements when the form is submitted
function finish(){
$("<p />", { text: "Results" }).appendTo("#results");
$("<p />", { text: "Correct: " + correct }).appendTo("#results");
$("<p />", { text: "Incorrect:" + incorrect }).appendTo("#results");
}
//When submit is clicked, run the above function.
$("#submit").click(finish);

//Alert based on time, since the above if function is not working.
setTimeout(function(){
    alert("Sorry - Time's Up!!");
}, 150000);