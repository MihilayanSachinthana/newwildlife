document.addEventListener("DOMContentLoaded", function() {
    // Fetch content from introduction.json
    fetch('introduction.json')
        .then(response => response.json())
        .then(data => {
            // Set the page title
            document.title = data.title;

            // Set the introduction heading
            const introductionTitleElem = document.querySelector('h1');
            introductionTitleElem.textContent = data.title;

            // Set the introduction paragraph
            const introductionElem = document.getElementById('introduction');
            introductionElem.textContent = data.introduction;

            // Iterate over each place data
            data.places.forEach((place, index) => {
                const containerElem = document.getElementById(`container${index + 1}`);
                const titleElem = containerElem.querySelector('h3');
                const descriptionElem = containerElem.querySelector('p');

                // Set title and description
                titleElem.textContent = place.title;
                descriptionElem.textContent = place.description;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
