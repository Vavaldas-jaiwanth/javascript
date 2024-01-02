let rand=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const lastres=document.querySelector('.lastResult');
const loworhigh=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame= true;

if(playGame)
{
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userinput.value);

        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess))
    {
        alert('Please enter a valid number');

    }
    else if( guess < 1)
    {
        alert('Plese enter a positive number');
    }
    else if(guess > 100)
    {
        alert('Please enter a number less than 100');;
    }
    else{
        prevGuess.push(guess);

        if(numGuess==10){
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${rand}`);
            endGame()
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === rand)
    {
        displayMessage('You Guessed it right');
        endGame()
    }
    else if( guess < rand)
    {
        displayMessage('Number is low');
    }
    else if( guess > rand)
    {
        displayMessage('Number is high');
    }
}

function displayGuess(guess){
    userinput.value='';
    guessslot.innerHTML+=`${guess} `;

    
     lastres.innerHTML=`${10-numGuess}`;
     numGuess++;
}

function displayMessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
    const ngb=document.querySelector('#newgame');

    ngb.addEventListener('click',()=>{
        rand=parseInt(Math.random()*100 +1);
        prevGuess=[];
        numGuess=1;
        guessslot.innerHTML='';
        lastres.innerHTML=`${11-numGuess}`;
        loworhigh.innerHTML='';
        userinput.removeAttribute('disabled')
        startover.removeChild(p);
        playGame=true;
    })
}
function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newgame">Start New Game</h2>  ';
    startover.appendChild(p);
    playGame=false;
    newGame();
}