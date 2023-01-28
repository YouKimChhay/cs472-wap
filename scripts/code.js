
//exercise1
String.prototype.filter = function(...strings) {
  function contain(str) {
    for (e of strings) {
      if (e === str) return true;
    }
    return false;
  }
  return this.split(' ').filter(e => !contain(e))
                        .reduce((acc, e) => acc + " " + e);
}


//exercise2
Array.prototype.bubbleSort = function() {
  let arr = this;
  //swap elements with index i and j
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let notSorted = true;
  while(notSorted) {
    let hasSwaped = false;
    for(let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        swap(i, i+1);
        hasSwaped = true;
      }
    }
    if (!hasSwaped) {
      notSorted = false;
    }
  }
}


//exercise3
var Person = function() {};
Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function() {
  return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
  console.log(this.name + " just learned " + subject);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
  return this.name + " is now teaching " + subject;
}

