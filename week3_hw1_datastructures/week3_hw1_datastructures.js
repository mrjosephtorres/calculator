// Challenge: Arrays - Examining Elements
// https://csx.codesmith.io/units/precourse-part-2/challenge-arrays-examining-elements

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3]

// Write a console.log statement below to check your work!
console.log(fourthItem);



// Challenge: Arrays - Adding Elements 
// https://csx.codesmith.io/units/precourse-part-2/challenge-arrays-adding-elements

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("A New Netflix Show");

// Write a console.log statement below to check your work!
console.log(netflixShows);



// Challenge: For Loops and Arrays: 
// https://csx.codesmith.io/units/precourse-part-2/challenge-for-loops-arrays

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++) {
  greetings.push("Have a " + synonyms[i] + " day!");
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i < greetings.length; i++) {
 console.log(greetings);
}


// Challenge: For Loops - Calculating Array Elements: 
// https://csx.codesmith.io/units/precourse-part-2/challenge-for-loops-calculating-array-elements

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] = increaseByTwo[i] + 2;
}

// Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
console.log(increaseByTwo);


// Challenge: For Loops and Array Indices: 
// https://csx.codesmith.io/units/precourse-part-2/challenge-for-loops-array-indices

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < 3; i++) {
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}
console.log(bios);


// Challenge: Objects - Adding Properties: 
// https://csx.codesmith.io/units/precourse-part-2/challenge-objects-adding-properties

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i =0; i < possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}
console.log(divByThree);


// Challenge: Objects - Evaluating Keys: 
// https://csx.codesmith.io/units/precourse-part-2/challenge-objects-evaluating-keys

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
for (let item in sumMe) {
    if (typeof sumMe[item] === "number") {
        total += sumMe[item];
    }
}
console.log(total);