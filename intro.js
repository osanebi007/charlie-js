let myName = 'Jesse Osas'
let myAge = 19
let isMarried

isMarried = true

isMarried = false

let state0fOrigin = "Delta State"

let jobTitle = 'Product Designer'

jobTitle = 'Software Engineer'

let statement = 'My name is ' + myName + 'I am ' + myAge

statement = `My name is ${myName} I was born in ${new Date() - myAge}, I am ${myAge} years old, and I am from ${state0fOrigin}. I work as a ${jobTitle} at Univelcity. I am ${isMarried ? 'married to cassie' : 'not married'}.`


console.log(jobTitle)
console.log(statement)
console.log(typeof statement)
