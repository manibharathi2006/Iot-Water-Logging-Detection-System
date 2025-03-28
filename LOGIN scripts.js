    // Predefined credentials
const validUsername = 'staf';
const validPassword = '1234';

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or perform desired actions
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password.';
    }
    return false; // Prevent form submission
}
