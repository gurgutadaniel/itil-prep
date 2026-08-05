/* ============================================================
   EXAM MODE
   ============================================================ */

import {
    state
} from "./state.js";

import {
    stopTimer
} from "./timer.js";

import {
    render,
    showResultsScreen,
    $
} from "./ui.js";

import {
    saveExamResult,
    displayResults
} from "./results.js";


/* ============================================================
   OPEN FINISH MODAL
   ============================================================ */

export function openFinishModal() {

    const unanswered =
        state.answers.filter(
            answer =>
                answer === null
        ).length;


    const answered =
        state.answers.length -
        unanswered;


    /*
        Optional text inside modal.
    */

    const message =
        $("finishMessage");


    if (message) {

        if (unanswered > 0) {

            message.textContent =
                `You have answered ${answered} of ` +
                `${state.sessionQuestions.length} questions. ` +
                `${unanswered} question${unanswered !== 1 ? "s" : ""} ` +
                `will be counted as incorrect.`;

        } else {

            message.textContent =
                "You have answered all questions. Are you ready to finish?";

        }

    }


    $("modal").hidden =
        false;

}


/* ============================================================
   CANCEL FINISH
   ============================================================ */

export function cancelFinish() {

    $("modal").hidden =
        true;

}


/* ============================================================
   FINISH EXAM
   ============================================================ */

export function finishExam(fromTimer = false) {

    /*
        Prevent finishing twice.
    */

    if (state.finished) {

        return;

    }


    /*
        IMPORTANT:

        NO CHECK HERE FOR unanswered questions.

        Finish works even if:

        1 answered
        10 unanswered

        or:

        0 answered
        all unanswered
    */


    state.finished =
        true;


    state.review =
        false;


    /*
        Stop timer.
    */

    stopTimer();


    /*
        Close modal.
    */

    $("modal").hidden =
        true;


/*
    Calculate and display the result.

    Exam Mode:
    - calculate result
    - save result to History

    Practice Mode:
    - calculate result
    - do NOT save to History
*/

if (
    state.mode === "exam"
) {

    saveExamResult();

} else {

    displayResults();

}


/*
    Show results screen.
*/

showResultsScreen();

    /*
        Optional timer message.
    */

    const resultMessage =
        $("resultMessage");


    if (
        resultMessage &&
        fromTimer
    ) {

        resultMessage.textContent =
            "Time expired. Unanswered questions were counted as incorrect.";

    }

}


/* ============================================================
   REVIEW ANSWERS
   ============================================================ */

export function startReview() {

    state.review =
        true;


    $("results").hidden =
        true;


    $("exam").hidden =
        false;


    $("top").hidden =
        false;


    /*
        Lock controls.
    */

    $("clear").hidden =
        true;


    $("mark").hidden =
        true;


    $("finish").hidden =
        true;


    /*
        Go to first question.
    */

    state.current =
        0;


    render();

}