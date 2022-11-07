
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;


function incrementOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
    winning();
}

function incrementTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
    winning();
}

function incrementThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
    winning();
}

function incrementOneGues() {
    guestCount += 1;
    guestScore.textContent = guestCount;
    winning();
}

function incrementTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
    winning();
}

function incrementThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
    winning();
}

function newGame() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    winning();
}


function winning() {
    if ( homeCount > guestCount ) {
        console.log("homecount")
        homeScore.style.border = '5px solid #ffffff';
        guestScore.style.border = '5px solid #080001';
     } else if ( homeCount < guestCount ) {
        console.log("guestcount") 
        guestScore.style.border = '5px solid #ffffff';
        homeScore.style.border = '5px solid #080001';
    } else if ( homeCount === guestCount ) {
       console.log("draw") 
       homeScore.style.border = '5px solid #080001';
       guestScore.style.border = '5px solid #080001';
}

}



