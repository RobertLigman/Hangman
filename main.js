const hangmanPropositions = ['drzewo', 'trawa'];
const btn = document.querySelector('.start');
const startRenderHangman = () => {
    const hangmanContainer = document.getElementById('hangman-letters-container');
    const el = document.querySelectorAll('.hangman-placeholders')
        // document.querySelector('.hangman-letters-container').removeChild(el);
    if (el.length > 0) {
        el.forEach(element => {
            hangmanContainer.removeChild(element);
        })
    }

    const rngRender = Math.floor(Math.random() * hangmanPropositions.length);
    const hangmanProposition = hangmanPropositions[rngRender].split('');
    hangmanProposition.forEach((element) => {

        const div = document.createElement('div');
        div.textContent = element;
        div.classList.add('hangman-placeholders')

        hangmanContainer.appendChild(div)
    })
}
btn.addEventListener('click', startRenderHangman);





const renderLetters = function() {
    for (let i = 65; i < 90; i++) {
        const div = document.createElement('div');
        div.textContent = String.fromCharCode(i);
        div.classList.add('letter')
        document.querySelector('.letter-container').appendChild(div);
    }
}
renderLetters();