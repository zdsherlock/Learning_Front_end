function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '上次猜的数: ';
    }
    guesses.textContent += userGuess + '';

    if (userGUess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!Game Over!!!';
        setGameOver()
    } else {
        lastResult.textContext = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.text.Content = '你猜低了！';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = '你猜高了';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click',checkGuess);
