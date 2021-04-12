console.log('Here are all the available people:', people);

$(readyNow);

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
        alert;
    }
}


function newGuess() {
    let newFace = Math.floor(Math.random()*7);

    switch (newFace) {
        case 0:
            $('#clickOn').text(people[0].name);
            currentPerson = people[0].name;
        case 1:
            $('#clickOn').text(people[1].name);
            currentPerson = people[1].name;
        case 2:
            $('#clickOn').text(people[2].name);
            currentPerson = people[2].name;
        case 3:
            $('#clickOn').text(people[3].name);
            currentPerson = people[3].name;
        case 4:
            $('#clickOn').text(people[4].name);
            currentPerson = people[4].name;
        case 5:
            $('#clickOn').text(people[5].name);
            currentPerson = people[5].name;
        case 6:
            $('#clickOn').text(people[6].name);
            currentPerson = people[6].name;
    }

}