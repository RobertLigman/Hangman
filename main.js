const hangmanPropositions = ['drzewo', 'trawa'];
const btn = document.querySelector('.start');
const letterContainer = document.querySelector('.letter-container');
const img = document.querySelector('.img-container img');
const winnerOrLoser = document.querySelector('.winner-loser');
let countGoodLetters = 0;
let isStillInGame = false;
const startRenderHangman = () => {
    isStillInGame = true;
    winnerOrLoser.textContent = '';
    countGoodLetters = 0;
    const tries = 0;
    const hangmanContainer = document.getElementById('hangman-letters-container');
    const el = document.querySelectorAll('.hangman-placeholders')
        // document.querySelector('.hangman-letters-container').removeChild(el);
    if (el.length > 0) {
        el.forEach(element => {
            hangmanContainer.removeChild(element);
        })
    }

    const rngRender = Math.floor(Math.random() * hangmanPropositions.length);
    const hangmanProposition = hangmanPropositions[rngRender].toUpperCase().split('');

    hangmanProposition.forEach((element) => {

        const div = document.createElement('div');
        // div.textContent = element;
        div.classList.add('hangman-placeholders')

        hangmanContainer.appendChild(div)
    })
    renderLetters();
    listenLetter(hangmanProposition, tries);
}
btn.addEventListener('click', startRenderHangman);





const renderLetters = function() {
    const letter = document.querySelectorAll('.letter');

    if (letter.length > 0) {
        letter.forEach(element => {
            letterContainer.removeChild(element);
        })
    }
    for (let i = 65; i <= 90; i++) {
        const div = document.createElement('div');
        div.textContent = String.fromCharCode(i);
        div.classList.add('letter')
        letterContainer.appendChild(div);
    }
}

const listenLetter = (item, tries, finalAnwser) => {



    const checkLetter = (ev) => {
        if (isStillInGame) {


            const filteredLetters = item.filter(el => el == ev.target.innerText);
            const placeletter = document.querySelectorAll('.hangman-placeholders');
            if (filteredLetters.length > 0) {
                console.log(true);
                item.forEach((element, index) => {
                    if (element == filteredLetters[0]) {


                        placeletter[index].textContent = element;
                        ++countGoodLetters;
                        // console.log(countGoodLetters)
                    }
                })
            } else {
                if (!ev.target.classList.contains('disabled')) {
                    // console.log('odejmuje')
                    ++tries;
                }

            }
            ev.target.classList.add('disabled');
            img.src = `assets/level${tries<=6? tries : 6}.jpg`;
            if (countGoodLetters == item.length) {
                winnerOrLoser.textContent = 'Wygrałeś';
                isStillInGame = false;
            }
            if (tries == 6) {
                winnerOrLoser.textContent = 'Przegrałeś';
                isStillInGame = false;
            }

        }
    }



    [...letterContainer.children].forEach(element => {
        element.addEventListener('click', (ev) => checkLetter(ev));
    })
}