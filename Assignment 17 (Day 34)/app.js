const quizQuestions = [
    {
        question: "What is full form of HTML",
        a: "HyperText Markup Language",
        b: "HighText Machine Language",
        c: "HyperText and Markup Language",
        d: "HighText Markup Language",
        ans: "ans1"
    },
    {
        question: "What is full form of CSS",
        a: "Color and Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Styling Sheets",
        d: "Cascade Style Sheets",
        ans: "ans2"
    },
    {
        question: "What is full form of JS",
        a: "J Script",
        b: "Jam Script",
        c: "Java Scripting",
        d: "JavaScript",
        ans: "ans4"
    },
    {
        question: "A page designed in HTML:",
        a: "Application",
        b: "Cover Page",
        c: "Front-End",
        d: "Web Page",
        ans: "ans4"
    },
    {
        question: "HTML document saved with _____ extension.",
        a: ".htl",
        b: ".html",
        c: ".hml",
        d: ".htnl",
        ans: "ans2"
    },
    {
        question: "Which is the HTML root tag:",
        a: "Head",
        b: "Title",
        c: "Body",
        d: "Html",
        ans: "ans4"
    },
    {
        question: "HTML tag for large title:",
        a: "H1",
        b: "Heading",
        c: "Head",
        d: "H6",
        ans: "ans1"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const scoreDiv = document.querySelector(".scoreArea");
const playButton = document.querySelector(".playButton");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    question.innerText = quizQuestions[questionCount].question;
    option1.innerText = quizQuestions[questionCount].a;
    option2.innerText = quizQuestions[questionCount].b;
    option3.innerText = quizQuestions[questionCount].c;
    option4.innerText = quizQuestions[questionCount].d;
}

loadQuestion();

const getCheckAnswer = () => {
    let checked;
    answers.forEach((selection) => {
        if(selection.checked) {
            checked = selection.id;
        }
    });
    return checked;
}

submitButton.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === quizQuestions[questionCount].ans) {
        score++;
    }
    questionCount++;
    answers.forEach((selection) => {
       selection.checked = false;
    });

    if(questionCount < quizQuestions.length) {
        loadQuestion();
    } else {
        scoreDiv.innerHTML = `
            <h3>You Have Scored ${score}/${quizQuestions.length}</h3>
            <button class="playButton" onclick="playAgain()">Play Again</button>
        `;
    }
});

const playAgain = () => {
    location.reload();
}