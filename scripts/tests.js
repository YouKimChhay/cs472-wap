
describe("filter", () => {
  it("filter nothing should be the same", () => {
    assert.equal("This house is not nice!".filter(), "This house is not nice!");
  });
  it("filter 1 word: not, should remove the word", () => {
    assert.equal("This house is not nice!".filter("not"), "This house is nice!");
  });
  it("filter 2 words: house and not, should remove both word", () => {
    assert.equal("This house is not nice!".filter("house", "not"), "This is nice!");
  });
  it("filter a non existing word should be the same", () => {
    assert.equal("This house is not nice!".filter("NOT"), "This house is not nice!");
  });
  it("filter 3 words, one of which is non existing, should remove only the existing ones", () => {
    assert.equal("This house is not nice!".filter("it", "house", "not"), "This is nice!");
  });
});


describe("bubbleSort", () => {
  it("correctly sort the given array", () => {
    let expected = [-2,0,1,3,4,6];
    let arr = [6,4,0,3,-2,1];
    arr.bubbleSort();
    assert.deepEqual(arr, expected);
  });
  it("correctly sort an empty array", () => {
    let expected = [];
    let arr = [];
    arr.bubbleSort();
    assert.deepEqual(arr, expected);
  });
  it("correctly sort the array with 1 element", () => {
    let expected = [10];
    let arr = [10];
    arr.bubbleSort();
    assert.deepEqual(arr, expected);
  });
  it("correctly sort the array with 2 elements", () => {
    let expected = [-2,0];
    let arr = [0,-2];
    arr.bubbleSort();
    assert.deepEqual(arr, expected);
  });
});

describe("Teacher", () => {
  let joe;
  let describe;
  let teaching;
  before(() => {
    joe = new Teacher();
    joe.initialize("Joe", 25);
    describe = joe.describe();
    teaching = joe.teach("wap");
  })
  it("initialize with name Joe age 25", () => {
    assert.deepEqual({...joe}, {name: "Joe", age: 25});
  });
  it("describe Joe", () => {
    assert.equal(describe, "Joe, 25 years old.");
  });
  it("Joe is teaching wap", () => {
    assert.equal(teaching, "Joe is now teaching wap");
  });
});