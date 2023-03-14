// Array to contain guess values
let guesses = []
// Variable to track amount of guesses
let tries = 1
// ID for guess range text
let guess_range = document.getElementById('guess-range')
// prompt for 
let range = Math.round(prompt('Enter your max number here.', '1'))

// Verify that range number is an integer and above the minimum value of 1
if (isNaN(range) || range <= 1) {
    range.reload()
} else {
    guess_range.innerHTML = `Your guess range is between 1 and ${range}, good luck!` 
}

// Create random number within range set by user
let num = Math.floor(Math.random() * range) + 1

function do_guess() {
    let guess = Number(document.getElementById('guess').value)
    let message = document.getElementById('message') 
    
    // Verifies that guessed number is an integer and within the range
    if(isNaN(guess)) {
        alert('That is not a number.')
    } else if (guess > range || guess < 1) {
        alert('That number is outside of the range, try again!')
    } else {
        if (num == guess) {
            // Adds guessed number to the array
            guesses.push(guess)
            // Loops through guesses array and shows all the numbers user guessed
            for(let i=0; i<guesses.length; i++) {
                message.innerHTML = `You got it in ${tries} tries! Good guess! <br> Before getting it correct you guessed: ${guesses}.`
                console.log(`${guesses[i]}`)
            }  
            // Adds to amount of tried guesses
            tries++
        } else if (num > guess) {
            message.innerHTML = `Your guess was too <strong>low</strong>. Try again!`
            tries++
            if(guesses.includes(guess)) {
                alert('You\'ve already guessed this number.')
            } else guesses.push(guess)
        } else {
            message.innerHTML = `Your guess was too <strong>high</strong>. Try again!`
            tries++
            if(guesses.includes(guess)) {
                alert('You\'ve already guessed this number.')
            } else guesses.push(guess)
        }
    } 
}



