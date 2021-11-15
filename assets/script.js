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
let myQuestion = document.querySelector('.my-question')
var index;
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
    index = 0;


    displayQuestions(index);
    displayAnswers(index);

    // 1. have a checker for someone clicking on an answer.
    // check if the answer is correct
    //cycle through on click
})

function checkQuestion(index) {
    nextSet(index);
}
function nextSet(index) {
    index++;
    displayQuestions(index);
    displayAnswers(index);
    //put checkQuestion inside of click function that checks answers. 
    //checkQuestion(index);
    console.log(index)
}

// displaying cycling questions on clicks
function displayQuestions(index) {
    myQuestion.innerHTML = questionsArray[index].question;

}
//displaying cycling answers 
function displayAnswers(index) {
    aAnswer.innerHTML = questionsArray[index].a;
    bAnswer.innerHTML = questionsArray[index].b;
    cAnswer.innerHTML = questionsArray[index].c;
    dAnswer.innerHTML = questionsArray[index].d;
}
//index
const questionsArray = [
    {
        question: "Commonly used data types DO NOT include.....",
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















