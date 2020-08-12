const o = new Object()
o.firstName = "Vivi"
o.lastName = 'Torres'
o.isTeaching = false
o.greet = function(){
	console.log('hi!')
}
o.address = {
	street : 'Main St',
	city : 'West Hartford'
}
o.obj = {
	key : "key"
}

const o2 = {}
o2.firstName = 'Vivi'
o2.lastName = 'Torres'
o2['greet'] = function() {
	console.log('Hi!')
}


const o3 = {
	firstName : 'Vivi',
	lastName : 'Torres',
	address : {
		street : 'Main St',
		city : 'West Hartford'
	}
}

console.log(o2.lastName);
o.greet();

key = 'greet'

o2[key]();

function deepCopy(obj) {
	//array full of the string values of the keys in the particular object
	const keys = Object.keys(obj)
	
	const newObject = {}
	for(let i = 0; i < keys.length; i++) {
		const key = keys[i]
		
		//see how Object comparison is like comparing against a String rather than a type
		if (typeof obj[keys[i]] === 'object') { //habit of using === instead of -==, why? what is the difference???
			newObject[key] = deepCopy(obj[key])
		} else {
			newObject[key] = obj[key]
		}
	}
	return newObject
}


const o4 = deepCopy(o)

//changing o should not affect o4
console.log(o.obj.key)
console.log(o4.obj.key)
o.obj.key = "new key!"
console.log(o.obj.key)
console.log(o4.obj.key)

//array
const arr = []
arr.push('value') //push is part of the functions that are available from the prototype Array 
arr.push('value1')
console.log(arr.__proto__)

//functions that we can invoke in non-primitives (functions that belong to its prototype)
const string = "string"
console.log(string.toUpperCase()) //this is part of the String object and available for my const in this case

//based on the scope where the variable is found, it will exist as of that line. unless is hoisted as var (put at the beginning of the file behind the scenes)
//Multiple variables cannot have the same name as const or let - var lets you declare multiple variables with the same name
var sameVarName = 'old value'
sameVarName = "new value"
var sameVarName = 50
console.log(sameVarName)


/*
 *Variable lifetime
 *○ Lexical scoping (var): from when they’re declared until when their
 *function ends
 *○ Block scoping (const, let): until the next } is reached
*/
//var, let, const - for const when declaring an object, we can change its keys as long as the reference to the object remains the same
//var is not used or encouraged to use anymore

thisIsAlsoAVariable = "no declaration needed"
console.log(thisIsAlsoAVariable)

//global object called window 'The Global object' window exists in the browser but in node we can use global (global does not exist in the browser)
//node global

//closure
function makeFunctionArray() {
	const arr = []
	for (var i = 0; i<5; i++) {
		arr.push(function() {console.log(i)})
	}
	console.log('value of i declared as var lasts till the end of the fucntion '+i)
	return arr
}

const array = makeFunctionArray()
array[3]()//returning 5 due to i declared as var and living until the end of the function

function makeFunctionArrayLet() {
	const arr = []
	for (let i = 0; i<5; i++) {
		arr.push(function() {console.log(i)})
	}
	console.log('value of i declared as let lasts till the end of the block '+ typeof i)
	return arr
}
const arrayLet = makeFunctionArrayLet()
arrayLet[1]()//returning 1 due to i declared as let and living until the end of the block


//ES5, ES6, ES2016, ES2017, ES.Next - ECMAScript

//IIFE
//Annonymous function that does not get registered in the global scope, because it is only within the constant scope as opposed to the previous declared functions
const sayHello = (function() {
	let message = 'Hello!'
	
	function sayHello() {
		console.log(message)
	}
	
	return sayHello()
})()

const counter = (function(){
	let count = 0
	
	return {
		increment : function() { count = count + 1 },
		get : function() { console.log(count) }
	}
})()

counter.get()
counter.increment()
counter.get()
counter.increment()
counter.get()


//First class functions
const x = [0,1,2,3]
function addOne(number) { return number+1}
addOne(1)
console.log(x.map)
console.log(x.map(addOne))//maps the values to the function passed in returning its equivalent, in this case +1 of the original value
function isGreaterThanOne(num) { return num >1}
console.log(isGreaterThanOne(100))
console.log(isGreaterThanOne(1))
console.log(x.filter(isGreaterThanOne))//filter will get rid of the values that return false, and keep the ones that return true
function add(x, y) {return x+y}
console.log(add(1,2))
console.log(x)
console.log(x.reduce(add))//starts using (0,1) then (1,2) then (3,3)
x.forEach(function(val) {console.log('Using for each '+val)})

//JavaScript is syncronous and single threaded
function hang(secs) {
	const doneAt = Date.now()+ (secs*1000) //The current date
	while(Date.now() < doneAt) {}
}
hang(10) //this will block anything else for 10secs

//JS can act async 
//function throwException() {
	//throw new Error('oh no, exception')
//}

//console.log(throwException())

//callbacks
//callback hell when too many callbacks are anidated and each one has to handle errors - instead Promise will help this
function doSomethingAsync(callback) {
	setTimeout(function() {callback(1)},1000)
}
//lets pass in a function that will tell what to do with the returned value once the asyn value is ready
doSomethingAsync(console.log)
doSomethingAsync(function(x) { console.log(x)})

//Promises
//const url = ''
//fetch(url)

//this
const person = {
	name : 'jordan',
	greet : function() { console.log('hello '+this.name)}
}
person.greet()

const friend = {
	name: 'david'
}

friend.greet = person.greet
friend.greet()


const greet = person.greet.bind({name : 'this is a bound object'}) //bind new function gets invoked when explicitly called
person.greet.call({name : 'this is a bound object'}) //call and apply immediately call the function 
person.greet.apply({name : 'this is a bound object'}) //call and apply immediately call the function 
greet()



class Set {
	
	constructor(arr) {
		this.arr = arr
	}
	
	add(val) {
		if (!this.has(val)) {
			this.arr.push(val)
		}
	}
	
	delete(val) {
		this.arr = this.arr.filter(x => x!== val)
	}
	
	has(val) {
		return this.arr.includes(val)
	}
	
	get size() {
		return this.arr.length
	}
}

const s = new Set([1,2,3,4,5])
s.add(1)
s.add(1)

console.log('s should have 5 members and actually has:', s.size)

console.log('s should contain 5:', s.has(5))

s.add(6)
console.log('s should contain 6:', s.has(6))
console.log('s should have 6 members and actually has:', s.size)

s.delete(6)
console.log('s should no longer contain 6:', !s.has(6))
console.log('s should have 5 members and actually has:', s.size)
