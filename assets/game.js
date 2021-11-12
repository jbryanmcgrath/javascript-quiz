const questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            'strings',
            'booleans',
            'alerts',
            'numbers',
        ],
        correctAnswer: 'alerts'
    },
    {
        question: "The condition in an if/else staement is enclosed with _________.",
        answers: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets',
        ],
        correctAnswer: '3'
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
        },
        correctAnswer: '4',
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1: 'commas',
            2: 'curly brackets',
            3: 'quotes',
            4: 'parenthesis',
        },
        correctAnswer: '3',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log",
        ],
        correctAnswer: "4",
    }
]








let correctNotification = document.querySelector('#correctNotification');

correctNotification.style.display = "none";

let incorrectNotification = document.querySelector('#incorrectNotification');
//hiding message
incorrectNotification.style.display = "none";

let nextButton = document.querySelector('#nextButton');
//hiding
nextButton.style.display = "none";

let questionBox = document.querySelector('#questionBox')
let answersCon = document.querySelector('#multipleChoicePossibleAnswers')
let currentQuestionIndex = 0;
function loadAnswers(currentQuestion) {
    console.log(currentQuestion)
    let currentAnswers = questions[currentQuestionIndex].answers

    let correctAnswer = questions[currentQuestionIndex].correctAnswer
    console.log(currentAnswers)
    for (let i = 0; i < currentAnswers.length; i++) {
        const answer = currentAnswers[i];
        let answerLi = document.createElement('li');
        answersCon.appendChild(answerLi);
        let answerBtn = document.createElement('a');
        answerBtn.setAttribute('class', 'btn btn-primary btn-lg active col-3');
        answerBtn.setAttribute('style', 'margin-top: 15px;     margin-bottom: 15px;')
        answerBtn.setAttribute('value', correctAnswer)

        answerBtn.textContent = answer;
        answerLi.append(answerBtn);
    }
}
function checkAnswer(event) {
    if (event.target.value = correctAnswer) {
        ++currentQuestionIndex
    }
}

function loadQuestions() {
    let currentQuestion = questions[currentQuestionIndex].question;
    questionBox.textContent = currentQuestion;
    loadAnswers(currentQuestion)
}
loadQuestions();
