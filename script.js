const keyboard = document.querySelector(".keyboard");
const hintDisplay = document.querySelector(".hintDisplay b");
const wordDisplay = document.querySelector(".wordDisplay ");
const guessDisplay = document.querySelector(".guessDisplay  b");
const hangPic = document.querySelector(".hangPic");

let curentWord , wrongGuess=0;
const maxGuess=6;
const randomWord = () => {
  const { hint, word } = wordList[Math.floor(Math.random() * 50)];
  curentWord = word;
  hintDisplay.innerHTML = hint;
  console.log(word);
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
};
const initGame = (button, pressedLetter) => {
  // console.log(button)
  // console.log(pressedLetter)
  if (curentWord.includes(pressedLetter)) {
    [...curentWord].forEach((letter,index)=>{
     if(letter===pressedLetter){
      wordDisplay.querySelectorAll("li")[index].innerHTML=letter;
      wordDisplay.querySelectorAll("li")[index].classList.add("show");
     }
    })
  } else {
    wrongGuess++;
     hangPic.src=`assets/hangman-${wrongGuess}.svg`; 

  }
  guessDisplay.innerHTML=`${wrongGuess}/${maxGuess}`;
  button.disabled=true;
};
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i)),
  );
}
randomWord();
