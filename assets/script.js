let correctNotification = document.querySelector('#correctNotification');

correctNotification.style.display = "none";

let incorrectNotification = document.querySelector('#incorrectNotification');

incorrectNotification.style.display = "none";


let nextButton = document.querySelector('#nextButton');

nextButton.style.display = "none";


const questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: {
            1: 'strings',
            2: 'booleans',
            3: 'alerts',
            4: 'numbers',
        },
        correctAnswer: '3'
    },
    {
        question: "The condition in an if/else staement is enclosed with _________.",
        answers: {
            1: 'quotes',
            2: 'curly brackets',
            3: 'parenthesis',
            4: 'square brackets',
        },
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
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log",
        },
        correctAnswer: "4",
    }
]

