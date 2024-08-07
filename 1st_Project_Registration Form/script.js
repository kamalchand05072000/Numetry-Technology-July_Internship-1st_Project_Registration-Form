document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Custom validation messages
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
        alert('Full name can only contain letters and spaces.');
        return;
    }

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Enter a valid 10-digit mobile number.');
        return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
        alert('Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.');
        return;
    }

    document.getElementById('successMessage').textContent = 'Kamal Verma registered successfully!';
    document.getElementById('successMessage').style.display = 'block';
});
