const Request = require('./request');

let req = new Request();

function Dadjoke() {
    return {
        getJoke,
        outputJoke
    };
};

module.exports = Dadjoke;

async function getJoke() {
    let options = {
        method: 'GET',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'
        }
    };

    return await req.makeCall(options);
}

function outputJoke(joke) {
    console.log(joke.joke);
}