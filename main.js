const hangmanPropositions = ['drzewo', 'trawa'];
const btn = document.querySelector('.start');
const letterContainer = document.querySelector('.letter-container');
const img = document.querySelector('.img-container img');


const startRenderHangman = () => {
    const finalAnwser = [];
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
    listenLetter(hangmanProposition, tries, finalAnwser);
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
const winnerOrLoser = document.querySelector('.winner-loser');
let countGoodLetters = 0;
const listenLetter = (item, tries, finalAnwser) => {
    const checkLetter = (ev) => {
            const filteredLetters = item.filter(el => el == ev.target.innerText)
                // console.log(ev.target.innerText);
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


                // placeletter.forEach((el, index) => {
                //     // console.log(item)

                //     if (el.textContent == item[index]) {
                //         ++countGoodLetters;
                //         console.log(el.textContent)
                //         console.log(countGoodLetters)

                //     }
                if (countGoodLetters == item.length) {
                    winnerOrLoser.textContent = 'Wygrałeś';
                }
                // })


                // console.log(item);
                // filteredLetters
            } else {
                if (!ev.target.classList.contains('disabled')) {
                    // console.log('odejmuje')
                    ++tries;
                }

            }

            ev.target.classList.add('disabled');

            if (tries == 6) {
                winnerOrLoser.textContent = 'Przegrałeś';
            }
            img.src = `assets/level${tries<=6? tries : 6}.jpg`
                // console.log(tries)
        }
        // console.log([...letterContainer.children]);
        [...letterContainer.children].forEach(element => {
            // console.log('element')
            element.addEventListener('click', (ev) => checkLetter(ev));
        })
}