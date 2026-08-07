/* ============================================================
RESULTS
============================================================ */

import {
state
} from "./state.js";

import {
saveTestResult
} from "./history.js";

import {
$
} from "./ui.js";


/* ============================================================
PASS MARK
============================================================ */

const PASSING_SCORE = 65;


/* ============================================================
CALCULATE RESULT
============================================================ */

export function calculateResult() {

    let correct = 0;
    let unanswered = 0;


    state.sessionQuestions.forEach(
        (question, index) => {

            const answer =
                state.answers[index];


            if (
                answer === null ||
                answer === undefined
            ) {

                unanswered++;

                return;

            }


            if (
                answer === question.answer
            ) {

                correct++;

            }

        }
    );


    const total =
        state.sessionQuestions.length;


    const incorrect =
        total - correct;


    const score =
        total > 0
            ? Math.round(
                ((correct / total) * 100) * 10
            ) / 10
            : 0;


    return {

        correct,
        incorrect,
        unanswered,
        total,
        score

    };

}


/* ============================================================
DISPLAY RESULTS
============================================================ */

export function displayResults() {

    const result =
        calculateResult();


    const passed =
        result.score >= PASSING_SCORE;



    /* ========================================================
       SCORE
       ======================================================== */

    const percentageElement =
        $("pct");


    if (percentageElement) {

        percentageElement.textContent =
            `${result.score}%`;

    }



    /* ========================================================
       FRACTION
       ======================================================== */

    const fractionElement =
        $("frac");


    if (fractionElement) {

        fractionElement.textContent =
            `${result.correct} / ${result.total}`;

    }



    /* ========================================================
       CORRECT
       ======================================================== */

    const correctElement =
        $("correct");


    if (correctElement) {

        correctElement.textContent =
            result.correct;

    }



    /* ========================================================
       INCORRECT
       ======================================================== */

    const incorrectElement =
        $("incorrect");


    if (incorrectElement) {

        incorrectElement.textContent =
            result.incorrect;

    }



    /* ========================================================
       UNANSWERED
       ======================================================== */

    const unansweredElement =
        $("unanswered");


    if (unansweredElement) {

        unansweredElement.textContent =
            result.unanswered;

    }



    /* ========================================================
       PASS MARK DISPLAY
       ======================================================== */

    const passMarkElement =
        $("passMark");


    if (passMarkElement) {

        passMarkElement.textContent =
            `${PASSING_SCORE}%`;

    }



    /* ========================================================
       STATUS
       ======================================================== */

    const statusElement =
        $("status");


    if (statusElement) {

        statusElement.textContent =
            passed
                ? "PASS"
                : "NOT YET";

    }



    /* ========================================================
       SCORE RING
       ======================================================== */

    const ring =
        $("ring");


    if (ring) {

        ring.classList.toggle(
            "passed",
            passed
        );


        ring.classList.toggle(
            "failed",
            !passed
        );

    }


    return {

        ...result,

        passed

    };

}


/* ============================================================
SAVE EXAM RESULT
============================================================ */

export function saveExamResult() {

    const result =
        displayResults();


    saveTestResult({

        date:
            new Date().toLocaleString(),


        score:
            result.score,


        correct:
            result.correct,


        total:
            result.total,


        passed:
            result.passed

    });


    return result;

}