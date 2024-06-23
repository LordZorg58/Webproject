// Function to validate the form
function validateForm() {
    let isValid = true;

    const name = document.getElementById("title").value.trim();
    const role = document.getElementById("title").value.trim();
    const phoneNumber = document.getElementById("price").value.trim();
    const id = document.getElementById("taxes").value.trim();
    const email = document.getElementById("count").value.trim();

    // Validate Name (must not be empty and contain only letters)
    if (name === "") {
        alert("Name cannot be empty.");
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Name contains invalid characters. Please use letters only.");
        isValid = false;
    }

    // Validate Role (must not be empty and contain only letters)
    if (role === "") {
        alert("Role cannot be empty.");
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(role)) {
        alert("Role contains invalid characters. Please use letters only.");
        isValid = false;
    } 

    // Validate Phone Number (must be a valid phone number)
    if (phoneNumber === "") {
        alert("Phone number cannot be empty.");
        isValid = false;
    } else if (!/^\d+$/.test(phoneNumber)) {
        alert("Phone number must contain only digits.");
        isValid = false;
    } else if (phoneNumber.length < 11) {
        alert("Phone number cannot be less than 11 digits.");
        isValid = false;
    } else if (phoneNumber.length > 11) {
        alert("Phone number cannot be more than 11 digits.");
        isValid = false;
    }

    // Validate ID (must be a number)
    if (id === "") {
        alert("ID cannot be empty.");
        isValid = false;
    } else if (!/^\d+$/.test(id)) {
        alert("ID must contain only digits.");
        isValid = false;
    }

    // Validate Email (must be a valid email format)
    if (email === "") {
        alert("Email cannot be empty.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Email format is invalid.");
        isValid = false;
    }

    return isValid;
}

// Event listener for the "ADD" button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');

    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            const isFormValid = validateForm();

            if (!isFormValid) {
                event.preventDefault(); // Prevents the default action if validation fails
            } else {
                alert("Form placed successfully!"); // Display this message when all validation is successful
            }
        });
    } else {
        console.error("Submit button not found.");
    }
});
