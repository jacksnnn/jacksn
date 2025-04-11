// Import highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/styles/atom-one-light.css';

// Register the JavaScript language
hljs.registerLanguage('javascript', javascript);

document.addEventListener('DOMContentLoaded', () => {
  // Type animation for hero section
  const titleElement = document.getElementById('typing-title');
  const subtitleElement = document.getElementById('typing-subtitle');
  const exploreButton = document.getElementById('explore-button');
  
  const titleText = "Hi. I'm Jackson Myers";
  const subtitleText = "A Creative Developer & Designer";
  
  // Function to create typing animation
  const typeWriter = (element, text, i, speed, callback) => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(element, text, i, speed, callback), speed);
    } else {
      element.classList.add('cursor-blink');
      if (callback) callback();
    }
  };
  
  // Start title typing animation
  titleElement.textContent = '';
  setTimeout(() => {
    typeWriter(titleElement, titleText, 0, 75, () => {
      // After title is typed, start subtitle
      setTimeout(() => {
        subtitleElement.textContent = '';
        typeWriter(subtitleElement, subtitleText, 0, 50, () => {
          // After subtitle is typed, fade in the button
          setTimeout(() => {
            exploreButton.classList.add('fade-in');
          }, 400);
        });
      }, 500);
    });
  }, 500);

  // Apply syntax highlighting to code blocks
  const applyHighlighting = () => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  };
  
  applyHighlighting();

  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const htmlElement = document.documentElement;
  
  // Set initial icon display (dark mode by default)
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
  
  // Function to set code highlighting theme
  const setCodeTheme = (theme) => {
    const codeBlocks = document.querySelectorAll('pre code');
    if (theme === 'dark') {
      codeBlocks.forEach(block => {
        block.classList.remove('atom-one-light');
        block.classList.add('atom-one-dark');
      });
    } else {
      codeBlocks.forEach(block => {
        block.classList.remove('atom-one-dark');
        block.classList.add('atom-one-light');
      });
    }
    // Re-apply syntax highlighting
    applyHighlighting();
  };
  
  // Check for saved theme preference, use dark as default if not set
  const savedTheme = localStorage.getItem('theme');
  
  // Apply initial theme (default to dark if not explicitly set to light)
  if (savedTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    setCodeTheme('light');
  } else {
    // Default to dark mode
    htmlElement.setAttribute('data-theme', 'dark');
    setCodeTheme('dark');
    // Ensure the theme is saved
    localStorage.setItem('theme', 'dark');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update the HTML data attribute
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Update the icon display
    if (newTheme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
    
    // Update the code theme
    setCodeTheme(newTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
  });

  // Fade-in on scroll for sections
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