/* ============================================================
   TIMER
   ============================================================ */

import { state } from "./state.js";
import { finishExam } from "./exam.js";


/* ============================================================
   UPDATE TIMER DISPLAY
   ============================================================ */

export function updateTimerDisplay() {

    const timerElement =
        document.getElementById("timer");


    if (!timerElement) {

        return;

    }


    const minutes =
        Math.floor(
            state.seconds / 60
        );


    const seconds =
        state.seconds % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (state.seconds <= 300) {

        timerElement.style.color =
            "#b42318";

    } else {

        timerElement.style.color =
            "";

    }

}


/* ============================================================
   TIMER TICK
   ============================================================ */

export function tick() {

    if (state.finished) {

        return;

    }


    state.seconds =
        Math.max(
            0,
            state.seconds - 1
        );


    updateTimerDisplay();


    if (state.seconds === 0) {

        finishExam(true);

    }

}


/* ============================================================
   START TIMER
   ============================================================ */

export function startTimer() {

    stopTimer();


    state.timer =
        setInterval(
            tick,
            1000
        );


    updateTimerDisplay();

}


/* ============================================================
   STOP TIMER
   ============================================================ */

export function stopTimer() {

    if (state.timer) {

        clearInterval(
            state.timer
        );


        state.timer = null;

    }

}