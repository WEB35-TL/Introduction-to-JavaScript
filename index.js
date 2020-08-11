/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18

votingAge >= 18
  ? console.log('Task 1a: ', true)
  : console.log('Task 1a: ', false)

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let typo = 'hajile'
let firstName = 'elijah'

typo !== firstName ? (typo = firstName) : (typo = typo)
console.log('Task 1b: ', typo)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let yearString = '1999'

typeof yearString === 'string' ? Number.parseInt(yearString) : yearString
console.log('Task 1c: ', typeof yearString, yearString)

//Task d: Write a function to multiply a*b

const multiply = (a, b) => a * b
console.log('Task 1d: ', multiply(5, 5))

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

const ageInDogYears = age => age * 7
console.log('Task 2: ', ageInDogYears(18))

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, dogAge) {
  if ((dogAge >= 12, weight <= 5)) {
    console.log('Task 3: ', weight * 0.05)
  } else if ((dogAge >= 12, weight <= 10)) {
    console.log('Task 3: ', weight * 0.04)
  } else if ((dogAge >= 12, weight <= 15)) {
    console.log('Task 3: ', weight * 0.03)
  } else if ((dogAge >= 12, weight > 15)) {
    console.log('Task 3: ', weight * 0.02)
  }
}

dogFeeder(15, 1)

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// let play = ['rock', 'paper', 'scissors']
// let computer = play[Math.floor(Math.random() * play.length)]
// // console.log(computer)

// ************* SEE STRETCH *************

// const playGame = choice => {
//   if (choice === computer) {
//     console.log(
//       'Task 4: ',
//       `Draw! You chose ${choice}, computer chose ${computer}`
//     )
//   } else if (
//     (choice === 'rock' && computer === 'scissors') ||
//     (choice === 'paper' && computer === 'rock') ||
//     (choice === 'scissors' && computer === 'paper')
//   ) {
//     console.log(
//       'Task 4: ',
//       `You Win! You chose ${choice}, computer chose ${computer}`
//     )
//   } else {
//     console.log(
//       'Task 4: ',
//       `You Lose! You chose ${choice}, computer chose ${computer}`
//     )
//   }
// }

// playGame('rock')

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kmToMiles = km => km / 1.609
console.log('Task 5a: ', kmToMiles(9))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feetToCm = feet => feet * 30.48
console.log('Task 5b: ', feetToCm(20))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(startingNum) {
  let i
  for (i = 1; i < startingNum; i++) {
    console.log(
      'Task 6: ',
      `
      ${i + 1} bottles of soda on the wall, ${i + 1} bottles of soda, 
      take one down pass it around ${i} bottles of soda on the wall`
    )
  }
}

annoyingSong(4)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

const gradeCalculator = grade => {
  if (grade >= 90 && grade <= 100) {
    return 'A'
  } else if (grade >= 80 && grade <= 89) {
    return 'B'
  } else if (grade >= 70 && grade <= 79) {
    return 'C'
  } else if (grade >= 60 && grade <= 69) {
    return 'D'
  } else if (grade <= 60) {
    return 'F'
  }
}

console.log('Task 7: ', gradeCalculator(96))
console.log('Task 7: ', gradeCalculator(86))
console.log('Task 7: ', gradeCalculator(76))
console.log('Task 7: ', gradeCalculator(66))
console.log('Task 7: ', gradeCalculator(56))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function countVowels(str) {
  let counts = 0
  for (let i = 0; i < vowels.length; i++) {
    if (vowels.includes(str[i])) {
      counts++
    }
  }
  return console.log('Stretch 1:', counts)
}

countVowels('hello')
countVowels('aaaaa')

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let play = ['rock', 'paper', 'scissors']
let computer = play[Math.floor(Math.random() * play.length)]
// console.log(computer)

const playGame = choice => {
  if (choice === computer) {
    console.log(
      'Stretch 2: ',
      `Draw! You chose ${choice}, computer chose ${computer}`
    )
  } else if (
    (choice === 'rock' && computer === 'scissors') ||
    (choice === 'paper' && computer === 'rock') ||
    (choice === 'scissors' && computer === 'paper')
  ) {
    console.log(
      'Stretch 2: ',
      `You Win! You chose ${choice}, computer chose ${computer}`
    )
  } else {
    console.log(
      'Stretch 2: ',
      `You Lose! You chose ${choice}, computer chose ${computer}`
    )
  }
}

let playerSelection = prompt('Choose: Rock. Paper. Scissors.').toLowerCase()
playGame(playerSelection)
