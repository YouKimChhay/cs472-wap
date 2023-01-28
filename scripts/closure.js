
//question1
const count = (() => {
  let counter = 0;
  const add = () => ++counter;
  const reset = () => counter = 0;
  return {
    add: add,
    reset: reset
  };
})();

console.log(count.add()); //1
console.log(count.add()); //2
console.log(count.reset()); //0

//question2
/*
"free variable" in the add (as well as reset) function is counter.
A free variable is a variable referred to by a function that
is not a parameter or local variable.
*/

//question3
const make_adder = (inc) => {
  let counter = 0;
  return () => counter += inc;
}

const add5 = make_adder(5);
console.log(add5()); //5
console.log(add5()); //10
console.log(add5()); //15

const add7 = make_adder(7);
console.log(add7()); //7
console.log(add7()); //14
console.log(add7()); //21

//question4
/*
For namespace encapsulation, we can either use
- IIFE: Immediately Invoked Function Execution
- define a block scope in ES6 (use only let and const).
*/

//question5
const Employee = (() => {
  let name = "";
  let age = 0;
  let salary = 0;
  const getName = () => name;
  const getAge = () => age;
  const getSalary = () => salary;
  return {
    setName: (n) => name = n,
    setAge: (a) => age = a,
    setSalary: (s) => salary = s,
    increaseSalary: (p) => salary = getSalary()*(100+p)/100,
    incrementAge: () => age = getAge()+1
  };
})();

console.log(Employee);

//question6
Employee.address = "";
Employee.setAddress = (address) => Employee.address = address;
Employee.getAddress = () => Employee.address;

console.log(Employee);


//jsfiddle question
var me = {
  first: 'Josh',
  last: 'Splinter',
  getFullName: function() {
    return this.first + ' ' + this.last;
  }
};

var you = {
  first: 'William',
  last: 'Smith'
};

console.log(me.getFullName.apply(you)); //William Smith
console.log(me.getFullName.call(you)); //William Smith
console.log(me.getFullName.bind(you)()); //William Smith

