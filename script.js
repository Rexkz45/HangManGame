// variables 

const keyboard = document.querySelector(".keyboard");
const hintDisplay = document.querySelector(".hintDisplay b");
const guessDisplay = document.querySelector(".guessDisplay b");
const wordDisplay = document.querySelector(".wordDisplay");
const hangPic = document.querySelector(".hangPic");
const gameModal = document.querySelector(".gameModal");
const playAgain = document.querySelector(".playAgain");
let currentWord,
  wrongGuess = 0,
  correctWord = [];
const maxGuess = 6;

// reset the game the start from the beginning
const resetGame=()=>{
  wrongGuess = 0,
  correctWord = [];
  keyboard.querySelectorAll("button").forEach((button) => (button.disabled = false));
   guessDisplay.innerHTML = `${wrongGuess}/${maxGuess}`;
   
    hangPic.src = `assets/hangman-${wrongGuess}.svg`;
     gameModal.classList.remove("mShow");
}
// function to show the game over modal with the appropriate message and image

const gameOver = (isVictory) => {
  setTimeout(() => {
    if (isVictory) {
      document.querySelector(".gameModal img").src = "assets/victory.gif";
      document.querySelector(".gameModal h2").innerHTML = "You Win The Game";
    } else {
      document.querySelector(".gameModal img").src = "assets/lost.gif";
      document.querySelector(".gameModal h2").innerHTML = "You Lost The Game";
    }
    gameModal.classList.add("mShow");
  }, 800);
};

// function to select a random word from the list and 
// display the hint and the blank spaces for the word

const randomWord = () => {
  const { hint, word } = wordList[Math.floor(Math.random() * wordList.length)];
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join(" ");
  hintDisplay.innerHTML = hint;
  resetGame();
  console.log(word);
  currentWord = word;
};
// function to handle the game logic when
//  a letter button is pressed
const initGame = (button, pressedLetter) => {
  if (currentWord.includes(pressedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === pressedLetter) {
        correctWord.push(letter);
        console.log(correctWord);
        wordDisplay.querySelectorAll("li")[index].innerHTML = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("show");
      }
    });
  } else {
    wrongGuess++;
    hangPic.src = `assets/hangman-${wrongGuess}.svg`;
  }
  guessDisplay.innerHTML = `${wrongGuess}/${maxGuess}`;
  button.disabled = true;
  if (wrongGuess === maxGuess) {
    gameOver(false);
  }
  if (currentWord.length === correctWord.length) {
    gameOver(true);
  }
};

// create buttons for each letter of
//  the alphabet and add event listeners to them

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i)),
  );
}
randomWord();
playAgain.addEventListener("click",randomWord);
