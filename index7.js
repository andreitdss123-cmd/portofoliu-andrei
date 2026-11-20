const buttonsEl = document.querySelectorAll("button");
const inputFEl = document.getElementById("result");


for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = (buttonsEl[i].textContent);
        if (buttonValue === "C"){
            clearResult();
        } else if (buttonValue === "="){
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFEl.value = "";
}

function calculateResult(){
    inputFEl.value = eval(inputFEl.value);
}

function appendValue(buttonValue){
    inputFEl.value += buttonValue;
}