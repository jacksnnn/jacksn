document.addEventListener('DOMContentLoaded', () => {
    // Example of a simple fade-in on scroll
    const faders = document.querySelectorAll('section');
    const appearOptions = {
      threshold: 0.1
    };
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      fader.classList.add('initial-hidden');
      appearOnScroll.observe(fader);
    });
  });