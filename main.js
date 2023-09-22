const typedTextSpan = document.querySelector(".typed-text");
let textArray = ["Coder.","Programmer." , "Web Developer.","Creator." , "Designer." ];
// let textArray = ["Programmer." , "Web Developer." ];
const typingDelay = 100;
const eraseDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase,newTextDelay);
    }
}

function erase(){
    if(charIndex >0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,eraseDelay);
    }
    else{
        textArrayIndex = (textArrayIndex+1)%textArray.length;
        setTimeout(type,newTextDelay-500);
    }
}

type();