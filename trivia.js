const Request = require('./request');

let req = new Request();

function Trivia() {
    return {
        getTriviaQuestions,
        outputTrivia,
        category
    };
};

module.exports = Trivia;

const category = {
    general: 9,
    books: 10,
    film: 11,
    music: 12,
    musicals: 13,
    television: 14,
    video_games: 15,
    board_games: 16,
    science_nature: 17,
    science_computers: 18,
    science_mathmatics: 19,
    mythology: 20,
    sports: 21,
    geography: 22,
    history: 23,
    politics: 24,
    art: 25,
    celebrities: 26,
    animals: 27,
    vehicles: 28,
    comics: 29,
    science_gadgets: 30,
    anime: 31,
    cartoons: 32
};

async function getTriviaQuestions(category) {
    console.log(category);

    let options = {
        method: 'GET',
        url: `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=medium`,
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    };

    return await req.makeCall(options);
}

function outputTrivia(triviaList) {
    triviaList.forEach((item, index) => {
        let quest1 = item.question.replace(/&quot;/g, "\'");
        let quest = quest1.replace(/&#039;/g, "\'")
        console.log((index + 1) + ". Question: " + quest);
        console.log("Wrong answers: ");
        console.log(item.incorrect_answers);
        console.log("Correct answer: " + item.correct_answer);
    })
}