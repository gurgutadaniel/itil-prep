/* ============================================================
   STATE
   ============================================================ */

export const state = {

    mode: null,

    current: 0,

    answers: [],

    marked: [],

    practiceResults: [],

    sessionQuestions: [],

    seconds: 3600,

    finished: false,

    review: false,

    timer: null

};


/* ============================================================
   RESET TEST STATE
   ============================================================ */

export function resetState(questionsLength) {

    state.current = 0;

    state.answers =
        Array(questionsLength).fill(null);

    state.marked =
        Array(questionsLength).fill(false);

    state.practiceResults =
        Array(questionsLength).fill(null);

    state.seconds = 3600;

    state.finished = false;

    state.review = false;

}


/* ============================================================
   HELPERS
   ============================================================ */

export function isPractice() {

    return state.mode === "practice";

}


export function isExam() {

    return state.mode === "exam";

}