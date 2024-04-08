document.addEventListener('DOMContentLoaded', function () {
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            // Update header dynamically
            document.getElementById('headerTitle').textContent = data.header.title;
            document.getElementById('headerSubtitle').textContent = '-' + data.header.subtitle + '-';

            // Update introduction section dynamically
            document.getElementById('dynamicTitle').textContent = data.introduction.title;
            document.getElementById('dynamicContent').textContent = data.introduction.content;

            // Update video source dynamically
            document.querySelector('.video-container video').src = data.video.src;
        })
        .catch(error => console.error('Error fetching content:', error));
});
