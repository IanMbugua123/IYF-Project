// Get the JWT token from localStorage
const token = localStorage.getItem('token');

// Check if the user is logged in (token should exist)
if (!token) {
  window.location.href = '/login.html'; // Redirect to login if no token
}

// Fetch user profile data from the backend
fetch('http://localhost:5000/api/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Check if the user data exists
      if (data.user) {
        document.getElementById('user-email').innerText = data.user.email;
        document.getElementById('user-name').innerText = data.user.name;
      } else {
        console.error('User data not found');
      }
    } else {
      alert(data.message); // Handle error if login failed
      window.location.href = '/login.html'; // Redirect to login page if error
    }
  })
  .catch((error) => {
    console.error('Error fetching profile:', error);
    window.location.href = '/login.html'; // Redirect to login page if error
  });
