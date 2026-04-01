const keyboard=document.querySelector(".keyboard");
for(let i=97;i<=122;i++){
    const button=document.createElement("button");
    button.innerHTML=String.fromCharCode(i);
    keyboard.appendChild(button);
}