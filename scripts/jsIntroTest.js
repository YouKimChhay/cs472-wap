
function test(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED!";
  } else {
    return "TEST FAILED! Expected " + expected + " found " + found;
  }
}

function testArray(expected, found) {
  if (expected.length === found.length) {
    for (let i = 0; i < expected.length; i++) {
      if (expected.at(i) !== found.at(i)) {
        return "TEST FAILED! Expected " + expected + " found " + found;
      }
    }
    return "TEST SUCCEEDED!";
  }
  return "TEST FAILED! Expected " + expected + " found " + found;
}

let opening = "Expected output of ";

console.log("testing max(x,y)");
console.log(opening + "max(30, 20) is 30 " + test(30, max(30,20)));
console.log(opening + "max(1.3, 1) is 1.3 " + test(1.3, max(1.3,1)));
console.log(opening + "max(100.1, 100.01) is 100.1 " + test(100.1, max(100.1, 100.01)));
// console.assert(max(30,20) === 20, "Expected " + 30 + " found " + max(30,20));

console.log("");
console.log("testing maxOfThree(x,y,z");
console.log(opening + "maxOfThree(10, 30, 20) is 30 " + test(30, maxOfThree(10, 30, 20)));
console.log(opening + "maxOfThree(10.5, 10, 10.45) is 10.5 " + test(10.5, maxOfThree(10.5, 10, 10.45)));
console.log(opening + "maxOfThree(0, 0, 0.5) is 0.5 " + test(0.5, maxOfThree(0, 0.5, 0.5)));

console.log("");
console.log("testing isVowel(c)");
console.log(opening + "isVowel('a') is true " + test(true, isVowel('a')));
console.log(opening + "isVowel('e') is true " + test(true, isVowel('e')));
console.log(opening + "isVowel('i') is true " + test(true, isVowel('i')));
console.log(opening + "isVowel('o') is true " + test(true, isVowel('o')));
console.log(opening + "isVowel('u') is true " + test(true, isVowel('u')));
console.log(opening + "isVowel('b') is false " + test(false, isVowel('b')));
console.log(opening + "isVowel('x') is false " + test(false, isVowel('x')));
console.log(opening + "isVowel('z') is false " + test(false, isVowel('z')));

console.log("");
console.log("testing sum(arr)");
console.log(opening + "sum([1, 2, 3, 4]) is 10 " + test(10, sum([1, 2, 3, 4])));
console.log(opening + "sum([1, -2, 3, 4]) is 6 " + test(6, sum([1, -2, 3, 4])));
console.log(opening + "sum([1, 2.6, 3.5, 4]) is 11.1 " + test(11.1, sum([1, 2.6, 3.5, 4])));

console.log("");
console.log("testing multiply(arr)");
console.log(opening + "multiply([1, 2, 3, 4]) is 24 " + test(24, multiply([1, 2, 3, 4])));
console.log(opening + "multiply([1, -2, 3, 4]) is -24 " + test(-24, multiply([1, -2, 3, 4])));
console.log(opening + "multiply([2, 2.6, 3.5, 4]) is 72.8 " + test(72.8, multiply([2, 2.6, 3.5, 4])));
console.log(opening + "multiply([1, 0, 3, 4]) is 0 " + test(0, multiply([1, 0, 3, 4])));

console.log("");
console.log("testing reverse(str)");
console.log(opening + "reverse(\"jag testar\") is \"ratset gaj\" " + test("ratset gaj", reverse("jag testar")));
console.log(opening + "reverse(\"banana\") is \"ananab\" " + test("ananab", reverse("banana")));
console.log(opening + "reverse(\"anna\") is \"anna\" " + test("anna", reverse("anna")));

console.log("");
console.log("testing findLongestWord(arr)");
console.log(opening + "findLongestWord([\"apple\", \"banana\", \"pineapple\"]) is \"pineapple\" " +
            test("pineapple", findLongestWord(["apple", "banana", "pineapple"])));
console.log(opening + "findLongestWord([\"apple\", \"banana\", \"strawberry\", \"pineapple\"]) is \"strawberry\" " +
            test("strawberry", findLongestWord(["apple", "banana", "strawberry", "pineapple"])));

console.log("");
console.log("testing findLongestWords(arr, i)");
console.log(opening + "findLongestWords([\"apple\", \"banana\", \"pineapple\"], 5) is [\"banana\", \"pineapple\"] " +
            testArray(["banana", "pineapple"], findLongestWords(["apple", "banana", "pineapple"], 5)));
console.log(opening + "findLongestWords([\"apple\", \"banana\", \"strawberry\", \"pineapple\"], 9) is [\"strawberry\"] " +
            testArray(["strawberry"], findLongestWords(["apple", "banana", "strawberry", "pineapple"], 9)));

console.log("");
console.log("Modify the jsfiddle");
console.log(opening + "[1,3,5,3,3] multiply by 10 is [10,30,50,30,30] " + testArray([10,30,50,30,30], b));
console.log(opening + "[1,3,5,3,3] elements equal to 3 is [3,3,3] " + testArray([3,3,3], c));
console.log(opening + "[1,3,5,3,3] products of all elements is 135 " + testArray(135, d));
