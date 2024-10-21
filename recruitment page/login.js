// Predefined valid employee credentials (you can replace this with real authentication later)
const validEmployeeID = "sandhya";
const validPassword = "sandhya123";

// Get references to input elements and message box once
const employeeIDInput = document.getElementById("employeeID");
const passwordInput = document.getElementById("password");
const messageBox = document.getElementById("loginMessage");
const loginForm = document.getElementById("loginForm");

// Handle form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    
    const employeeID = employeeIDInput.value;
    const password = passwordInput.value;

    messageBox.style.display = "block"; 
    messageBox.classList.remove("alert-success", "alert-danger", "d-none");

    // Check if the credentials match
    if (employeeID === validEmployeeID && password === validPassword) {
        
        messageBox.classList.add("alert", "alert-success");
        messageBox.textContent = "Login successful! Welcome!";
        setTimeout(function() {
            window.location.href = "hr.html";
        }, 2000);
    } else {
        
        messageBox.classList.add("alert", "alert-danger");
        messageBox.textContent = "Wrong credentials! Please try again.";
        employeeIDInput.value = ""; 
        passwordInput.value = "";
    }
});