$('#start').on("click", function () {
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

var questions = [{
    question: "What is the largest continent in the world?",
    answers: ["Asia", "Europe", "Africa", "America"],
    correctAnswer: "Asia"
}, {
    question: "What is the largest ocean in the world?",
    answers: ["Atlantic", "Pacific", "Indian", "North"],
    correctAnswer: "Pacific"
}, {
    question: "What is the largest bird in the world?",
    answers: ["Swan", "Ostrich", "Eagle", "Penguin"],
    correctAnswer: "Ostrich"
}, {
    question: "What is the largest animal in the world?",
    answers: ["Bear", "Wolf", "Leon", "Cat"],
    correctAnswer: "Bear"
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    counter: 20,
    unanswered: 0,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time up!");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2> Time Remaining : <span id='counter'> 20 </span>  Seconds  </h2>");
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button - ' + i + '" data-name="' + questions[game.
                currentQuestion].answers[i] + '">' + questions[game.
                    currentQuestion].answers[i] + '</button>');
        }

    },
    nextQuestion: function () {
        game.counter = 20;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function () {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2> Out of time!</h2>');
        $('#subwrapper').appernd('<h3> The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }

    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].
            correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        var img = $('<img>');
        img.attr('src', './assets/images/win.gif')
        console.log("You got it!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> You got it right!</h2>');
        $('#image-placement').html(img);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);

        }

    },
    answeredIncorrectly: function () {
        var img = $('<img>');
        img.attr('src', './assets/images/loser.gif')
        console.log("Wrong!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> You got it wrong!</h2>');
        $('#image-placement').html(img);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);

        }

    },

    results: function () {
        clearInterval(timer);
        $('#subwrapper').html('<h2> All Done!</h2>');
        $('#subwrapper').append('<h3> Correct: + game.correct</h3>');
        $('#subwrapper').append('<h3> Incorrect: "+game.incorrect"</h3>');
        $('#subwrapper').append('<h3> Unanswered: "+game.unanswered"</h3>');
        $('#subwrapper').append("<button id='reset'> Reset </button>");

    },

    reset: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();




    }
};









