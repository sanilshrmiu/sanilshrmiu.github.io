"use strict";

console.log(
  "Function max() that takes two numbers as arguments and returns the largest of them"
);
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(5, 10)); // Output: 10
console.log(max(25, 10)); // Output: 25

console.log(
  "Function maxOfThree() that takes three numbers as arguments and returns the largest of them"
);
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(5, 10, 15)); // Output: 15
console.log(maxOfThree(25, 10, 5)); // Output: 25

console.log(
  " Function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise"
);
function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
}

console.log(isVowel("a")); // Output: true
console.log(isVowel("B")); // Output: false

console.log(
  "Function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers"
);
function sum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function multiply(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

console.log(sum([1, 2, 3, 4])); // Output: 10
console.log(multiply([1, 2, 3, 4])); // Output: 24

console.log("Function reverse() that computes the reversal of a string.");
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverse("jag testar")); // Output: "ratset gaj"

console.log(
  "function findLongestWord() that takes an array of words and returns the length of the longest one"
);
function findLongestWord(words) {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest.length;
}

console.log(findLongestWord(["apple", "banana", "orange"])); // Output: 6

console.log(
  "function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters."
);
function filterLongWords(words, i) {
  return words.filter((word) => word.length > i);
}

console.log(filterLongWords(["apple", "banana", "orange"], 5)); // Output: ["banana", "orange"]

console.log(
  "Function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array"
);
function computeSumOfSquares(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(computeSumOfSquares([1, 2, 3])); // Output: 14

console.log(
  "Function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd"
);
function printOddNumbersOnly(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log(numbers[i]);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbersOnly(arr);

console.log(
  "Function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array"
);
function computeSumOfSquaresOfEvensOnly(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i] ** 2;
    }
  }
  return sum;
}

const arr2 = [1, 2, 3, 4, 5];
const sumOfSquaresOfEvens = computeSumOfSquaresOfEvensOnly(arr2);
console.log(sumOfSquaresOfEvens); // Output: 20

console.log(
  "Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming."
);
function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

const arr3 = [1, 2, 3, 4, 5];
console.log(sum(arr3)); // Output: 15
console.log(multiply(arr3)); // Output: 120

const arr4 = [2, 4, 6, 8];
console.log(sum(arr4)); // Output: 20
console.log(multiply(arr4)); // Output: 384

const arr5 = [5, 10, 15];
console.log(sum(arr5)); // Output: 30
console.log(multiply(arr5)); // Output: 750

console.log(
  "Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers"
);
function findSecondBiggest(numbers) {
  let biggest = -Infinity;
  let secondBiggest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber > biggest) {
      secondBiggest = biggest;
      biggest = currentNumber;
    } else if (currentNumber > secondBiggest && currentNumber < biggest) {
      secondBiggest = currentNumber;
    }
  }

  return secondBiggest;
}

console.log(findSecondBiggest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondBiggest([19, 9, 11, 0, 12])); // Output: 12

console.log(
  "Function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence"
);
function printFibo(n, a, b) {
  let fiboArr = [a, b];

  for (let i = 2; i < n; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }

  console.log(fiboArr.join(", "));
}

printFibo(1, 0, 1); // Output: 0
printFibo(2, 0, 1); // Output: 0, 1
printFibo(3, 0, 1); // Output: 0, 1, 1
printFibo(6, 0, 1); // Output: 0, 1, 1, 2, 3, 5
printFibo(10, 0, 1); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

console.log(
  "Function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20."
);
function sum(arr) {
  return arr.reduce((acc, curr) => (curr > 20 ? acc + curr : acc), 0);
}

console.log(
  "Function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’"
);
const getNewArray = function (arr) {
  return arr
    .filter((str) => str.length >= 5 && str.includes("a"))
    .map((str) => str.trim());
};

const arr6 = [10, 15, 20, 25, 30];
console.log(sum(arr6)); // Output: 55

const strArr = [
  "apple",
  "banana",
  "orange",
  "avocado",
  "grapefruit",
  "pear",
  "watermelon",
];
console.log(getNewArray(strArr)); // Output: ["apple", "banana", "avocado", "grapefruit"]
