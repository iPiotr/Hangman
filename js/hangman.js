class Hangman {
    constructor(word, chances) {
        this.word = word.toLowerCase().split('');
        this.chances = chances;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    //printing the word hidden under *
    get puzzle() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        })
        return puzzle;
    }

    checkStatus() {
        const win = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.chances === 0) {
            this.status = 'fail';
        } else if (win) {
            this.status = 'win';
        } else {
            this.status = 'playing';
        }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase();
        const good = !this.guessedLetters.includes(guess);
        const bad = !this.word.includes(guess);

        if (this.status !== 'playing') {
            return
        }

        if (good) {
            this.guessedLetters.push(guess);
        }

        if (good && bad) {
            this.chances--;
        }
        this.checkStatus();
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Chances left: ${this.chances}`;
        } else if (this.status === 'fail') {
            return `Don't worry. The word was: "${this.word.join('')}" `;
        } else {
            return 'Nice! You guessed the word!';
        }
    }
}