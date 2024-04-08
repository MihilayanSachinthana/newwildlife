// Fetching content from yala.json
fetch('yala.json')
  .then(response => response.json())
  .then(data => {
    // Rendering dynamic content
    const container = document.getElementById('dynamic-content-container');
    data.forEach(item => {
      const section = document.createElement('section');
      section.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      `;
      container.appendChild(section);
    });

    const imageGalleryContainer = document.getElementById('image-gallery');
    data.forEach(item => {
      item.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '100%';
        const column = document.createElement('div');
        column.classList.add('column');
        column.appendChild(img);
        imageGalleryContainer.appendChild(column);
      });

      // edit content
      document.getElementById('editButton1').addEventListener('click', function() {
       
        document.getElementById('dynamic-content-container').contentEditable = true;
    
        document.getElementById('dynamic-content-container').classList.add('editable');
      });

      //edit table
      document.getElementById('editButton2').addEventListener('click', function() {
        // Corrected the selector, removed the dot from the id
        document.getElementById('table-box').contentEditable = true;
        document.getElementById('table-box').classList.add('editable');
      });
    });
    
})
.catch(error => console.error('Error fetching data:', error));