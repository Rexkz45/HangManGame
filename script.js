// creating buttons using js 
const keyboard=document.querySelector(".keyboard");
const hintDisplay=document.querySelector(".hintDisplay b")
const randomWord=()=>{
const {hint,word}=wordList[Math.floor(Math.random()*wordList.length)];
// console.log(hint);
console.log(word);
hintDisplay.innerHTML=hint;

}
// Map
// split 
// join


for(let i=97;i<=122;i++){
    // console.log(String.fromCharCode(i));
    const button=document.createElement("button");
    button.innerHTML=String.fromCharCode(i);
    // console.log(button)
    keyboard.appendChild(button);
}


randomWord();