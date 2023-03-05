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

// fonction qui permet d'ecrire sur la card en ecrivant sur l'input
function addInfos(input, info) {
  input.addEventListener("input", () => {
    info.textContent = input.value;
  });
}

addInfos(inputName, cardOwner);
addInfos(inputNumber, cardNumberOwner);
addInfos(inputDate, monthExpiration);
addInfos(inputDate2, yearExpiration);
addInfos(inputCvc, cardCvc);

// ----------------------------------------------------------
// Validation de formulaire ---------------------------------

// Confirm formulaire - succes apparait ---------------------

const form = document.querySelector("form");
const succes = document.querySelector(".succes");
const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", (e) => {
//     if (button.getAttribute("id") == "formButton") {
//       e.preventDefault(); // annule le comportement par defaut
//       form.style.display = "none";
//       succes.style.display = "flex";
//     } else {
//       window.location.reload();
//     }
//   });
// }
