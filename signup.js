<<<<<<< HEAD
document.querySelector('#signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    
    if (response.ok) {
      alert('User registered successfully!');
      window.location.href = 'login.html'; // Redirect to login page
    } else {
      alert(result.message || 'Sign-up failed');
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});
=======
document.querySelector('#signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    
    if (response.ok) {
      alert('User registered successfully!');
      window.location.href = 'login.html'; // Redirect to login page
    } else {
      alert(result.message || 'Sign-up failed');
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});
>>>>>>> 3bc3114 (Initial commit)
