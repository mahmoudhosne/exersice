// 'use strict';

// // session one  => first task ==================

// let ahmedMass = 78;

// let ahmedHeight = 169;

// let mahmoudMas = 92;

// let mahmoudHeight = 195;

// // change height to meter

// let ahmedHeightWithCm = ahmedHeight / 100;

// let mahmoudHeightWithCm = mahmoudHeight / 100;

// // calc bmi

// let bmi = ahmedMass / ahmedHeightWithCm ** 2;

// console.log(bmi);

// bmi = mahmoudMas / mahmoudHeightWithCm ** 2;

// console.log(bmi);

// // ==================================================

// // task num  1

// let myVar = 5;
// let myOtherVar = myVar * 2;
// console.log(myOtherVar);

// // ============================================

// //    task num 2

// const PI = 3.14;
// let circleRadius = 5;
// let circleCircumfrenece = PI * circleRadius;
// console.log(circleCircumfrenece);

// //==================================================

// //  tasm num 3

// let firstName = 'mahmoud';
// let secondtName = 'hosni';
// let lastName = 'hamdi';
// const FULLNAME = firstName + ' ' + secondtName + ' ' + lastName;
// console.log(FULLNAME);

// //=================================================

// //  task num 4

// let myAge = 31;
// let nextYearAge = (myAge += 1);
// console.log(nextYearAge);

// // ================================================

// //  task num 5

// let num = 5;
// let num2 = 10;
// let sum = num + num2;
// let theDifference = num2 - 1;
// let product = num * num2;
// let devisionResult = num / num2;
// let theRest = devisionResult;
// console.log(theRest);

// //===================================================

// // task num 6

// let initialValue = 5;
// initialValue++;
// let newValue = initialValue++;
// newValue--;
// let finalValue = newValue--;
// console.log(finalValue);

// //=========================================================

// // task num 7

// let string1 = 'mohamed';
// let string2 = 'ashour';
// let allStrings = string1 + ' ' + string2;
// console.log(allStrings);
// log;

// console.log(10 == '10');
// console.log(10 != 10);

// console.log(10 === '10');

// console.log(10 !== '10');
// console.log(typeof 'm' === typeof 'mahmoud');
// // ====================================

//    IF CONDITION    //

// let x = '10';

// console.log(typeof Number(x));
// console.log(typeof Number(''));
// let test = '5';

// console.log(String(100 + 33));
// // console.log(typeof test);
// if (typeof test === 'string') {
//   console.log('value is string');
// } else {
//   console.log('value is not string');
// }
// // console.log(Boolean(Number('')));
// console.log(5 + null);

// console.log('5' + null);

// console.log(5 + '2');

// console.log(5 - '2');

// console.log('null' - 2);

// console.log('5' * 2);

// let myVar = { name: 'mahmoud' };

// =================================
// QUSTION

// let zero = '000';

// console.log(
//   'Number : ' +
//     Number(zero) +
//     '<br>' +
//     'String : ' +
//     String(zero) +
//     '<br>' +
//     'Boolean: ' +
//     Boolean(zero)
// );
// ==============================
// QUSTION
// let c = false;
// let u = c.constructor;
// console.log(u);

// =================================

//  IMPORTANT QUSTION =>>>>>
//  W3S
// Boolean.prototype.myColor = function () {
//   if (this.valueOf() == true) {
//     return 'green';
//   } else {
//     return 'red';
//   }
// };

// let a = true;
// let color = a.myColor();

// ==============================

//  IMPORTANT QUSTION
//  W3S
// function dataPerson (first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.eyeColor = eyecolor;
//   }

//   Person.prototype.nationality = "English";

// let num = 0;

// switch (num) {
//   default:
//     console.log('no number');
//     break;

//   case 0:
//     console.log('zero');
//     break;
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//     console.log('two');
//     break;
//   case 3:
//     console.log('three');
//     break;
// }
// CONDTIONAL  TERNARY OPERATOR========

// let theName = 'marwa';
// let theGender = 'female';
// let theAge = 51;

// use with one condition

// let result = theGender === 'male' ? 'mrs' : 'ms';
// // document.write();
// if (Boolean(result) === true) {
//   document.write(`hello ${result} ${theName}`);
// } else {
//   document.write(`hello ms ${theName}`);
// }

//  use with sevral condition================

// theGender === 'male' // first condition
//   ? console.log('male')
//   : theGender === 'female' && theAge > 50 // second condition
//   ? console.log('female')
//   : console.log('UNKOWN'); //else

// let operationCalc = Number(
//   prompt('pls enter opertion calc that you want  ( /  *  +  - )')
// );

// ============ T A S K SESSION 3 =================

// const firstNumber = Number(prompt());

// const check = firstNumber;

// if (check != NaN) {
//   console.log('NaN');
// }

// const firstNumber = Number(prompt('enter first number'));
// if (firstNumber % 2 === 0 || firstNumber % 2 === 1) {
//   const secondNumber = Number(prompt('enter first number'));
//   if (secondNumber % 2 === 0 || secondNumber % 2 === 1) {
//     const operationCalc = prompt(`enter operation sign`);
//     if (
//       operationCalc === '+' ||
//       operationCalc === '-' ||
//       operationCalc === '*' ||
//       operationCalc === '/'
//     ) {
//       if (operationCalc === '+') {
//         prompt(`resuli = ${firstNumber + secondNumber}`);
//       } else if (operationCalc === '-') {
//         prompt(`resuli = ${firstNumber - secondNumber}`);
//       } else if (operationCalc === '*') {
//         prompt(`resuli = ${firstNumber * secondNumber}`);
//       } else if (operationCalc === '/') {
//         prompt(`resuli = ${firstNumber / secondNumber}`);
//       }
//     } else {
//       prompt(`just enter * / - + `);
//     }
//   } else {
//     prompt(`enter number`);
//   }
// } else {
//   prompt(`enter number`);
// }

// if (typeof firstNumber === 'number') {
//   const secondNumber = 10;
//   if (typeof secondNumber === 'number') {
//     const operationCalc = '+';
//     if (
//       operationCalc === '+' ||
//       operationCalc === '-' ||
//       operationCalc === '*' ||
//       operationCalc === '/'
//     ) {
//       if (operationCalc === '+') {
//         console.log(`${firstNumber + secondNumber}`);
//       } else if (operationCalc === '-') {
//         console.log(`${firstNumber - secondNumber}`);
//       } else if (operationCalc === '*') {
//         console.log(`${firstNumber * secondNumber}`);
//       } else if (operationCalc === '/') {
//         console.log(`${firstNumber / secondNumber}`);
//       }
//     } else {
//       console.log('enter those signs = * - /');
//     }
//   } else {
//     console.log('enter number');
//   }
// } else {
//   console.log('enter number');
// }

// ===============================================================
