const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        deselectButton();
        deselectCharacter();

        button.classList.add('selected');
        characters[index].classList.add('selected');
    });
});


function deselectCharacter() {
    const selectedCharacter = document.querySelector(".character.selected");
    selectedCharacter.classList.remove('selected');
}

function deselectButton() {
    const selectedButton = document.querySelector('.button.selected');
    selectedButton.classList.remove('selected');
}