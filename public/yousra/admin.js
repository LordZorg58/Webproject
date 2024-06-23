// Function to validate the form
function validateForm() {
    let isValid = true;

    const title = document.getElementById("title").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const taxes = parseFloat(document.getElementById("taxes").value);
    const ads = parseFloat(document.getElementById("ads").value);
    const discount = parseFloat(document.getElementById("discount").value);
    const category = document.getElementById("category").value.trim();
    const fileInput = document.getElementById("imageUpload");

    // Check if title is empty
    if (title === "") {
        alert("Title cannot be empty.");
        isValid = false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(title)) { 
        alert("Title contains invalid characters. Please use letters only.");
        isValid = false;
    }

    // Validate price (must be positive)
    if (isNaN(price) ) {
        alert("Price cannot be empty.");
        isValid = false;
    }
    else if(price <= 0){
        alert("Price must be a positive number.");
        isValid = false;
    }

    // Validate taxes, ads, discount (non-negative)
    if (isNaN(taxes) ) {
        alert("Taxes cannot be empty.");
        isValid = false;
    }
    else if(taxes <= 0){
        alert("Taxes must be a positive number.");
        isValid = false;
    }

    if (isNaN(ads) ) {
        alert("Ads cannot be empty.");
        isValid = false;
    }
    else if(ads <= 0){
        alert("Ads must be a positive number.");
        isValid = false;
    }

    else if(discount <= 0){
        alert("Discount must be a positive number.");
        isValid = false;
    }

    // Validate category (must not be empty)
    if (category === "") {
        alert("Category cannot be empty.");
        isValid = false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(category)) { 
        alert("Category contains invalid characters. Please use letters only.");
        isValid = false;
    }

    // Validate file type (if file is uploaded)
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const validFileTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validFileTypes.includes(file.type)) {
            alert("Please upload a valid image (JPEG, PNG, or GIF).");
            isValid = false;
        }
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
                alert("Form Placed Successfully!"); // Display this message when all validation is successful
            }
        });
    } else {
        console.error("Submit button not found.");
    }
});

