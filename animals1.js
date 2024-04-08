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
  
        //edit title
        document.getElementById('editButton1').addEventListener('click', function() {
      
        document.getElementById('pageTitle').contentEditable = true;
        document.getElementById('pageDescription').contentEditable = true;

        document.getElementById('pageTitle').classList.add('editable');
        document.getElementById('pageDescription').classList.add('editable');
         });

         //edit animal box
        document.getElementById('editButton2').addEventListener('click', function() {
            
            document.getElementById('animal1Title').contentEditable = true;
            document.getElementById('animal1Description').contentEditable = true;
    
            document.getElementById('animal1Title').classList.add('editable');
            document.getElementById('animal1Description').classList.add('editable');
        });
        
            document.getElementById('editButton3').addEventListener('click', function() {
                
                document.getElementById('animal2Title').contentEditable = true;
                document.getElementById('animal2Description').contentEditable = true;
        
                document.getElementById('animal2Title').classList.add('editable');
                document.getElementById('animal2Description').classList.add('editable');
            });
        
                document.getElementById('editButton4').addEventListener('click', function() {
                    
                    document.getElementById('animal3Title').contentEditable = true;
                    document.getElementById('animal3Description').contentEditable = true;
            
                    document.getElementById('animal3Title').classList.add('editable');
                    document.getElementById('animal3Description').classList.add('editable');
                });

                    document.getElementById('editButton5').addEventListener('click', function() {
                        
                        document.getElementById('animal4Title').contentEditable = true;
                        document.getElementById('animal4Description').contentEditable = true;
                
                        document.getElementById('animal4Title').classList.add('editable');
                        document.getElementById('animal4Description').classList.add('editable');
                    });

                        document.getElementById('editButton6').addEventListener('click', function() {
                            
                            document.getElementById('animal5Title').contentEditable = true;
                            document.getElementById('animal5Description').contentEditable = true;
                    
                            document.getElementById('animal5Title').classList.add('editable');
                            document.getElementById('animal5Description').classList.add('editable');
                        });

                            document.getElementById('editButton7').addEventListener('click', function() {
                    
                                document.getElementById('animal6Title').contentEditable = true;
                                document.getElementById('animal6Description').contentEditable = true;
                    
                                document.getElementById('animal6Title').classList.add('editable');
                                document.getElementById('animal6Description').classList.add('editable');
                            });

                                //edit last paragraph
                                document.getElementById('editButton8').addEventListener('click', function() {

                                    document.getElementById('introParagraph').contentEditable = true;

                                    document.getElementById('introParagraph').classList.add('editable');
                                });
        })
        .catch(error => console.error('Error fetching data:', error));
  });
 