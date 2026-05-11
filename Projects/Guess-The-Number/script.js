let randomNumber = Math.floor(Math.random()*10 + 1);

let guess = 1;

document.getElementById("submitguess").addEventListener("click" , function(){
    let number = document.getElementById("guessField").value;

    if(number == randomNumber)
    {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN🎉🎉🎉" + guess + " GUESS")
    }

    else if(number > randomNumber)
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER😔😔😔")
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER😔😔😔")
    }
})