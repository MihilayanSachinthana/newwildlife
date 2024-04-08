document.addEventListener("DOMContentLoaded", function() {
    fetch("animals.json")
        .then(response => response.json())
        .then(data => {
            // Populate page-level title and description
            document.getElementById("pageTitle").innerText = data.title;
            document.getElementById("pageDescription").innerText = data.description;

            // Populate intro paragraph
            document.getElementById("introParagraph").innerText = data.introParagraph;

            const animals = data.animals;
            animals.forEach((animal, index) => {
                const animalCard = document.getElementById(`animal${index + 1}`);
                animalCard.querySelector("#animal" + (index + 1) + "Title").innerText = animal.name;
                animalCard.querySelector("#animal" + (index + 1) + "Description").innerText = animal.description;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
