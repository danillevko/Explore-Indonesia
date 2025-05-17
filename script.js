
        function playVideo() {
            const video = document.getElementById('myVideo');
            video.style.display = 'block';
            video.play();

            document.querySelector('.video-thumbnail').style.display = 'none';
            document.querySelector('.play-button').style.display = 'none';
        }

        function toggleContent() {
   const buttons = document.querySelectorAll('.process-link-mobile');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const container = button.closest('.show-more-container'); 
    const content = container.querySelector('.more-text');
    const mainText = container.querySelector('.process-span-mobile');

    content.classList.toggle('show');
    mainText.classList.toggle('hidden');

    if (content.classList.contains('show')) {
      button.textContent = 'Show less';
    } else {
      button.textContent = 'Show more';
    }
  });
});
        }