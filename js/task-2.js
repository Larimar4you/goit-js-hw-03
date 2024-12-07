/* #завдання */
/*
Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину 
відповідно до заданої максимальної довжини (параметр maxLength).

Доповни код функції таким чином, що:

Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." 
в кінці та повертає обрізану версію.

*/

`use strict`;
    function formatMessage(message, maxLength) {
    
    if (message.length <= maxLength) {
      return message; 
    }
  
    return message.slice(0, maxLength) + "...";
  }

/* Перевiрка функцii */
console.log(formatMessage("Curabitur ligula sapien", 16)); 
console.log(formatMessage("Curabitur ligula sapien", 23)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 