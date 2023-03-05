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
const pInput1 = document.querySelector("#pInput1")
const pInput2 = document.querySelector("#pInput2")
const pInput3 = document.querySelector("#pInput3")
const pInput4 = document.querySelector("#pInput4")
const pInput5 = document.querySelector("#pInput5")

function inputValidation(input, reg, p, msg) {
    input.addEventListener('input', function() {
        const regex = reg;
        if (!regex.test(input.value)) {
          p.textContent = msg;
        } else {
          p.textContent = '';
        }
      });
}

inputValidation(inputName, /^\S+(?:\s+\S+)+$/, pInput1, "Veuillez entrer votre prénom et votre nom")

inputValidation(inputNumber, /^\d{4}(?:\s\d{4}){3}$/, pInput2, "Veuillez entre 16 chiffres et mettre un espace tout les 4 chiffres")

inputValidation(inputDate, /^(0?[1-9]|1[0-2])$/, pInput3, "Veuillez entrer un mois valide")

inputValidation(inputDate2, /^(?:[2-9][3-9]|[3-9]\d)$/, pInput4, "Veuillez entrer une année valide")

inputValidation(inputCvc, /^\d{3}$/, pInput5, "Veuillez entrer 3 chiffres")

// input.addEventListener('input', function() {
//     const regex = /^(0?[1-9]|1[0-2])$/;
//     if (!regex.test(input.value)) {
//       messageErreur.textContent = 'Le nombre doit être entre 01 et 12';
//     } else {
//       messageErreur.textContent = '';
//     }
//   });

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
