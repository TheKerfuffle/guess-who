console.log('Here are all the available people:', people);

$(readyNow);

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
    console.log($(this).closest('div').data());
    ;
}


function newGuess() {
    let newFace = Math.floor(Math.random()*7);

    switch (newFace) {
        case 0:
            $('#clickOn').text(people[0].name);
            break;
        case 1:
            $('#clickOn').text(people[1].name);
            break;
        case 2:
            $('#clickOn').text(people[2].name);
            break;
        case 3:
            $('#clickOn').text(people[3].name);
            break;
        case 4:
            $('#clickOn').text(people[4].name);
            break;
        case 5:
            $('#clickOn').text(people[5].name);
            break;
        case 6:
            $('#clickOn').text(people[6].name);
            break;

    }
}