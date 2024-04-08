// leopard.js

document.addEventListener("DOMContentLoaded", function () {
  fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
      displayContent(data);
    })
    .catch(error => console.error('Error fetching dynamic content:', error));
});

function displayContent(data) {
  const introduction = data.introduction;
  const venues = data.venues;
  const features = data.features;
  const protection = data.protection;
  const title = data.title;

  const container = document.querySelector('.containerA');
  const titleElement = document.querySelector('h1');

  container.innerHTML = `
    <p>${introduction.paragraph1}</p>
    <p>${introduction.paragraph2}</p>
    <h4>${venues.title}</h4>
    <ul>
      ${venues.descriptions.map(description => `<li>${description}</li>`).join('')}
    </ul>
    <h4>${features.title}</h4>
    <ul>
      ${features.featuresList.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <h4>${protection.title}</h4>
    <ul>
      ${protection.protectionList.map(point => `<li>${point}</li>`).join('')}
    </ul>
  `;
  titleElement.textContent = title;

  document.getElementById('editButton1').addEventListener('click', function() {
  // Enable content editable mode for dynamically loaded content
  document.getElementById('dynamicTitle').contentEditable = true;

  // Add a CSS class to highlight editable areas
  document.getElementById('dynamicTitle').classList.add('editable');
  
});

document.getElementById('editButton2').addEventListener('click', function() {
  // Enable content editable mode for dynamically loaded content
  document.getElementById('containerA').contentEditable = true;

  // Add a CSS class to highlight editable areas
  document.getElementById('containerA').classList.add('editable');
  
});
}

