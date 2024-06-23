function showSuccessMessage(sectionId, message) {
    var successMessage = document.getElementById(sectionId + '-success-message');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000); // Hide the message after 5 seconds
    return false; // Prevent form submission
}
