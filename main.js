const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Switch to registration form
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

// Switch to login form
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

// Handle registration form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Check if user is already registered
    if (localStorage.getItem(email)) {
        alert('User already registered. Please log in.');
        return;
    }

    // Create a user object
    const user = { username, email, password };
    // console.log(user)

    // Store user data in local storage
    localStorage.setItem(email, JSON.stringify(user));

    // console.log(localStorage)

    alert(`Registration successful for ${username}`);
    registerForm.reset();
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // console.log(email ,password)

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(email));
    console.log(userData);

    // Validate user credentials
    if (userData && userData.password === password) {
        alert(`Login successful for ${userData.username}`);
        loginForm.reset();
    } else{
        alert('Invalid email or password');
    }
});
