/* ============================================================
   TEST HISTORY
   ============================================================ */

const HISTORY_KEY =
    "itil5_test_history";

const MAX_HISTORY = 10;


/* ============================================================
   GET HISTORY
   ============================================================ */

export function getHistory() {

    try {

        const saved =
            localStorage.getItem(
                HISTORY_KEY
            );


        if (!saved) {

            return [];

        }


        const parsed =
            JSON.parse(saved);


        return Array.isArray(parsed)
            ? parsed
            : [];


    } catch (error) {

        console.error(
            "Could not read test history:",
            error
        );


        return [];

    }

}


/* ============================================================
   SAVE RESULT
   ============================================================ */

export function saveTestResult(result) {

    let history =
        getHistory();


    history.unshift(result);


    history =
        history.slice(
            0,
            MAX_HISTORY
        );


    try {

        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );


    } catch (error) {

        console.error(
            "Could not save test history:",
            error
        );

    }

}


/* ============================================================
   CLEAR HISTORY
   ============================================================ */

export function clearHistory() {

    localStorage.removeItem(
        HISTORY_KEY
    );

}