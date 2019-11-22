'use strict';

/*
2. Написать функцию, которая выводит все числа из заданного
пользователем диапазона в прямом порядке. И еще одну
функцию – для вывода в обратном порядке.
 */


function logRangeR(from, to) {

    if (from < to) {

        console.log(from);

        logRangeR(from + 1, to);


    }

}

function logRangeReverse(from, to) {

    if (from < to) {

        console.log(to);

        logRangeReverse(from, to - 1);


    }

}

function logRange(from, to) {

    for (let i = from; i < to; i++) {
        console.log(i);
    }


}


function factorial(n) {

    return n !== 1 ? n * factorial(n - 1) : 1;


}


/*
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
*/


/*

function min(a, b) {
    return a < b ? a : b;
    }
*/

/*
3. Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321.
 */
function getMirrorNumber(number) {

    if (number < 10) {
        return number;
    }

    const lastDigit = number % 10;

    return +`${lastDigit}${getMirrorNumber((number - lastDigit) / 10)}`;

}

function getDigitSumOfNumber(number) {

    if (number < 10) {
        return number;
    }

    const lastDigit = number % 10;

    return lastDigit + getDigitSumOfNumber((number - lastDigit) / 10);

}

