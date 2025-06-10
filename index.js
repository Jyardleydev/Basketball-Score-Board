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