document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user details
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Create an object to store the details along with the timestamp
    const userDetails = {
        name: name,
        phone: phone,
        password: password,
        timestamp: Date.now()
    };

    // Get existing details from localStorage
    const existingDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    // Add the new entry
    existingDetails.push(userDetails);

    // Save back to localStorage
    localStorage.setItem('userDetails', JSON.stringify(existingDetails));

    // Redirect to thankyou.html
    window.location.href = 'thankyou.html';
});
