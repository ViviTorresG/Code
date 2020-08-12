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
	return arr
}

const array = makeFunctionArray()
array[0]()

