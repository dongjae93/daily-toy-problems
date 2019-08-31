/*
  Write a method to replace all spaces in a string with '%20'.
  You may assume that the string has sufficient space at the end to hold the additional characters,
  and that you are given the "true" length of the string.
  (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

  @Example
  Input: "Mr John Smith     ", 13
  Output: "Mr%20John%20Smith"

*/

const URLify = (string = '', trueLength = 0) => {
  let charArr = string.split('');
  let result = '';
  charArr = charArr.slice(0, trueLength);
  console.log(charArr);
  charArr.forEach((char) => char === ' ' ? result += '%20' : result += char);
  return result;
}

const string = "Mr John Smith     "

console.log(URLify(string, 13))