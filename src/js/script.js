const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        characters.forEach(char => char.classList.remove('selected'));

        button.classList.add('selected');
        characters[index].classList.add('selected');

        characters.forEach(character => {
            const imageOrVideo = character.querySelector('.image, .video');
            imageOrVideo.style.transition = 'opacity 0.5s ease-in-out';
            imageOrVideo.style.opacity = '0';
        });

        setTimeout(() => {
            const selectedCharacter = characters[index];
            const selectedImageOrVideo = selectedCharacter.querySelector('.image, .video');
            selectedImageOrVideo.style.opacity = '1';
        }, 50);
    });
});