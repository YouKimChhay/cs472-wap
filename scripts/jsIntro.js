
// question 1
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// question 2
function maxOfThree(x, y, z) {
  return max(x,max(y,z));
}

// question 3
function isVowel(c) {
  let vowel = "aeiou";
  for (let i = 0; i < vowel.length; i++) {
    if (vowel.charAt(i) === c) {
      return true;
    }
  }
  return false;
}

// question 4.1
function sum(arr) {
  return arr.reduce((acc, val) => acc + val);
}

// question 4.2
function multiply(arr) {
  return arr.reduce((acc, val) => acc * val);
}

// question 5
function reverse(str) {
  let result = "";
  for (let i = str.length-1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

// question 6
function findLongestWord(arr) {
  let longlen = arr.map(e => e.length).sort((a, b) => b - a).at(0);
  return arr.filter(e => e.length == longlen).at(0);
}

// question 7
function findLongestWords(arr, i) {
  return arr.filter(e => e.length > i);
}

// question 8
const a = [1,3,5,3,3];

// question 8a
const b = a.map(function(elem, i, array) {
  return elem * 10;
})

// question 8b
const c = a.filter(function(elem, i, array){
  return elem === 3;});

// question 8c
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
