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
});