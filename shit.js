console.log('fuck you');

function SetTheBoard() {

    
    // get the canvas object
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    
    
    // ┌──────────────┐
    // │ Side To Side │
    // └──────────────┘
    // the width is 500. Let's make the padding 50, that's 460 that we can work with. We need to divide it into thirds, so 460/3, 153 1/3
    ctx.fillRect(155, 50, 20, 400);
    ctx.fillRect(305, 50, 20, 400);

    // ┌──────────────────┐
    // │ Height To Height │
    // └──────────────────┘
    // the height is also 500. use the same shit as above
    ctx.fillRect(50, 155, 400, 20);
    ctx.fillRect(50, 305, 400, 20);
};

function SetHeader(whatwesettin) {
    ctx = document.getElementById("shithead");

    ctx.innerHTML = `${whatwesettin} meow`
};

function ChooseFirstPlayer() {
    // we'll use math.random or something
    const random = Math.random();
    
    var player = (Math.round(random) + 1);
    switch (player) {
        case 1:
            player = "X";
        case 2: 
            player = "O";
    };
    
    console.log(`THE COUNCIL HAS DECIDED: PLAYER ${player} WILL PLAY`);
    return player;
}

// page loaded
SetTheBoard();
SetHeader(ChooseFirstPlayer());