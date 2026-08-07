/* ============================================================
   RANDOMIZER
   ============================================================ */


/*
    Fisher-Yates shuffle.

    IMPORTANT:
    Does NOT modify original array.
*/

export function shuffle(array) {

    const result = [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];

    }


    return result;

}


/* ============================================================
   CREATE RANDOMIZED QUESTIONS
   ============================================================ */

export function createRandomizedQuestions(
    questions,
    limit = questions.length
) {

    const shuffledQuestions =
        shuffle(questions)
            .slice(0, limit);

    return shuffledQuestions.map(
        question => {

            const options =
                question.options.map(
                    (text, index) => ({

                        text,

                        originalIndex: index

                    })
                );


            const shuffledOptions =
                shuffle(options);


            /*
                Find where the original
                correct answer moved.
            */

            const newAnswer =
                shuffledOptions.findIndex(
                    option =>
                        option.originalIndex ===
                        question.answer
                );


            return {

                ...question,

                options:
                    shuffledOptions.map(
                        option =>
                            option.text
                    ),

                answer:
                    newAnswer

            };

        }
    );

}