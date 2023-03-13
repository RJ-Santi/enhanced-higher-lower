let guess_range = document.getElementById('guess-range')

function do_range() {
    let range = prompt('Enter your max number here.', '0')
    
    if(range != null) {
        guess_range.innerHTML = `Your guess range is between 1 and ${range}, good luck!`
    }
}

let num = Math.floor(Math.random() * 20) + 1

function do_guess() {
    let guess = Number(document.getElementById('guess').value)
    let message = document.getElementById('message')

    if (num == guess) {
        message.innerHTML = 'You got it! Good guess!'
    } else if (num > guess) {
        message.innerHTML = `Your guess was too low. Try again!`
    } else {
        message.innerHTML = `Your guess was too high. Try again!`
    }
}