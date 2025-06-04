const letters = "He says \"A Quick Brown Fox\n\t Jumps Over The Lazy Dog\""

const rhyme = `Roses are red, violets are blue, sugar is sweet, and so are you.`



console.log(letters)
console.log(rhyme)
// string methods
// string length
const len = letters.length
console.log("The length of the str is",len)

// string to upper case
const upper = letters.toUpperCase()
console.log("The upper case of the str is", upper)

// string to lower case
const lower = letters.toLowerCase()
console.log("The lower case of the str is", lower)


// console.log(letters[0])
// console.log(letters[letters.length - 1]) // last character
// charAt

const char9 = letters.charAt(9)
console.log("The character at index 9 is", char9)

const char99 = letters.charAt(99)
console.log("The character at index 99 is", char99) // returns empty string if index is out of bounds

// indexOf
const indexOfA = letters.indexOf("a")
console.log("The index of 'a' is", indexOfA)

const postionFox = letters.indexOf("fox")
console.log("The index of 'fox' is", postionFox)

// lastiIndexOf
const lastIndexOfA = letters.lastIndexOf("a")
console.log("The last index of 'a' is", lastIndexOfA)

console.log(letters.indexOf("a") === letters.lastIndexOf("a"))  // false, because there are multiple 'a's in the string
console.log(letters.indexOf("x") === letters.lastIndexOf("x")) // true, because there is only one 'x' in the string

// match
const vreg =  /[aeiou]/gi // regular expression to match vowels
const vowels = letters.match(vreg)
console.log("The vowels in the string are", vowels)

// includes
const includesGoat = letters.includes("Goat")
console.log("Does the string include 'Goat'?:", includesGoat)

const includesFox = letters.includes("Fox")
console.log("Does the string include 'Fox'? :", includesFox)

// startsWith
const startsWithHe = letters.startsWith("He")
console.log("Does the string start with 'He'?:", startsWithHe ?"Yes" : "No")

const startsWithHeSays = letters.startsWith("She says")
console.log("Does the string start with 'She says'?:", startsWithHeSays ?"Yes" : "No it doesn't")

// endsWith
const endsWithStone = letters.endsWith("Stone")
console.log("Does the string end with 'Stone'?:", endsWithStone ?"Yes" : "No")

// concat
// const concatStr = letters.concat(" ", 'stone')
const concatStr = letters.concat(...[' and stone', ' and ', 'water'])
console.log("The concatenated string is:", concatStr)

// substring
const subStr = letters.substring(letters.indexOf('B'), letters.indexOf('x')+1) 
console.log("The substring Brown Fox is:", subStr)

// slice
const sliceStr = letters.slice(letters.indexOf('B'), letters.indexOf('x')+1)
console.log("The sliced string Brown Fox is:", sliceStr)

// replace
const replaceStr = letters.replace("Brown Fox", "Black Cat")
console.log("The replaced string is:", replaceStr)

const replaceVowel = letters.replace(/[aeiou]/gi, '*')
console.log("The string with vowels replaced is:", replaceVowel)

const replaceAllVowel = letters.replaceAll('a', '*')
console.log("The string with all vowels replaced is:", replaceAllVowel)

// trim
const trimmedStr = letters.trim()
console.log("The trimmed string is:", trimmedStr.length)

// padStart and padEnd
const paddedStart = letters.padStart(100, '*')
console.log("The padded string at start is:", paddedStart)

const paddedEnd = letters.padEnd(100, '*')
console.log("The padded string at end is:", paddedEnd)

// split
const splitStr = letters.split(" ")
console.log("The split string is:", splitStr)

const splitStr2 = letters.split(/[\s,]+/).map(item => item + item.length) // split by space or comma
console.log("The split string by whitespace or comma is:", splitStr2)

