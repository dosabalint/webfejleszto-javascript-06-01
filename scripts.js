// elemek összegyűjtése
let divGame = document.getElementById('game');

// játék elemeinek összegyűjtése
let box = new Box('box', divGame);

GenerateBalls();

//////////////////////////////////////////////////

function GenerateBalls(){
    new Ball(divGame);

    setTimeout(GenerateBalls, 2000);
}