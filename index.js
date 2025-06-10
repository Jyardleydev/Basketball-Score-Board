let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function homeIncrement1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeIncrement2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeIncrement3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestIncrement1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestIncrement2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestIncrement3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

let resetScore = document.getElementById("reset-score")

function reset() {
    homeCount = 0
    homeScore.textContent = homeCount
    guestCount = 0
    guestScore.textContent = guestCount
    
}

window.homeIncrement1 = homeIncrement1;     //needed to expose all my functions globably
window.homeIncrement2 = homeIncrement2;     //the code works locally without these but 
window.homeIncrement3 = homeIncrement3;     //would not work when deployed to netlify
window.guestIncrement1 = guestIncrement1;
window.guestIncrement2 = guestIncrement2;
window.guestIncrement3 = guestIncrement3;
window.reset = reset;