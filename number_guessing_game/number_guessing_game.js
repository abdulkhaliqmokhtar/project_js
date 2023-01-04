const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("What is your name?");
console.log(`Hey there ${name}`);

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input

function guessNumber() {
  let foundCorrectNumber = false;

  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)

    const guess = parseInt(
      prompt(
        "I have a number in my mind. It's between 0 to 100, can you guess it?"
      )
    );

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).

    if (guess > numberInMind) {
      console.log("Your guess is too high, please try again.");
    } else if (guess < numberInMind) {
      console.log("Your guess is too low, please try again.");
    } else if (guess == numberInMind) {
      foundCorrectNumber = true;
      console.log("You guessed the correct number!");
    }
  }

  continuePlaying();
}

// Step 3: prompt user and provide option for user to start a new game after winning

function continuePlaying() {
  let keepPlaying = false;

  while (!keepPlaying) {
    const wantToPlay = prompt("Do you want to play again?");

    if (wantToPlay == "y" || wantToPlay == "Y") {
      return guessNumber();
    } else if (wantToPlay == "n" || wantToPlay == "N") {
      keepPlaying = true;
    }
  }
}

// call the guessNumber() function
guessNumber();
