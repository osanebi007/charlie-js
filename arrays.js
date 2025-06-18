const students = ['jesse', 'timi', 'duke', 'jake']

const oldStudents = ['mistura', 'ola', 'jerry']

students[0] = 'jimmy'

const len = students.length

students.unshift('dolapo', 'francis', 'precious')

students.push('michael')

students.push(...oldStudents)

console.log(students)

students.pop()

console.log(students)
 
students.splice(students.indexOf('duke'))

console.log(students)

students.splice(students.indexOf('michael'), 1, ...['dolapo', 'jesse'])

console.log(students)

const indexes = (str, x) => str.indexOf(x) == str.lastIndexOff(x)

const filteredUnique = students.filter(student => students.indexOf(student) == students.lastIndexOf(student))

const firstFive = students.slice(0, 5)

const containsJohn = students.includes('jesse')


students.sort((a, b) => a.length - b.length)

const evenNumbers = new Array()

for(let num = 1; num<= 200; num++){
    if(num % 2 === 0){
        evenNumbers.unshift(num)
    }
}

const truncateNames = students.map(student => student.slice(0, 3).replace(student [0], student[0].toUpperCase()))

const handleDivision = evenNumbers.map(num => (num / 3).toFixed(2) * 1)

evenNumbers.sort((a, b) => b - a)



console.log(students.reverse())
console.log(filteredUnique)
console.log(firstFive)
console.log(containsJohn)
console.log(evenNumbers)
console.log(truncateNames)
console.log(handleDivision)

const rand = [23, 11, 16, 128, 240];
const remainders = rand.map(num => num % 10);
console.log(remainders);