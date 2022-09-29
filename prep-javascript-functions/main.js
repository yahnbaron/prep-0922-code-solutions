function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes + ' minutes');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  var sumOfBoth = num1 + num2;
  return sumOfBoth * 5;
}

var fourthResult = addAndMultiplyBy5(10, 5);
console.log(fourthResult);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multipliedDivided = multiplyAndDivideBy5(35, 10);
console.log(multipliedDivided);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractedNum = subtractTwoNumbers(22, 7);
console.log(subtractedNum);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var cubedNumber = cube(5);
console.log(cubedNumber);
