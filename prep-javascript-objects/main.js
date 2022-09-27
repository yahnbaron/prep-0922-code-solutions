const person = { firstName: 'Baron', lastName: 'Yahn', hobby: 'Sailing' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');
person.job = 'Driver';
console.log("The person's job is: " + person.job + '.');
person.previousJob = 'Captain';
console.log("The person's previous job was: " + person.previousJob + '.');
console.log(person);
