console.log('Here are all the available people:', people);

$(readyNow);

let newFace = randomNumber();
let currentPerson;

function readyNow() {
    for (let who of people) {
        $('#faces').append(`
        <div class="person" data-person-name="${who.name}">
            <img src="https://github.com/${who.githubUsername}.png?size=250" alt="Profile image of ${who.name}">
        </div>
        `);
    }
    newGuess();
    $('#faces').on('click', ".person", guessWho);
}

function guessWho() {
    if ($(this).closest('div').data().personName === currentPerson) {
        alert('YOU GUESSED IT');
        newGuess();
    } else {
        alert('BAD');
    }
}

function newGuess() {
    newFace = randomNumber();
    $('#clickOn').text(people[newFace].name);
    currentPerson = people[newFace].name;
}

function randomNumber() {
    return Math.floor(Math.random()*7);
}