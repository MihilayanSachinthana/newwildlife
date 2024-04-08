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

    // Add  Edit button
    document.getElementById('editButton1').addEventListener('click', function() {
        
        document.getElementById('headerTitle').contentEditable = true;
        document.getElementById('headerSubtitle').contentEditable = true;
    
        document.getElementById('headerTitle').classList.add('editable');
        document.getElementById('headerSubtitle').classList.add('editable');
    });

    document.getElementById('editButton2').addEventListener('click', function() {
       
        document.getElementById('dynamicTitle').contentEditable = true;
    
        document.getElementById('dynamicTitle').classList.add('editable');
    });

    document.getElementById('editButton3').addEventListener('click', function() {
       
        document.getElementById('dynamicContent').contentEditable = true;

        document.getElementById('dynamicContent').classList.add('editable');
    });
});
