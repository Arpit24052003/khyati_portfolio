document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  // Typing Effect
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const roles = ['Master English.', 'Build Confidence.', 'Academic Excellence.'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before new word
      }

      setTimeout(type, typingDelay);
    }

    setTimeout(type, 1000); // Initial delay
  }

  // Active Link highlighting on scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href') === `#${current}`) {
        li.classList.add('active');
      }
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 50) {
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.webkitBackdropFilter = 'blur(12px)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
      navbar.style.backdropFilter = 'none';
      navbar.style.webkitBackdropFilter = 'none';
      navbar.style.boxShadow = 'none';
    }
  });
});
