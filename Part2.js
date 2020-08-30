//Number 1
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName
        }
    }
}
obj.person.sayHi()



//Number 2
//The arguments object and Node lists  are examples of array-like objects




//FUNCTIONS TO WRITE

// SUM EVEN NUMBERS
function sumEvenArguments() {
    return [].slice.call(arguments).reduce((acc,val) => val % 2 === 0 ? acc += val : acc,0)
}
sumEvenArguments(1,2,3,4)// 6


// ARRAY FROM
function arrayFrom(){
   return [...arguments]
}
arrayFrom(1,2,3,4)// [1,2,3,4]


// INVOKE MAX
let counter = 0
function invokeMax(func,max){
    return function(){
        counter++
        if(counter > max){
            return 'Maxed out!'
        }
        else{
            return func.apply(this,arguments)
        }
    }
}

function add(a,b){
    return a+b
}

var addOnlyThreeTimes = invokeMax(add,3)

addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"





// GUESSING GAME
function guessingGame(amount){
    let answer = Math.floor(Math.random()*10)
    let guesses = 0
    return function(guess){
         if(guess === answer){
             guesses++
             return `You got it!`
            }
        if(guesses === amount) {
            guesses++
            return `No more guesses, the answer was ${answer}`
        }
        if(guesses > amount) {
          return `You are all done playing!`
          }
        else if(guess > answer) {
            guesses++
            return `You're too high!`
        }
        else if(guess < answer) {
            guesses++
            return `You're too low!`
        }
    }
}

var game2 = guessingGame(3)
game2(5) // Too high, too low, or you got it!
game2(3) // Too high, too low, or you got it!
game2(5) // Too high, too low, or you got it!
game2(1) // "No more guesses the answer was ans" 
game2(1) // "You are all done playing!"

