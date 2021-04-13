console.log('Here are all the available people:', people);

$(readyNow);

// initialize variables
let newFace = randomNumber();
let currentPerson;

//  Link event triggers and write pictures to the DOM
function readyNow() {
    for (let who of people) {
        $('#faces').append(`
        <div class="person" data-person-name="${who.name}">
            <img src="https://github.com/${who.githubUsername}.png?size=250" alt="Profile image of ${who.name}">
        </div>
        `);
    }
    // initialize the random selector
    newGuess();

    // allows you to click on the faces of the instructors
    $('#faces').on('click', ".person", guessWho);
}


// function for clicking on a face
// only two cases, correct and incorrect
function guessWho() {
    if ($(this).closest('div').data().personName === currentPerson) {
        alert('YOU GUESSED IT');
        newGuess();
    } else {
        alert('BAD');
    }
}

// For the 7 instructors, if using fortunate cohort members, you have to change the data.js file.
function newGuess() {
    newFace = randomNumber();
    $('#clickOn').text(people[newFace].name);
    currentPerson = people[newFace].name;
}

// simple function for getting a random number from 0 to 6
function randomNumber() {
    return Math.floor(Math.random()*7);
}