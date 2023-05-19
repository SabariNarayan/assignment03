document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check login credentials
    if (username === "admin" && password === "12345") {
      // Redirect to main page using callback function
      redirectToMainPage();
    } else {
      alert("Invalid username or password");
    }
  });
  
  function redirectToMainPage() {
    // Replace the URL with the main page URL
    window.location.href = "main.html";
  }
  