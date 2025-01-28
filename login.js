document.querySelector('#login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    
    if (response.ok) {
      alert('Login successful!');
      window.location.href = '/dashboard.html'; // Redirect to dashboard or homepage
    } else {
      alert(result.message || 'Login failed');
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});

// After a successful login
fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email, // email input value
    password: password, // password input value
  }),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Store the token in localStorage or cookies
      localStorage.setItem('token', data.token);
      
      // Redirect to the dashboard or home page
      window.location.href = '/dashboard'; // Or any page after login
    } else {
      alert(data.message); // Show error message if login failed
    }
  })
  .catch((error) => console.error('Error:', error));

  if (data.success) {
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard.html'; // Redirect to dashboard
  }
  