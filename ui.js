
/* ============================================================
   UI
   ============================================================ */

import {
    state,
    isPractice,
    isExam
} from "./state.js";

import {
    showPracticeFeedback,
    showExamReviewFeedback
} from "./practice.js";


/* ============================================================
   HELPER
   ============================================================ */

export function $(id) {

    return document.getElementById(id);

}


/* ============================================================
   CLEAR FEEDBACK
   ============================================================ */

export function clearFeedback() {

    document
        .querySelectorAll(".review-note, .practice-toast")
        .forEach(
            element =>
                element.remove()
        );

}


/* ============================================================
   RENDER CURRENT QUESTION
   ============================================================ */

export function render() {

    const question =
        state.sessionQuestions[state.current];


    if (!question) {

        return;

    }


    clearFeedback();


    /* ========================================================
       QUESTION NUMBER
       ======================================================== */

    $("qnum").textContent =
        `Question ${state.current + 1}`;


    $("progress").textContent =
        `Question ${state.current + 1} of ${state.sessionQuestions.length}`;


    /* ========================================================
       SCENARIO
       ======================================================== */

    const scenario =
        $("scenario");


    if (scenario) {

        if (question.scenario) {

            scenario.hidden = false;

            scenario.textContent =
                question.scenario;

        } else {

            scenario.hidden = true;

            scenario.textContent = "";

        }

    }


    /* ========================================================
       QUESTION
       ======================================================== */

    $("question").textContent =
        question.q;


    renderOptions();


    /* ========================================================
       MARK
       ======================================================== */

    $("mark").textContent =
        state.marked[state.current]
            ? "★ Marked for review"
            : "☆ Mark for review";


    /* ========================================================
       PREVIOUS
       ======================================================== */

    $("prev").disabled =
        state.current === 0;


    /* ========================================================
       NEXT
       ======================================================== */

    if (
        state.current ===
        state.sessionQuestions.length - 1
    ) {

        $("next").textContent =
            "Finish →";

    } else {

        $("next").textContent =
            "Next →";

    }


    /* ========================================================
       NAVIGATOR
       ======================================================== */

    renderNavigator();


    /* ========================================================
       SUMMARY
       ======================================================== */

    summary();

}


/* ============================================================
   RENDER OPTIONS
   ============================================================ */

export function renderOptions() {

    const question =
        state.sessionQuestions[state.current];


    const box =
        $("options");


    box.innerHTML = "";


    question.options.forEach(
        (text, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option";


            /* =================================================
               SELECTED
               ================================================= */

            if (
                state.answers[state.current] ===
                index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            /* =================================================
               PRACTICE REVIEW
               ================================================= */

            if (
                isPractice() &&
                state.practiceResults[state.current] !== null
            ) {

                button.disabled = true;


                if (
                    index ===
                    question.answer
                ) {

                    button.classList.add(
                        "review-correct"
                    );

                }


                if (
                    state.answers[state.current] !== null &&
                    index === state.answers[state.current] &&
                    index !== question.answer
                ) {

                    button.classList.add(
                        "review-wrong"
                    );

                }

            }


            /* =================================================
               EXAM REVIEW
               ================================================= */

            if (
                isExam() &&
                state.review
            ) {

                button.disabled = true;


                if (
                    index ===
                    question.answer
                ) {

                    button.classList.add(
                        "review-correct"
                    );

                }


                if (
                    state.answers[state.current] !== null &&
                    index === state.answers[state.current] &&
                    index !== question.answer
                ) {

                    button.classList.add(
                        "review-wrong"
                    );

                }

            }


            /* =================================================
               BUTTON CONTENT
               ================================================= */

            button.innerHTML = `

                <span class="letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${text}
                </span>

            `;


            /* =================================================
               ANSWER HANDLER
               ================================================= */

            button.onclick = () => {

                import("./practice.js")
                    .then(
                        module =>
                            module.handleAnswer(index)
                    );

            };


            box.appendChild(
                button
            );

        }
    );


    /* =========================================================
       PRACTICE FEEDBACK
       ========================================================= */

    if (
        isPractice() &&
        state.practiceResults[state.current] !== null
    ) {

        showPracticeFeedback();

    }


    /* =========================================================
       EXAM REVIEW FEEDBACK
       ========================================================= */

    if (
        isExam() &&
        state.review
    ) {

        showExamReviewFeedback();

    }

}


/* ============================================================
   QUESTION NAVIGATOR
   ============================================================ */

export function renderNavigator() {

    const grid =
        $("grid");


    if (!grid) {

        return;

    }


    grid.innerHTML = "";


    /*
        Use sessionQuestions because the questions
        may have been randomized for this session.
    */

    state.sessionQuestions.forEach(
        (question, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "q";


            /* =================================================
               CURRENT
               ================================================= */

            if (
                index === state.current
            ) {

                button.classList.add(
                    "current"
                );

            }


            /* =================================================
               PRACTICE
               ================================================= */

            if (isPractice()) {

                if (
                    state.practiceResults[index] === true
                ) {

                    button.classList.add(
                        "practice-correct"
                    );

                }


                if (
                    state.practiceResults[index] === false
                ) {

                    button.classList.add(
                        "practice-wrong"
                    );

                }


                /*
                    Answered but not yet checked.
                */

                if (
                    state.answers[index] !== null &&
                    state.practiceResults[index] === null
                ) {

                    button.classList.add(
                        "answered"
                    );

                }

            }


            /* =================================================
               EXAM
               ================================================= */

            if (isExam()) {

                /*
                    During the exam, answered questions
                    are shown as answered.
                */

                if (!state.review) {

                    if (
                        state.answers[index] !== null
                    ) {

                        button.classList.add(
                            "answered"
                        );

                    }

                }


                /*
                    After exam completion / review mode.
                */

                if (state.review) {

                    if (
                        state.answers[index] !== null &&
                        state.answers[index] === question.answer
                    ) {

                        button.classList.add(
                            "practice-correct"
                        );

                    }


                    if (
                        state.answers[index] !== null &&
                        state.answers[index] !== question.answer
                    ) {

                        button.classList.add(
                            "practice-wrong"
                        );

                    }


                    if (
                        state.answers[index] === null
                    ) {

                        button.classList.add(
                            "unanswered"
                        );

                    }

                }

            }


            /* =================================================
               MARKED
               ================================================= */

            if (
                state.marked[index]
            ) {

                button.classList.add(
                    "marked"
                );

            }


            /* =================================================
               NUMBER
               ================================================= */

            button.textContent =
                index + 1;


            /* =================================================
               NAVIGATION
               ================================================= */

            button.onclick = () => {

                state.current =
                    index;

                render();

            };


            grid.appendChild(
                button
            );

        }
    );

}


/* ============================================================
   SUMMARY
   ============================================================ */

export function summary() {

    const total =
        state.sessionQuestions.length;


    const answered =
        state.answers.filter(
            answer =>
                answer !== null
        ).length;


    const marked =
        state.marked.filter(
            value =>
                value === true
        ).length;


    const remaining =
        total - answered;


    const correct =
        state.practiceResults.filter(
            result =>
                result === true
        ).length;


    /* ========================================================
       ANSWERED
    ======================================================== */

    const answeredElement =
        $("answered");


    if (answeredElement) {

        answeredElement.textContent =
            answered;

    }


    /* ========================================================
       MARKED
    ======================================================== */

    const markedElement =
        $("marked");


    if (markedElement) {

        markedElement.textContent =
            marked;

    }


    /* ========================================================
       REMAINING
    ======================================================== */

    const remainingElement =
        $("remaining");


    if (remainingElement) {

        remainingElement.textContent =
            remaining;

    }


    /* ========================================================
       CORRECT
    ======================================================== */

    const correctElement =
        $("correctCount");


    if (correctElement) {

        if (isExam()) {

            correctElement.textContent =
                "-";

        } else {

            correctElement.textContent =
                correct;

        }

    }

}
/* ============================================================
   SHOW APPLICATION
   ============================================================ */

export function showExamScreen() {

    $("modeScreen").hidden = true;

    $("historyScreen").hidden = true;

    $("top").hidden = false;

    $("exam").hidden = false;

    $("results").hidden = true;

}


/* ============================================================
   SHOW HOME
   ============================================================ */

export function showHomeScreen() {

    $("modeScreen").hidden = false;

    $("historyScreen").hidden = true;

    $("top").hidden = true;

    $("exam").hidden = true;

    $("results").hidden = true;

}


/* ============================================================
   SHOW RESULTS
   ============================================================ */

export function showResultsScreen() {

    $("modeScreen").hidden = true;

    $("historyScreen").hidden = true;

    $("top").hidden = false;

    $("exam").hidden = true;

    $("results").hidden = false;

    
}

