function handleScoreIncrease(score){
    return score + 10;
}

console.log(handleScoreIncrease(12))
console.log(handleScoreIncrease(2))
console.log(handleScoreIncrease(60))
console.log(handleScoreIncrease(1230))

function handleGreeting(){
     return 'Good morning'
}

function handleAddition(num1, num2 = 0){
    const result = num1 + num2;
    console.log(result)
}

handleAddition(5, 10);
handleAddition(5);
handleAddition(5, 20);

function generateRandomNumber(vol=10){
    const random = Math.random()*vol;
    console.log(Math.floor(random));
}

generateRandomNumber();
generateRandomNumber(100);
generateRandomNumber(1000);

const handleStrCapitalize = (str) => {
      str = str.toLowerCase()
      let firstChar = str.charAt(0).toUpperCase();
      str = str.replace(str[0],firstChar)
      return str;
}

const handlePower = (num, power) =>num ** power

console.log(handlePower(4,2))

console.log(handleStrCapitalize('frontend'))
console.log(handleStrCapitalize('production'))
console.log(handleStrCapitalize('encapsuLATION'))

function remainder(val, divider) {
    return val % divider;
}

console.log(remainder(5, 5));
console.log(remainder(15, 17));
console.log(remainder(200, 150)); 
