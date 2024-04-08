// Fetch data from JSON file
fetch('department.json')
  .then(response => response.json())
  .then(data => {
    // Populate the title
    document.getElementById('dynamicTitle').textContent = data.title;
    // Populate the paragraph
    document.getElementById('dynamicParagraph').textContent = data.content;
    // Populate the h5 element
    document.getElementById('dynamicHeading').textContent = data.heading;
    // Populate the h2 element
    document.getElementById('dynamicHeading2').textContent = data.sectionTitle;

    // Populate the table
    const tableData = data.protectedAreas;
    const table = document.getElementById('customers');
    tableData.forEach(entry => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = entry.area;
      cell2.textContent = entry.contact;
    });

    // Populate the image gallery
    const gallery = document.querySelector('.image-gallery');
    data.imageUrls.forEach(url => {
      const listItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = url;
      img.alt = '';
      listItem.appendChild(img);
      gallery.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
