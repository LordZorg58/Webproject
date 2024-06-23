document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.querySelector('.search-icon');
    var searchBar = document.getElementById('search-bar');
    var closeBtn = document.getElementById('close-search');

    searchIcon.addEventListener('click', function() {
        if (getComputedStyle(searchBar).display === 'none') {
            searchBar.style.display = 'block';
        } else {
            searchBar.style.display = 'none';
        }
    });

    closeBtn.addEventListener('click', function() {
        searchBar.style.display = 'none';
    });



    var cartIcon = document.querySelector('.cart-icon');
    var cartPanel = document.getElementById('cart-panel');
    var closeCartBtn = document.getElementById('close-cart');

    cartIcon.addEventListener('click', function() {
        if (getComputedStyle(cartPanel).display === 'none') {
            cartPanel.style.display = 'block';
        } else {
            cartPanel.style.display = 'none';
        }
    });

    closeCartBtn.addEventListener('click', function() {
        cartPanel.style.display = 'none';
    });



    function validateEmail() {
        var emailInput = document.getElementById('emailInput');
        var email = emailInput.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        // If the email is valid, you can proceed with form submission or any other action
        return true;
    }


    

    function validateSearch() {
        var searchInput = document.querySelector('.search-bar input[type="text"]');
        var searchValue = searchInput.value.trim();
    
        if (searchValue === "") {
            alert("Please enter a search query.");
            return false;
        }
    
        // If the search value is valid, you can proceed with the search action
        return true;
    }
    
});







// __________________________yousra________________________________
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