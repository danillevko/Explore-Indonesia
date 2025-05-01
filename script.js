
        function playVideo() {
            const video = document.getElementById('myVideo');
            video.style.display = 'block';
            video.play();

            document.querySelector('.video-thumbnail').style.display = 'none';
            document.querySelector('.play-button').style.display = 'none';
        }
