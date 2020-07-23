const hangmanPropositions = ['drzewo', 'trawa'];
const btn = document.querySelector('.start');
const letterContainer = document.querySelector('.letter-container');
const startRenderHangman = () => {
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



const img = document.querySelector('.img-container img');

const renderLetters = function() {
    const letter = document.querySelectorAll('.letter');

    if (letter.length > 0) {
        letter.forEach(element => {
            letterContainer.removeChild(element);
        })
    }
    for (let i = 65; i < 90; i++) {
        const div = document.createElement('div');
        div.textContent = String.fromCharCode(i);
        div.classList.add('letter')
        letterContainer.appendChild(div);
    }
}

const listenLetter = (item, tries) => {
    const checkLetter = (ev) => {
        const filteredLetters = item.filter(el => el == ev.target.innerText)
        console.log(ev.target.innerText);
        console.log(filteredLetters);

        if (filteredLetters.length > 0) {
            console.log(true);
        } else {
            if (!ev.target.classList.contains('disabled')) {
                console.log('odejmuje')
                    ++tries;
            }

        }

        ev.target.classList.add('disabled');
        img.src = `assets/level${tries<=6 ? tries : 6}.jpg`
        console.log(tries)
    }
    console.log([...letterContainer.children]);
    [...letterContainer.children].forEach(element => {
        console.log('element')
        element.addEventListener('click', (ev) => checkLetter(ev));
    })
}