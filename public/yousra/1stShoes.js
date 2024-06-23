function changeImage(newSrc) {
    var mainImage = document.getElementById("mainImage");
    if (mainImage) { // Check if the element exists
        mainImage.src = newSrc;
    } else {
        console.error("Main image not found");
    }
}
function initializeQuantity() {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    let a = 1;

    plus.addEventListener("click", () => {
        a++;
        a = a < 10 ? "0" + a : a; // Format for numbers less than 10
        num.innerText = a; // Update the displayed quantity
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            a = a < 10 ? "0" + a : a; // Format for numbers less than 10
            num.innerText = a; // Update the displayed quantity
        }
    });
}
function addToCart() {
    const quantity = document.getElementById("quantity").value;
    console.log(`Adding ${quantity} items to the cart`); // Example cart logic
}


