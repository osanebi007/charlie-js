const rhyme =`
twinkle, twinkle, little star,

how I wonder what you are!

Up above the world so high,

like a diamond in the sky.
`

// find the index of Diamond
const diamondIndex = rhyme.indexOf("diamond");
console.log("The index of 'diamond' is", diamondIndex);

// extract the last line from like till the end , store in a variable called last
const last = rhyme.slice(rhyme.indexOf("like"));
console.log("The last line is:", last);

// find the index of Gold
const goldIndex = rhyme.indexOf("Gold");
console.log("The index of 'Gold' is", goldIndex);

// if silver exist , return yes otherwise return no silver
const silverExists = rhyme.includes("silver") ? "Yes, silver exists" : "No, silver does not exist";
console.log(silverExists);

// replace your star with sun
const rhymeWithSun = rhyme.replace("star", "sun");
console.log("Rhyme with 'sun':", rhymeWithSun);

// replace the last the with that

const rhymeWithThat = rhyme.replace(/the(?=[^the]*$)/, "that");
console.log("Rhyme with 'that':", rhymeWithThat);


// the rhyme should start with capital letter
const rhymeWithCapital = rhymeText.charAt(0).toUpperCase() + rhymeText.slice(1);
console.log("Rhyme with capital letter:", rhymeWithCapital);
