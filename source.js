// Scroll-triggered animation for cards
document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardPosition < windowHeight - 100) {
        card.classList.add('visible');
      }
    });
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('formMessage');
    message.textContent = "Thanks for reaching out! We'll get back to you soon.";
    message.style.color = '#00bcd4';
    this.reset();
  });
  