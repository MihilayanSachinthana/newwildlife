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
    });
    
})
.catch(error => console.error('Error fetching data:', error));