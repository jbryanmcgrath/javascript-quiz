let home = document.querySelector('#home')
//hide whole section with this variable
let start = document.querySelector('#start')
//start button to hide everything but questions and answers
let highRollers = document.querySelector('#highRollers')
//hide everything but high score situation
let headerLinks = document.querySelector('#headerLinks')
//header links div
let questionBox = document.querySelector('#questionBox')
//variable to pass questions in to
let multipleChoicePossibleAnswers = document.querySelector('#multipleChoicePossibleAnswers')
//div of all questions
let aAnswer = document.querySelector('#aAnswer')
//variable for answer a
let bAnswer = document.querySelector('#bAnswer')
//variable for answer b
let cAnswer = document.querySelector('#cAnswer')
//variable for answer c
let dAnswer = document.querySelector('#dAnswer')
//variable for answer d
let correctNotification = document.querySelector('#correctNotification')
//correct answer
let incorrectNotification = document.querySelector('#incorrectNotification')
//incorrect answer
let nextButton = document.querySelector('#nextButton')
//next Buttton
let topScoresPage = document.querySelector('#topScoresPage')
//TopScoresPage

//hiding things for home page
headerLinks.style.display = "none";
questionBox.style.display = "none";
multipleChoicePossibleAnswers.style.display = "none";
correctNotification.style.display = "none";
incorrectNotification.style.display = "none";
nextButton.style.display = "none";


start.addEventListener('click', () => {
    home.style.display = "none"
    headerLinks.style.display = "block"
    questionBox.style.display = "block"
    multipleChoicePossibleAnswers.style.display = "block"
    var sec = 15;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('timer').innerHTML = sec + "sec left";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Out of Time!! :(");
        }
    }
})

const questions = [
    {
        question: "Commonly used data types DO NOT include",
        a: 'strings',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers',
        correctAnswer: 'alerts'
    },
    {
        question: "The condition in an if/else staement is enclosed with _________.",
        a: 'quotes',
        b: 'parenthesis',
        c: 'curly brackets',
        d: 'square brackets',
        correctAnswer: 'parenthesis'
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        a: 'numbers and strings',
        b: 'booleans',
        c: 'alerts',
        d: 'all of the above',
        correctAnswer: 'all of the above'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: 'commas',
        b: 'curly brackets',
        c: 'quotes',
        d: 'numbers',
        correctAnswer: 'quotes'
    },
]















