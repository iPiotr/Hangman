let app;
const letterElement = document.querySelector('#letterElement');
const chances = document.querySelector('#chances');

window.addEventListener('keypress', (e) => {

    const guess = String.fromCharCode(e.charCode);
    app.makeGuess(guess);
    generate();
})

const generate = () => {
    letterElement.innerHTML = ''
    chances.textContent = app.statusMessage;

    app.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        letterElement.appendChild(letterEl);
    })
}

const start = async () => {
    const puzzle = await getPuzzle('3');
    app = new Hangman(puzzle, 5);
    generate();
}

document.querySelector('#reset').addEventListener('click', start);
start();