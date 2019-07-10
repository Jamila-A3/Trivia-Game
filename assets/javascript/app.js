window.onload = function() {
    
    var clockRunning = false;
    var time = 10;
    var correct = 0;
    var messages = ["Great job!", "That's just OK", "You really need to do better"];
    
    var range;

    $("#countdown").html(time);

    $("#start").on("click", function(){
        var i = setInterval(() => {
            time--;
            if(time === 0) {
                clearInterval(i);
            done}
            $("#countdown").html(time);
        }, 1000);
    });

    $("#reset").on("click", function(){
        time = 10; 
        $("#countdown").html(time);

    });


    

    function reset (){
        if (time < 10){

       
    function start () {
        if (!clockRunning){

        }
    }
}
    }
function count(){

}
function timeConverter(t) {
    var seconds;
    if (seconds < 10) {
        seconds = "0" ;
        
    }
}
function check() {
   
    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
   
    if(question1 == "Asia") {
        correct++;
    }
    if(question2 == "Pacific") {
        correct++;
    }
    if(question3 == "Ostrich") {
        correct++;
    }    
    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3 ) {
        score = 1;
    }
    if (correct >2) {
        score = 0;
    }
    
    
}
 
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML="You got" +  correct  + "correct";
document.getElementById("message").innerHTML= messages[range];




}
