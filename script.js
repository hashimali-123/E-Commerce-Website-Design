// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

let cartItems = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartItems++;
    cartCount.textContent = cartItems;
    button.textContent = 'Added!';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.disabled = false;
    }, 2000);
  });
});