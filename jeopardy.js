const Request = require('./request');

let req = new Request();

function Jeopardy() {
    return {
        getTriviaQuestions,
        outputTrivia
    };
};

module.exports = Jeopardy;

async function getTriviaQuestions(count) {
    let options = {
        method: 'GET',
        url: `http://jservice.io/api/random?count=${count}`,
        headers: {
            'Accept': 'application/json'
        }
    };
    return await req.makeCall(options);
}

function outputTrivia(triviaList) {
    triviaList.forEach((question) => {
        console.log("Question: " + question.question);
        console.log("Answer: " + question.answer);
    });
}