const Request = require("./request");

let req = new Request();

function Joke() {
  return {
    getJoke,
    outputJoke
  };
}

https: module.exports = Joke;

async function getJoke() {
  let options = {
    method: "GET",
    url: "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke",
    headers: {
      "Postman-Token": "f0a15b33-0bb4-4848-941b-f9d26a8fb4e4",
      "Cache-Control": "no-cache"
    }
  };

  return await req.makeCall(options);
}

function outputJoke(joke) {
  console.log(joke.setup);
  console.log(joke.punchline);
}