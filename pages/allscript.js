
// Get the elements
let cartButton = document.getElementById('cart-button');
let cartMenu = document.getElementById('cart-menu');
let closeButton = document.getElementById('close-button');

// Add event listener to cart button
cartButton.addEventListener('click', function() {
  cartMenu.classList.add('open');
});

// Add event listener to close button
closeButton.addEventListener('click', function() {
  cartMenu.classList.remove('open');
});