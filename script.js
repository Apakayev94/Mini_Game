function checkNumber() {
    if (counter == 0) {
        timer = setInterval(() => {console.log(id); id++;}, 1000);
    }
    
    let inputStr = String(input.value).trim();
    input.value = ""; 

    if (inputStr.length == 0) {
        message3.textContent = "ERROR: Empty string!";
        return;
    }

    let inputNum = Number(inputStr);
    if  (isNaN(inputNum)) {
        message3.textContent = "ERROR: It is not a number!";
        return;
    }

    if (inputNum < 0) { 
        message3.textContent = "ERROR: Number less than 0!";
        return;
    }

    if  (inputNum > 100) { 
        message3.textContent = "ERROR: Number over 100!";
        return; 
    }

    counter++;

    if (inputNum < randomValue) { 
        message3.textContent = `My number is more than ${inputNum}`;
        return;  
    }

    if (inputNum > randomValue) { 
        message3.textContent = `My number is less than ${inputNum}`; 
        return; 
    }

    if (inputNum == randomValue) { 
        clearInterval(timer); 
        message3.textContent = `You guessed! My number is ${inputNum}. You guessed right on the ${counter} try in ${id} seconds.`; 
        return; 
    }
}

let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let message3 = document.querySelector("#message3");

randomValue = Math.floor(Math.random() * 101);
message1.textContent = "I thought of a random value from 0 to 100!";
message2.textContent = "Enter any number from 1 to 100 :";

let counter = 0;
let timer;
let id = 0;

document.body.addEventListener("keydown", (e) => { if (e.key == "Enter") { checkNumber(); } });
button.addEventListener("click", checkNumber); 