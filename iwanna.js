const Trivia = require('./trivia');
const Joke = require('./jokes');
const DadJoke = require('./dadjoke');
const Jeopardy = require('./jeopardy');

argv = process.argv.slice(2)

switch (argv[0]) {
    case 'trivia':
        trivia = new Trivia();
        trivia.getTriviaQuestions(trivia.category.comics)
            .then((triviaList) => {
                trivia.outputTrivia(triviaList.results);
            });
        break;
    case 'joke':
        joke = new Joke();
        joke.getJoke()
            .then((theJoke) => {
                joke.outputJoke(theJoke);
            });
        break;
    case 'dadjoke':
        dadjoke = new DadJoke();
        dadjoke.getJoke()
            .then((theJoke) => {
                dadjoke.outputJoke(theJoke);
            });
        break;
    case 'jeopardy':
        jeopardy = new Jeopardy();
        jeopardy.getTriviaQuestions(10)
            .then((questions) => {
                jeopardy.outputTrivia(questions);
            });
        break;
    default:
        dadjoke = new DadJoke();
        dadjoke.getJoke()
            .then((theJoke) => {
                dadjoke.outputJoke(theJoke);
            });
        break;
}