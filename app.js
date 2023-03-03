const inputName = document.querySelector("#name");
const cardOwner = document.querySelector("#cardOwner");

const inputNumber = document.querySelector("#cardNumber");
const cardNumberOwner = document.querySelector("#cardNumberOwner");

const inputDate = document.querySelector("#date");
const monthExpiration = document.querySelector("#monthExpiration");
const inputDate2 = document.querySelector("#date2");
const yearExpiration = document.querySelector("#yearExpiration");


const inputCvc = document.querySelector("#cvc");
const cardCvc = document.querySelector("#cardCvc");

function addInfos(input, info) {
    input.addEventListener("input", () => {
        info.textContent = input.value;
    })
}

addInfos(inputName, cardOwner);
addInfos(inputDate, monthExpiration);
addInfos(inputDate2, yearExpiration);
addInfos(inputCvc, cardCvc);

    