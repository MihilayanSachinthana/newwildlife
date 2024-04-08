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

        //intro section edit
        document.getElementById('editButton1').addEventListener('click', function() {
    
            const introContent = document.querySelector('.intro');
            introContent.contentEditable = true;
    
            introContent.classList.add('editable');
        });

    //  con1 section edit
    document.getElementById('editButton2').addEventListener('click', function() {
        
        const con1Content = document.querySelector('.con1');
        con1Content.contentEditable = true;

        con1Content.classList.add('editable');
    });

    // container section edit
    document.getElementById('editButton3').addEventListener('click', function() {
        
        const titleElem = document.querySelector('#title1');
        const descriptionElem = document.querySelector('#description1');
    
        if (titleElem && descriptionElem) {
            titleElem.contentEditable = true;
            descriptionElem.contentEditable = true;

            titleElem.classList.add('editable');
            descriptionElem.classList.add('editable');
        } else {
            console.error('Title or description element not found.');
        }
    });

    document.getElementById('editButton4').addEventListener('click', function() {
        
        const titleElem = document.querySelector('#title2');
        const descriptionElem = document.querySelector('#description2');
    
        if (titleElem && descriptionElem) {
            titleElem.contentEditable = true;
            descriptionElem.contentEditable = true;

            titleElem.classList.add('editable');
            descriptionElem.classList.add('editable');
        } else {
            console.error('Title or description element not found.');
        }
    });

    document.getElementById('editButton5').addEventListener('click', function() {
      
        const titleElem = document.querySelector('#title3');
        const descriptionElem = document.querySelector('#description3');

        if (titleElem && descriptionElem) {
            titleElem.contentEditable = true;
            descriptionElem.contentEditable = true;
    
            titleElem.classList.add('editable');
            descriptionElem.classList.add('editable');
        } else {
            console.error('Title or description element not found.');
        }
    });
    
    document.getElementById('editButton6').addEventListener('click', function() {
    
        const titleElem = document.querySelector('#title4');
        const descriptionElem = document.querySelector('#description4');

        if (titleElem && descriptionElem) {
            titleElem.contentEditable = true;
            descriptionElem.contentEditable = true;

            titleElem.classList.add('editable');
            descriptionElem.classList.add('editable');
        } else {
            console.error('Title or description element not found.');
        }
    });
    
    
});
