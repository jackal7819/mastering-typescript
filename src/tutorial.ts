console.log('hello world');
let namePerson = 'John';
namePerson = namePerson.toUpperCase();
let agePerson = 30;
agePerson = agePerson + 1;
let isWorking = false;
isWorking
	? (namePerson = namePerson.toUpperCase())
	: (namePerson = namePerson.toLowerCase());

console.log(namePerson, agePerson, isWorking);
