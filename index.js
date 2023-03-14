// Array to contain guess values
const guesses = []
// Variable to track amount of guesses
let tries = 1
// ID for guess range text
let guess_range = document.getElementById('guess-range')
// prompt for 
let range = Math.round(prompt('Enter your max number here.', '1'))

if (isNaN(range) || range <= 1) {
    location.reload()
} else {
    guess_range.innerHTML = `Your guess range is between 1 and ${range}, good luck!` 
}


let num = Math.floor(Math.random() * range) + 1

function do_guess() {
    let guess = Number(document.getElementById('guess').value)
    let message = document.getElementById('message')

    if(isNaN(guess)) {
        alert('That is not a number.')
    } else if (guess > range || guess < 1) {
        alert('That number is outside of the range, try again!')
    } else {
        if (num == guess) {
            message.innerHTML = `You got it in ${tries} tries! Good guess!`
            tries++
            guesses.push(guess)
        } else if (num > guess) {
            message.innerHTML = `Your guess was too low. Try again!`
            tries++
            if(guesses.includes(guess)) {
                alert('You\'ve already guessed this number.')
            } else guesses.push(guess)
        } else {
            message.innerHTML = `Your guess was too high. Try again!`
            tries++
            if(guesses.includes(guess)) {
                alert('You\'ve already guessed this number.')
            } else guesses.push(guess)
        }
    } 
}



