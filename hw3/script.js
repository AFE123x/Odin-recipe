function randomnum(a){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber - a;
}

const stuff = document.getElementById('dades');

document.getElementById('rock').onclick = () => {
    if(randomnum(1) === 0){
        stuff.innerText = 'You win';
    }
    else{
        stuff.innerText = 'You lose';
    }
};

document.getElementById('paper').onclick = () => {
    if(randomnum(2) === 0){
        stuff.innerText = 'You win';
    }
    else{
        stuff.innerText = 'You lose';
    }
};

document.getElementById('scissor').onclick = () => {
    if(randomnum(3) === 0){
        stuff.innerText = 'You win';
    }
    else{
        stuff.innerText = 'You lose';
    }
};
