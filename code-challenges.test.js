// ASSESSMENT 2: Coding practical questions with Jest

// const { test } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
// Expected output: "15 is divisible by three"

// Psuedo Code: Need to test if the function will return expected values when evaluated.
// Start with describing the function name
describe("divisibleByThree", () => {
// //     //Declare the variables to be evaulated
    var num1 = 15
    var num2 = 0
    var num3 = -7
// //      // test what you are looking to return in plain words
    test ("returns a string that tells you if the argument is divisible by three", () => {
    // what is expected to return. This is what we expect the return to say when the function is evaluated.
        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")    
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")  
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")     
    })
 })


// b) Create the function that makes the test pass.

const divisibleByThree = (num) => {
    if (num % 3 === 0){
        return `${num} is divisible by three`
    }
    else { 
        return `${num} is not divisible by three`
     }
}



// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// //Start with describing the function name
describe("capitalize", () => {
    //Declare the variables to be evaulated
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    // test what you are looking to return in plain words
        test ("returns a string with the first element capitalized", () => {
        // what is expected to return. This is what we expect the return to say when the function is evaluated.
            expect(capitalize(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]    
            expect(capitalize(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]       
    })
 })

// b) Create the function that makes the test pass.
//Define a function to capitalize the first element in the string
const capitalize = (arr) => {
    //Use .map() HOF to iterate over the array
    arr.map(value => {
        //Return the first index of the string as a capial letter 
        return arr[0].toUpperCase();
    })
}





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Start with describing the function name
describe("vowelIndex", () => {
//Declare the variables to be evaulated
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2
// test what you are looking to return in plain words
    test("return the index of the first instance of a vowel in a string", () => {
    // what is expected to return. This is what we expect the return to say when the function is evaluated.   
        expect(vowelIndex(vowelTester1)).toEqual["1"]
        expect(vowelIndex(vowelTester2)).toEqual["0"]
        expect(vowelIndex(vowelTester3)).toEqual["2"]
    }) 
})

// b) Create the function that makes the test pass.
// // Define a function to find the first instance of a vowel in the given string
const vowelIndex = (str) => {
// return the index location of the first vowel
    return str.search(/[a,e,i,o,u]/g)
}

