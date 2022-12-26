const div = document.querySelector('#Result');
const head1 = document.createElement('H1');

const button1 = document.querySelector('#Rock');
button1.addEventListener('click', () => {
    const comp = getComputerChoice();
    const playa = 'Rock';

    rockPaperScissors(comp, playa);
});

const button2 = document.querySelector('#Paper');
button2.addEventListener('click', () => {
    const comp = getComputerChoice();
    const playa = 'Paper';

    rockPaperScissors(comp, playa);
});

const button3 = document.querySelector('#Scissors');
button3.addEventListener('click', () => {
    const comp = getComputerChoice();
    const playa = 'Scissors';

    rockPaperScissors(comp, playa);
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
        head1.textContent = "You Win!! Paper Beats Rock!";
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Paper'){
        head1.textContent = "You Lose!! Paper Beats Rock!";
    }
    else if(playerChoice == 'Paper' && computerChoice == 'Scissors'){
        head1.textContent = "You Lose!! Scissors Beats Paper!";
    }
    else if(computerChoice == 'Paper' && playerChoice == 'Scissors'){
        head1.textContent = "You Win!! Scissors Beats Paper!";
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        head1.textContent = "You Win!! Rock Beats Scissors!";
    }
    else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        head1.textContent = "You Lose!! Rock Beats Scissors!";
    }
    else{
        head1.textContent = "It's a tie! a point to both!";
    }

    div.appendChild(head1);
}