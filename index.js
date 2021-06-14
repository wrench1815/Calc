/******************************************
 *  Author : Hardeep Kumar
 *  Created On : Sat Jun 05 2021
 *  File : index.js
 *******************************************/

//  * A Calculator that takes two numbers and persoms operations on it

let num1, num2, rCheck, compute;

function sendNums() {
  num1 = Number(document.getElementById('num1').value);

  num2 = Number(document.getElementById('num2').value);

  rCheck = document.querySelector('input[name="calc_radio"]:checked').value;

  switch (rCheck) {
    case 'addition':
      compute = num1 + num2;
      break;

    case 'subtraction':
      compute = num1 - num2;
      break;

    case 'multiplication':
      compute = num1 * num2;
      break;

    case 'division':
      if (num1 !== 0 && num2 === 0) {
        compute = 'Cannot divide by Zero';
      } else if (num1 === 0 && num2 == 0) {
        compute = 'Result Undefined';
      } else {
        compute = num1 / num2;
      }
      break;

    default:
      compute = 'unknown error';
      break;
  }

  document.getElementById('output').innerHTML = compute;
}
