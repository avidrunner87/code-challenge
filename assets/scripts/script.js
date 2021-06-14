// ------------- Assignment Code -------------
// Array of questions
const quizQuestions = {
    "item": {
        "question": "What is your name?",
        "answers": [
            {
                "value": "Andrew",
                "correct": true
            },
            {
                "value": "Jane",
                "correct": false
            },
            {
                "value": "Sam",
                "correct": true
            },
            {
                "value": "Terry",
                "correct": true
            }
        ]
    }
};

// Element selectors
const mainContent = document.getElementById("content");

// ---------------- Functions ----------------
function init() {

    welcomeScreen();
}

// Build welcome page
function welcomeScreen() {
    // Clear the main content DIV
    mainContent.innerHTML = "";

    // Create the div container for message
    let welcomeDIV = document.createElement("div");
    welcomeDIV.setAttribute("id", "welcome");

    // Create the title
    let titleEl = document.createElement("h1");
    titleEl.textContent = "Welcome";
    welcomeDIV.appendChild(titleEl);

    // Create directions
    let directionsElOne = document.createElement("p");
    directionsElOne.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score and time.";
    welcomeDIV.appendChild(directionsElOne);
    
    let directionsElTwo = document.createElement("p");
    directionsElTwo.textContent = "You also have the option of using the 1-4 keys on your keyboard if you are on a computer.";
    welcomeDIV.appendChild(directionsElTwo);

    let directionsElThree = document.createElement("p");
    directionsElThree.textContent = "When you are ready, click the button to begin. Enjoy!";
    welcomeDIV.appendChild(directionsElThree);

    // Create user actions
    let userActions = document.createElement("div");

    let startQuizEl = document.createElement("button");
    startQuizEl.setAttribute("id", "startQuiz");
    startQuizEl.setAttribute("class", "btn");
    startQuizEl.textContent = "Start Quiz";
    userActions.appendChild(startQuizEl);

    let showScoresEl = document.createElement("button");
    showScoresEl.setAttribute("id", "viewScores");
    showScoresEl.setAttribute("class", "btn");
    showScoresEl.textContent = "View High Scores";
    userActions.appendChild(showScoresEl);


    // REMOVE BEFORE SUBMITTING, TEMP FOR TESTING
    let addScoresEl = document.createElement("button");
    addScoresEl.setAttribute("id", "addScore");
    addScoresEl.setAttribute("class", "btn");
    addScoresEl.textContent = "Add Score";
    userActions.appendChild(addScoresEl);
    // ------------------------------------------

    welcomeDIV.appendChild(userActions);

    // Append to web page
    mainContent.appendChild(welcomeDIV);
}
// Build quiz page.
function startQuiz() {
    // Clear the main content DIV
        mainContent.innerHTML = "";

    // Create game board for quiz
    let quizDIV = document.createElement("div");
    quizDIV.setAttribute("id", "questionnaire");

    // Create question DIV on game board
    let questionEl = document.createElement("div");
    questionEl.setAttribute("id", "question");
    quizDIV.appendChild(questionEl);

    // Create answer options on game board
    for (let i = 0; i < 4; i++) {
        let optionEl = document.createElement("button");
        let optionHotKeyCount = 0
        optionHotKeyCount = i+1
        optionEl.setAttribute("id", "option" + optionHotKeyCount);

        let hotkeyEl = document.createElement("div");
        hotkeyEl.setAttribute("class", "hotkey");
        hotkeyEl.textContent = i+1;
        optionEl.appendChild(hotkeyEl);

        let answerEl = document.createElement("span");
        answerEl.setAttribute("class", "answer");
        optionEl.appendChild(answerEl);

        quizDIV.appendChild(optionEl);
    }

    // Append to web page
    mainContent.appendChild(quizDIV);

    document.getElementById("questionnaire").scrollIntoView();
    runQuiz()
}

// Run the quiz
function runQuiz() {
    const questionDIV = document.getElementById("question");
    const optionOneDIV = document.getElementById("option1");
    const optionTwoDIV = document.getElementById("option2");
    const optionThreeDIV = document.getElementById("option3");
    const optionFourDIV = document.getElementById("option4");

    questionDIV.textContent = quizQuestions.item.question;
    optionOneDIV.children[1].append(quizQuestions.item.answers[0].value);
    optionTwoDIV.children[1].append(quizQuestions.item.answers[1].value);
    optionThreeDIV.children[1].append(quizQuestions.item.answers[2].value);
    optionFourDIV.children[1].append(quizQuestions.item.answers[3].value);
}

// Build add score page.
function addScore() {
    // Clear the main content DIV
        mainContent.innerHTML = "";

    // Create the div container for message
    let addScoreDIV = document.createElement("div");
    addScoreDIV.setAttribute("id", "addScore");

    // Create the title
    let titleEl = document.createElement("h1");
    titleEl.textContent = "All Done";
    addScoreDIV.appendChild(titleEl);

    // Create overview
    let overviewElOne = document.createElement("p");
    overviewElOne.textContent = "Congratulations, you finished the quiz! Take the opportunity to enter your score into the high scores list.";
    addScoreDIV.appendChild(overviewElOne);

    let overviewElTwo = document.createElement("p");
    overviewElTwo.textContent = "Your final score is: ";

    let overviewElThree = document.createElement("span");
    overviewElThree.setAttribute("id", "userScore");
    overviewElThree.textContent = "40";
    overviewElTwo.appendChild(overviewElThree);
    addScoreDIV.appendChild(overviewElTwo);

    // Create user actions
    let userActions = document.createElement("div");

    let nameLabelEl = document.createElement("label");
    nameLabelEl.setAttribute("for", "userName");
    nameLabelEl.textContent = "Enter your name: ";
    userActions.appendChild(nameLabelEl);

    let nameInputEl = document.createElement("input");
    nameInputEl.setAttribute("type", "text");
    nameInputEl.setAttribute("id", "userName");
    nameInputEl.setAttribute("name", "userName");
    userActions.appendChild(nameInputEl);

    let submitScoreEl = document.createElement("button");
    submitScoreEl.setAttribute("id", "submitScore");
    submitScoreEl.setAttribute("class", "btn");
    submitScoreEl.textContent = "Submit";
    userActions.appendChild(submitScoreEl);

    addScoreDIV.appendChild(userActions);

    // Append to web page
    mainContent.appendChild(addScoreDIV);
}

// Store score in local storage
function storeScore() {
    let highScores = JSON.parse(localStorage.getItem("codeKnowledgeQuizHighScores"));
    if (highScores === null) {
        highScores = [];
    }

    let userName = document.getElementById("userName").value;
    let userScore = document.getElementById("userScore").textContent;
    let newEntry = {
        "userName": userName,
        "userScore": userScore
    }

    highScores.push(newEntry);
    localStorage.setItem("codeKnowledgeQuizHighScores", JSON.stringify(highScores));

    viewScores();    
}

// Build high scores page.
function viewScores() {
    // Clear the main content DIV
        mainContent.innerHTML = "";

    // Create the div container for message
    let scoresDIV = document.createElement("div");
    scoresDIV.setAttribute("id", "highScores");

    // Create the title
    let titleEl = document.createElement("h1");
    titleEl.textContent = "High Scores";
    scoresDIV.appendChild(titleEl);

    // Create overview
    let overviewEl = document.createElement("p");
    overviewEl.textContent = "Below are the high scores for the Coding Knowledge Quiz. See if you can best the best by giving it another try. Good luck!";
    scoresDIV.appendChild(overviewEl);

    // Create user highscores table
    let orderListEl = document.createElement("ol");
    orderListEl.setAttribute("id", "highScoresList");
    scoresDIV.appendChild(orderListEl);

    // Create user actions
    let userActions = document.createElement("div");

    let goBackEl = document.createElement("button");
    goBackEl.setAttribute("id", "welcomeScreen");
    goBackEl.setAttribute("class", "btn");
    goBackEl.textContent = "Go Back";
    userActions.appendChild(goBackEl);

    let clearScoresEl = document.createElement("button");
    clearScoresEl.setAttribute("id", "clearScores");
    clearScoresEl.setAttribute("class", "btn");
    clearScoresEl.textContent = "Clear High Scores";
    userActions.appendChild(clearScoresEl);

    scoresDIV.appendChild(userActions);

    // Append to web page
    mainContent.appendChild(scoresDIV);

    // Get high scores from local storage
    renderHighScores();
}

// Get high scores from local storage and load on page.
function renderHighScores() {
    
    let highScoresList = document.getElementById("highScoresList");
    let highScores = JSON.parse(localStorage.getItem("codeKnowledgeQuizHighScores"));
    if (highScores === null) {
        highScores = [];
    }

    highScoresList.innerHTML = "";

    highScores.sort(function(a, b) {
        return a.userScore - b.userScore
    });
    highScores.reverse();

    for (let i = 0; i < highScores.length; i++) {
        let highScore = highScores[i]

        let liEl = document.createElement("li");
        liEl.textContent = highScore.userName + " with a score of " + highScore.userScore;

        highScoresList.appendChild(liEl);
    }
}

// Calls init to retrieve data and render it to the page on load
init();

// ------------- Event Listeners -------------
// Add event listener to buttons
mainContent.addEventListener("click", function(event) {
    if (event.target.matches("button") === true) {
        switch (event.target.id) {
            case "welcomeScreen":
                welcomeScreen();
                break;
            case "startQuiz":
                startQuiz();
                break;
            case "option1":
            case "option2":
            case "option3":
            case "option4":
                console.log(event.target.id);
                break;
            case "addScore":
                addScore();
                break;
            case "submitScore":
                storeScore();
                break;
            case "viewScores":
                viewScores();
                break;
            case "clearScores":
                localStorage.clear("codeKnowledgeQuizHighScores");
                renderHighScores();
                break;
        }
    }
})

// Add event listener to quiz hotkeys
// mainContent.addEventListener("keydown", function(event) {
//     console.log(event.code);
// })