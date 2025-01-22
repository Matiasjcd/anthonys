const faqItems = document.querySelectorAll(".faq-question");
        
faqItems.forEach(item => {
    item.addEventListener("click", () => {
          const answer = item.nextElementSibling;
          const isVisible = answer.style.display === "block";
        
          // Toggle visibility
          answer.style.display = isVisible ? "none" : "block";
        
          // Optional: Add an animation effect (accordion style)
          if (!isVisible) {
                answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
                answer.style.maxHeight = null;
          }
    });
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');

    const hamburger = document.querySelector('.hamburger');
    const spans = hamburger.getElementsByTagName('span');

    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        const spans = hamburger.getElementsByTagName('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});
