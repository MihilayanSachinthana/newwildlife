document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Load credentials from JSON file
    fetch("credentials.json")
      .then(response => response.json())
      .then(data => {
        // Check each set of credentials
        var found = false;
        data.credentials.forEach(credential => {
          if (username === credential.username && password === credential.password) {
            found = true;
            // Redirect to department.html
            window.location.href = "home.html";
          }
        });
  
        // If no matching credentials found
        if (!found) {
          // Add your logic for handling incorrect username or password
          alert("Incorrect username or password. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error fetching credentials:", error);
        // Handle error
      });
  });
  