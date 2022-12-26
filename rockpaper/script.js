const button = document.querySelector('#playbutton');
button.addEventListener('click', () => {
    game();
});

function getComputerChoice(){
    const rand = Math.random();
    choice = parseInt((rand*1000)%3);

    switch(choice){
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function rockPaperScissors(computerChoice, playerChoice){
    if(computerChoice == 'Rock' && playerChoice == 'Paper'){
        console.log("You Win!! Paper Beats Rock!");
        return 1;
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Paper'){
        console.log("You Lose!! Paper Beats Rock!");
        return 0;
    }
    else if(playerChoice == 'Paper' && computerChoice == 'Scissors'){
        console.log("You Lose!! Scissors Beats Paper!");
        return 0;
    }
    else if(computerChoice == 'Paper' && playerChoice == 'Scissors'){
        console.log("You Win!! Scissors Beats Paper!");
        return 1;
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        console.log("You Win!! Rock Beats Scissors!");
        return 1;
    }
    else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        console.log("You Win!! Rock Beats Scissors!");
        return 0;
    }
    else{
        console.log("It's a tie! a point to both!")
        return 2;
    }
}

function game(){

    var points = 0;

    for(var i =0; i<5; i++){
        const comp = getComputerChoice();
        const playa = window.prompt("Enter Rock, Paper or Scissors");

        var a = rockPaperScissors(comp, playa);
        var tie =0;

        if(a==1){
            points++;
        }
        if(a==2){
            points++;
            tie++;
        }
    }

    console.log(`Your Points: ${points}, Computer's Points: ${(6-points+tie)}`);
}