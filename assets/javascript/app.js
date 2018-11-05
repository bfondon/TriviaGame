//When the page refreshes, a timer counts down starting at 150 seconds. 

setTimeout(function(){
    alert("Sorry - Time's Up!!");
}, 150000);

var now = new Date().getTime();
var countdown = now + 150000;
var distance = now - countdown;
var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

$("#timer").html = minutes + ":" + seconds + "";
    //Timer should probably slide with the page so that it is always visible.

   

   








//If the user submits in time, the page refreshes to show that you are done, along with correct/incorrect answers.
