import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Animation for button
    button.classList.add('disabled');
    button.textContent = 'Added!';
    setTimeout(() => {
      button.classList.remove('disabled');
      button.textContent = 'Add to Cart';
    }, 1000);
  });
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.product-card, .testimonial');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check