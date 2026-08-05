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
   CALCULATE RESULT
   ============================================================ */

export function calculateResult() {

    let correct = 0;
    let unanswered = 0;

    state.sessionQuestions.forEach(
        (question, index) => {

            const answer =
                state.answers[index];

            /*
                No answer.
            */

            if (answer === null || answer === undefined) {

                unanswered++;

                return;

            }

            /*
                Correct answer.
            */

            if (
                answer === question.answer
            ) {

                correct++;

            }

        }
    );


    const total =
        state.sessionQuestions.length;


    /*
        Everything that is not correct
        is incorrect.

        This includes unanswered questions.
    */

    const incorrect =
        total -
        correct;


    /*
        Keep one decimal place.

        Example:
        1 / 40 = 2.5%
    */

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


    const PASSING_SCORE =
        65;


    const passed =
        result.score >= PASSING_SCORE;


    /*
        ========================================================
        SCORE
        ========================================================
    */

    const percentageElement =
        $("pct");


    if (percentageElement) {

        percentageElement.textContent =
            `${result.score}%`;

    }


    /*
        ========================================================
        FRACTION
        ========================================================
    */

    const fractionElement =
        $("frac");


    if (fractionElement) {

        fractionElement.textContent =
            `${result.correct} / ${result.total}`;

    }


    /*
        ========================================================
        CORRECT
        ========================================================
    */

    const correctElement =
        $("correct");


    if (correctElement) {

        correctElement.textContent =
            result.correct;

    }


    /*
        ========================================================
        INCORRECT
        ========================================================
    */

    const incorrectElement =
        $("incorrect");


    if (incorrectElement) {

        incorrectElement.textContent =
            result.incorrect;

    }


    /*
        ========================================================
        UNANSWERED
        ========================================================
    */

    const unansweredElement =
        $("unanswered");


    if (unansweredElement) {

        unansweredElement.textContent =
            result.unanswered;

    }


    /*
        ========================================================
        STATUS
        ========================================================
    */

    const statusElement =
        $("status");


    if (statusElement) {

        statusElement.textContent =
            passed
                ? "PASS"
                : "NOT YET";

    }


    /*
        ========================================================
        SCORE RING
        ========================================================
    */

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