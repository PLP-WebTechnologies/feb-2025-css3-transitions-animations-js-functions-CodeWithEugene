document.addEventListener('DOMContentLoaded', () => {
    const animateBtn = document.getElementById('animateBtn');
    const savePreferenceBtn = document.getElementById('savePreferenceBtn');
    const loadPreferenceBtn = document.getElementById('loadPreferenceBtn');
    const box = document.getElementById('animateBox');
  
    // Trigger animation on button click
    animateBtn.addEventListener('click', () => {
      // Add the animate class to trigger CSS transitions
      box.classList.add('animate');
  
      // After transition ends, remove the class to allow re-triggering
      box.addEventListener('transitionend', () => {
        box.classList.remove('animate');
      }, { once: true });
  
      // Also trigger a pulse animation using keyframes
      box.classList.add('pulse');
      box.addEventListener('animationend', () => {
        box.classList.remove('pulse');
      }, { once: true });
    });
  
    // Save user preference (e.g., the box's current background color) to localStorage
    savePreferenceBtn.addEventListener('click', () => {
      const currentColor = window.getComputedStyle(box).backgroundColor;
      localStorage.setItem('boxColor', currentColor);
      alert('Preference saved: ' + currentColor);
    });
  
    // Load user preference from localStorage and apply it
    loadPreferenceBtn.addEventListener('click', () => {
      const savedColor = localStorage.getItem('boxColor');
      if (savedColor) {
        box.style.backgroundColor = savedColor;
        alert('Loaded preference: ' + savedColor);
      } else {
        alert('No preference saved yet.');
      }
    });
  });
  