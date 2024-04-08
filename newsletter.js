// Function to save subscription
function saveSubscription(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('emailInput').value;
    if (email.trim() !== '') {
        var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
        subscriptions.push(email);
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
        alert('Subscription successful!');
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to view subscriptions (for admin)
function viewSubscriptions() {
    var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    if (subscriptions.length > 0) {
        var message = 'Newsletter Subscriptions:\n';
        subscriptions.forEach(function(email, index) {
            message += (index + 1) + '. ' + email + '\n';
        });
        alert(message);
        console.log(message); // Log in console as well
    } else {
        var message = 'No subscriptions yet.';
        alert(message);
        console.log(message); // Log in console as well
    }
}
