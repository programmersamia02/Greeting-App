const greetButton=document.getElementById('greetButton');
const nameInput=document.getElementById('nameInput');
const greetingText=document.getElementById('greetingText');
greetButton.addEventListener('click',function(){
    const name=nameInput.value.trim();
    if (name){
        greetingText.textContent=`Hello, ${name}! Nice to meet you!☺️`;

    } else{
        greetingText.textContent="Please enter your name!";

    }

});