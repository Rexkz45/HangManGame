// variables
const keyboard=document.querySelector(".keyboard");
const hintDisplay=document.querySelector(".hintDisplay b");
const wordDisplay=document.querySelector(".wordDisplay");
let currentWord;
const randomWord=()=>{
const {word ,hint}=wordList[Math.floor(Math.random()*50)];
currentWord=word;
console.log(word);
hintDisplay.innerHTML=hint;
wordDisplay.innerHTML=word.split("").map(()=>
  '<li class="letter"></li>'
).join("");
// console.log(word.split(""));
//  css c ,s,s

}
const initGame=(button,pressedLetter)=>{
// console.log(button);
// console.log(pressedLetter);
if(currentWord.includes(pressedLetter)){
  console.log("word hai");
}
else{
  console.log("word nhi match hua ");
}
}

for(let i=97;i<=122;i++){
const button=document.createElement("button");
button.innerHTML=String.fromCharCode(i);
keyboard.appendChild(button);
button.addEventListener("click",e => initGame(e.target,String.fromCharCode(i)))
}

randomWord();