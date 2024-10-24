import { isFibonacci } from './modules/fibonacci.js';
import { countLetterOccurrences } from './modules/letterCounter.js';
import { notify } from './modules/notifier.js';

let sendQ1 = document.querySelector("#send-q1");
sendQ1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("sdfsdf")
    let notification = document.createElement("p");
    let divNotification = document.querySelector(".notification-q1");
    divNotification.innerHTML = "";

    let numberQ1 = Number(document.querySelector("#input-number-q1").value);
    if (isNaN(numberQ1)) {
        notify(divNotification, notification, "INVALID", "Valor invalido");
        return;
    }
    if (!isFibonacci(numberQ1)) {
        notify(divNotification, notification, "DANGER", "Não é Fibonacci");
        return;
    }

    notify(divNotification, notification, "SUCCESS", "Esse número pertence a sequência de fibonacci");
});

let sendQ2 = document.querySelector("#send-q2");
sendQ2.addEventListener("click", (e) => {
    e.preventDefault();
    let notification = document.createElement("p");
    let divNotification = document.querySelector(".notification-q2");
    divNotification.innerHTML = "";

    let letterSearch = document.querySelector("#letter-searched").value;
    if (!isNaN(Number(letterSearch))) {
        notify(divNotification, notification, "INVALID", "Valor invalido");
        return;
    }

    let textQ2 = document.querySelector("#input-text-q2").value;
    let numberOccurrences = countLetterOccurrences(letterSearch, textQ2);
    if (numberOccurrences == 0) {
        notify(divNotification, notification, "DANGER", "Letra não encontrada no texto");
        return;
    }
    notify(divNotification, notification, "SUCCESS", `A letra ${letterSearch} foi encontrada ${numberOccurrences} vezes`);
});

const calculoOfFor = () => {
    let notification = document.createElement("p");
    let divNotification = document.querySelector(".notification-q3");
    divNotification.innerHTML = "";

    let indice = 12;
    let soma = 0;
    let k = 1;
    let text = "";

    while (k < indice) { 
        k = k + 1;
        soma = soma + k;
        text = text + " + " + k;
    }

    text = text.substring(2, text.length);
    text = text + " = " + soma;

    notify(divNotification, notification, "SUCCESS", text);
}
calculoOfFor();
