/* ============================================================
   PRACTICE MODE
   ============================================================ */

import {
    state,
    isPractice
} from "./state.js";

import {
    render,
    clearFeedback,
    summary,
    $
} from "./ui.js";


/* ============================================================
   HANDLE ANSWER
   ============================================================ */

export function handleAnswer(index) {

    /*
        Review = locked
    */

    if (state.review) {

        return;

    }


    /* ========================================================
       PRACTICE MODE
       ======================================================== */

    if (isPractice()) {

        /*
            Already answered.
        */

        if (
            state.practiceResults[state.current] !== null
        ) {

            return;

        }


        /*
            Save answer.
        */

        state.answers[state.current] =
            index;


        /*
            Check immediately.
        */

        state.practiceResults[state.current] =
            index ===
            state.sessionQuestions[state.current].answer;


        /*
            Re-render everything:
            - answer state
            - navigator
            - feedback
        */

        render();


        /*
            Update:
            - Answered
            - Unanswered
        */

        summary();


        return;

    }


    /* ========================================================
       EXAM MODE
       ======================================================== */

    state.answers[state.current] =
        index;


    /*
        Re-render navigator immediately.
    */

    render();


    /*
        Update Answered / Unanswered immediately.
    */

    summary();

}


/* ============================================================
   PRACTICE FEEDBACK
   ============================================================ */

export function showPracticeFeedback() {

    clearFeedback();


    const question =
        state.sessionQuestions[state.current];


    const selected =
        state.answers[state.current];


    const correct =
        state.practiceResults[state.current];


    const note =
        document.createElement(
            "div"
        );


    note.className =
        "review-note " +
        (
            correct
                ? "practice-correct-note"
                : "practice-wrong-note"
        );


    note.innerHTML = `

        <div class="feedback-title">

            ${
                correct
                    ? "✓ Correct"
                    : "✗ Incorrect"
            }

        </div>

        <div>

            <b>Your answer:</b>

            ${
                selected === null
                    ? "Not answered"
                    : String.fromCharCode(
                        65 + selected
                    )
            }

        </div>

        <div>

            <b>Correct answer:</b>

            ${String.fromCharCode(
                65 + question.answer
            )}

        </div>

        <div class="explanation">

            <b>Explanation:</b>

            ${question.explanation || ""}

        </div>

    `;


    $("options").after(
        note
    );

}


/* ============================================================
   EXAM REVIEW FEEDBACK
   ============================================================ */

export function showExamReviewFeedback() {

    clearFeedback();


    const question =
        state.sessionQuestions[state.current];


    const selected =
        state.answers[state.current];


    const correct =
        selected !== null &&
        selected === question.answer;


    const note =
        document.createElement(
            "div"
        );


    note.className =
        "review-note " +
        (
            correct
                ? "practice-correct-note"
                : "practice-wrong-note"
        );


    note.innerHTML = `

        <div class="feedback-title">

            ${
                correct
                    ? "✓ Correct"
                    : "✗ Incorrect"
            }

        </div>

        <div>

            <b>Your answer:</b>

            ${
                selected === null
                    ? "Not answered"
                    : String.fromCharCode(
                        65 + selected
                    )
            }

        </div>

        <div>

            <b>Correct answer:</b>

            ${String.fromCharCode(
                65 + question.answer
            )}

        </div>

        <div class="explanation">

            <b>Explanation:</b>

            ${question.explanation || ""}

        </div>

    `;


    $("options").after(
        note
    );

}
