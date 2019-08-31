/*
 Implement an algorithm to determine if a string has all unique characters. 
 What if you cannot use additional data structures?
 */

const isUnique = (str = "") => {
  let build = "";
  let result = true;
  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);
    if(build.indexOf(char) < 0) {
      build += char;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

var string1 = "abbcded"
var string2 = "abcde"
var string3 = "aab"
var string4 = "a"
console.log(isUnique(string1));
console.log(isUnique(string2));
console.log(isUnique(string3));
console.log(isUnique(string4));
