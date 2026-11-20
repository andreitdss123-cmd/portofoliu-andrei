const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");
const btnRmv = document.querySelector(".btn-remove");
const inputTestEl = document.getElementById("input-test")

btnEl.addEventListener("click", () =>{
    createPassowrd();
});

btnRmv.addEventListener("click", ()=>{
    removePaste();
});

copyEl.addEventListener("click", () =>{
    copyPassword();
    if (inputEl.value){
    alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active");
    }, 2000)}
});

function createPassowrd() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertEl.innerText = "Password copied!";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}

function removePaste(){
    inputTestEl.value = "";
}