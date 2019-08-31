/*
  Given two strings, write a method to decide
  if one is a permutation of the other
*/

const checkPermutation = (string1 = '', string2 = '') => {
  let result = true;
  //have a dictionary
  let dict = {};
  if(string1.length !== string2.length) {
    return false;
  }
  //loop over one string to fill that dictionary
  for (let i = 0; i < string1.length; i++) {
    const char = string1.charAt(i);
    if(dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  }
  //loop over the other one and check each character
  for (let i = 0; i < string2.length; i++) {
    const char = string2[i];
    if(!dict[char]) {
      result = false;
      break;
    } 
  }

  //if all character exist in dictionary, return true
  //if not return false
  return result;
}

const string1 = "abbcdfa";
const string2 = "acdbbfa";

console.log(checkPermutation(string1, string2));