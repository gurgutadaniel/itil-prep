/* ============================================================
   NAVIGATION
   ============================================================ */

import {
    state,
    isPractice
} from "./state.js";

import {
    render,
    $
} from "./ui.js";

import {
    openFinishModal
} from "./exam.js";


/* ============================================================
   NEXT
   ============================================================ */

export function nextQuestion() {

    /*
        IMPORTANT:

        NEXT still requires an answer.

        This is different from FINISH.
    */

    if (
        state.answers[state.current] === null
    ) {

        alert(
            "Please select an answer before continuing."
        );


        return;

    }


    /*
        Next question.
    */

    if (
        state.current <
        state.sessionQuestions.length - 1
    ) {

        state.current++;

        render();

        return;

    }


    /*
        Last question.
    */

    openFinishModal();

}


/* ============================================================
   PREVIOUS
   ============================================================ */

export function previousQuestion() {

    if (
        state.current > 0
    ) {

        state.current--;

        render();

    }

}


/* ============================================================
   CLEAR ANSWER
   ============================================================ */

export function clearAnswer() {

    /*
        Review mode = locked.
    */

    if (state.review) {

        return;

    }


    /*
        Practice answered question
        cannot be cleared.
    */

    if (
        isPractice() &&
        state.practiceResults[state.current] !== null
    ) {

        return;

    }


    state.answers[state.current] =
        null;


    render();

}


/* ============================================================
   MARK FOR REVIEW
   ============================================================ */

export function toggleMark() {

    if (state.review) {

        return;

    }


    state.marked[state.current] =
        !state.marked[state.current];


    render();

}