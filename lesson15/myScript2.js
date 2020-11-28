let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    //прочитати значення з поля для введення та перетворити на число
    let userGuess = Number(guessField.value);
    //Якщо це 1 спроба, тоді записуємо початкову фразу
    if (guessCount === 1) {
        guesses.textContent = 'Попередні спроби: ';
    }
    //Далі кожен раз дописуємо новве значення , що вказує гравець
    guesses.textContent += userGuess + ' ';
    //якщо гравець ввів чило, що дорівнює рандомному
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Вітаємо! Ти вгадав!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        //виклик функції коли гра закінчена
        setGameOver();
    // інакше, якщо було вже 10 спроб
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    //інакше вивести повідомлення про невдалу спробу
    } else {
        lastResult.textContent = 'Неправильно!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Остання спроба була менша!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Остання спроба була більша!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
//функція, що викликається, коли гру закінчено
function setGameOver() {
    //робимо недоступними поля для введення та кнопку
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //створюємо новий елемент кнопку, яка почне нову гру
    resetButton = document.createElement('button');
    resetButton.textContent = 'Нова гра!';
    document.body.append(resetButton);
    //додаємо слухача події click до кнопки
    resetButton.addEventListener('click', resetGame);
}
//функція, що перезавантаження гри
function resetGame() {
    //скидаємо лічильник спроб знову в 1
    guessCount = 1;
    //обнуляємо вміст всіх тегів p , де розміщувались результати
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }
    //видаляємо кнопку
    resetButton.parentNode.removeChild(resetButton);
    //робимо знову доступними поля для введення
    guessField.disabled = false;
    guessSubmit.disabled = false;
    //обнуляємо поле для введення та ставимо у нього курсов
    guessField.value = '';
    guessField.focus();
    //змінюємо колір заливки для останнього результату у білий
    lastResult.style.backgroundColor = 'white';
    //знову викидаємо рандомне число
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

//додаємо слухача для події клік
guessSubmit.addEventListener('click', checkGuess);