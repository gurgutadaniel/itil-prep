/* ============================================================
   ITIL FOUNDATION V5 SIMULATOR
   APP ENTRY POINT
   ============================================================ */

import {
    state,
    resetState
} from "./state.js";

import {
    questions as examQuestions
} from "./questions_exam.js";

import {
    createRandomizedQuestions
} from "./randomizer.js";

import {
    render,
    clearFeedback,
    showExamScreen,
    showHomeScreen,
    $
} from "./ui.js";

import {
    startTimer,
    stopTimer,
    updateTimerDisplay
} from "./timer.js";

import {
    nextQuestion,
    previousQuestion,
    clearAnswer,
    toggleMark
} from "./navigation.js";

import {
    openFinishModal,
    cancelFinish,
    finishExam,
    startReview
} from "./exam.js";

import {
    getHistory,
    clearHistory
} from "./history.js";

import {
    questions as learningQuestions
} from "./questions_learning.js";
/* ============================================================
   START MODE
   ============================================================ */

function startMode(mode) {

    state.mode =
        mode;


/*
Select question source depending on mode.
*/

let selectedQuestions;


if (
    mode === "exam" ||
    mode === "practice"
) {

    selectedQuestions =
        examQuestions;

}
else if (
    mode === "learning"
) {

    selectedQuestions =
        learningQuestions;

}

/*
Create a NEW randomized session.
*/

let questionLimit;


if (
    mode === "exam" ||
    mode === "practice"
) {

    questionLimit = 40;

} else {

    questionLimit =
        selectedQuestions.length;

}


state.sessionQuestions =
createRandomizedQuestions(
    selectedQuestions,
    questionLimit
);


    /*
        Reset state.
    */

    resetState(
        state.sessionQuestions.length
    );


    /*
        resetState doesn't change mode,
        so mode remains intact.
    */


    clearFeedback();


    /*
        Show exam interface.
    */

    showExamScreen();


    /*
        Restore controls.
    */

    $("clear").hidden =
        false;


    $("mark").hidden =
        false;


    $("finish").hidden =
        false;


    /*
        Mode label.
    */

        
   if (mode === "learning") {

    $("modeLabel").textContent =
        "Learning Mode · Beginner · Concept Learning";


    $("practiceLegend").hidden =
        false;


} else if (mode === "practice") {

    $("modeLabel").textContent =
        "Practice Mode · Intermediate · Exam Preparation";


    $("practiceLegend").hidden =
        false;


} else if (mode === "exam") {

    $("modeLabel").textContent =
        "Exam Mode · Advanced · Full Exam Simulation";


    $("practiceLegend").hidden =
        true;

}

    /*
        Timer.
    */

    state.seconds =
        3600;


    updateTimerDisplay();


    startTimer();


    /*
        First question.
    */

    render();

}


/* ============================================================
   HISTORY SCREEN
   ============================================================ */

function renderHistory() {

    const history =
        getHistory();


    const list =
        $("historyList");


    const summary =
        $("historySummary");


    if (!list || !summary) {

        return;

    }


    if (!history.length) {

        summary.textContent =
            "Your last 10 Exam Mode attempts.";


        list.innerHTML = `

            <div class="history-empty">

                <div class="history-empty-icon">
                    ◷
                </div>

                <h3>
                    No test history yet
                </h3>

                <p>
                    Complete an Exam Mode test and
                    your result will appear here.
                </p>

            </div>

        `;


        return;

    }


    const scores =
        history.map(
            test =>
                Number(test.score) || 0
        );


    const best =
        Math.max(...scores);


    const average =
        Math.round(
            scores.reduce(
                (a, b) =>
                    a + b,
                0
            ) /
            scores.length
        );


    summary.textContent =
        `${history.length} exam${history.length !== 1 ? "s" : ""} · ` +
        `Best ${best}% · Average ${average}%`;


    list.innerHTML =
        history.map(
            (test, index) => {

                const resultClass =
                    test.passed
                        ? "history-pass"
                        : "history-fail";


                const resultText =
                    test.passed
                        ? "PASS"
                        : "NOT YET";


                return `

                    <div class="history-row">

                        <div class="history-number">
                            ${index + 1}
                        </div>

                        <div class="history-details">

                            <strong>
                                Exam Mode
                            </strong>

                            <small>
                                ${test.date || "Unknown date"}
                            </small>

                        </div>

                        <div class="history-score">

                            <strong>
                                ${test.score}%
                            </strong>

                            <small>
                                ${test.correct}/${test.total}
                            </small>

                        </div>

                        <div class="history-result ${resultClass}">
                            ${resultText}
                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* ============================================================
   GO HOME
   ============================================================ */

function goHome() {

    stopTimer();


    $("modal").hidden =
        true;


    clearFeedback();


    showHomeScreen();


    /*
        Reset state.
    */

    state.current =
        0;


    state.sessionQuestions =
        [];


    state.answers =
        [];


    state.marked =
        [];


    state.practiceResults =
        [];


    state.review =
        false;


    state.finished =
        false;


    state.mode =
        null;


    state.seconds =
        3600;


    /*
        Reset UI.
    */

    $("timer").textContent =
        "60:00";


    $("timer").style.color =
        "";


    $("clear").hidden =
        false;


    $("mark").hidden =
        false;


    $("finish").hidden =
        false;


    $("practiceLegend").hidden =
        true;

}


/* ============================================================
   EVENT LISTENERS
   ============================================================ */


/*
Practice Mode
*/

const practiceButton =
$("practiceMode");

if (practiceButton) {

    practiceButton.onclick = () => {

        startMode(
            "practice"
        );

    };

}


/*
Learning Mode
*/

const learningButton =
$("learningMode");


if (learningButton) {

    learningButton.onclick = () => {

        startMode(
            "learning"
        );

    };

}


/*
Exam Mode
*/

const examButton =
$("examMode");

if (examButton) {

    examButton.onclick = () => {

        startMode(
            "exam"
        );

    };

}

/*
    History
*/

const historyButton =
    $("historyMode");


if (historyButton) {

    historyButton.onclick = () => {

        $("modeScreen").hidden =
            true;


        $("historyScreen").hidden =
            false;


        renderHistory();

    };

}


/*
    History Home
*/

const historyHome =
    $("historyHome");


if (historyHome) {

    historyHome.onclick = () => {

        $("historyScreen").hidden =
            true;


        $("modeScreen").hidden =
            false;

    };

}


/*
    Reset History
*/

const historyReset =
    $("historyReset");


if (historyReset) {

    historyReset.onclick = () => {

        const history =
            getHistory();


        if (!history.length) {

            alert(
                "There is no test history to reset."
            );


            return;

        }


        const confirmed =
            confirm(
                "Are you sure you want to delete all saved test history?"
            );


        if (!confirmed) {

            return;

        }


        clearHistory();


        renderHistory();

    };

}


/*
    Previous
*/

const previousButton =
    $("prev");


if (previousButton) {

    previousButton.onclick =
        previousQuestion;

}


/*
    Next
*/

const nextButton =
    $("next");


if (nextButton) {

    nextButton.onclick =
        nextQuestion;

}


/*
    Clear
*/

const clearButton =
    $("clear");


if (clearButton) {

    clearButton.onclick =
        clearAnswer;

}


/*
    Mark
*/

const markButton =
    $("mark");


if (markButton) {

    markButton.onclick =
        toggleMark;

}


/*
    FINISH

    IMPORTANT:
    This directly opens the modal.

    It does NOT check whether all
    questions have been answered.
*/

const finishButton =
    $("finish");


if (finishButton) {

    finishButton.onclick =
        openFinishModal;

}


/*
    Cancel modal
*/

const cancelButton =
    $("cancel");


if (cancelButton) {

    cancelButton.onclick =
        cancelFinish;

}


/*
    Confirm modal
*/

const confirmButton =
    $("confirm");


if (confirmButton) {

    confirmButton.onclick = () => {

        finishExam(false);

    };

}


/*
    Review
*/

const reviewButton =
    $("review");


if (reviewButton) {

    reviewButton.onclick =
        startReview;

}


/*
    Restart
*/

const restartButton =
    $("restart");


if (restartButton) {

    restartButton.onclick =
        goHome;

}


/*
    Home
*/

const homeButton =
    $("homeBtn");


if (homeButton) {

    homeButton.onclick = () => {

        const leave =
            confirm(
                "Return to Home? Your current progress will be lost."
            );


        if (!leave) {

            return;

        }


        goHome();

    };

}


/* ============================================================
   INITIAL STATE
   ============================================================ */

$("modeScreen").hidden =
    false;


$("historyScreen").hidden =
    true;


$("top").hidden =
    true;


$("exam").hidden =
    true;


$("results").hidden =
    true;


$("modal").hidden =
    true;


renderHistory();