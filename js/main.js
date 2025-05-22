const form = document.getElementById('waitlistForm');
const counterElement = document.getElementById('counter');

// Simulate counter animation
let count = 0;
const targetCount = 97; // Fake number of people already on waitlist
const duration = 2000; // 2 seconds
const interval = 20; // Update every 20ms
const increment = targetCount / (duration / interval);

function animateCounter() {
  const counterInterval = setInterval(() => {
    count += increment;
    if (count >= targetCount) {
      count = targetCount;
      clearInterval(counterInterval);
    }
    counterElement.textContent = Math.floor(count);
  }, interval);
}

// Run counter animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  animateCounter();
});

// Mysterious hover effect
const mysteriousElement = document.querySelector('.mysterious-element');
mysteriousElement.addEventListener('mouseover', () => {
  mysteriousElement.style.boxShadow = '0 5px 15px rgba(0, 119, 181, 0.3)';
});
mysteriousElement.addEventListener('mouseout', () => {
  mysteriousElement.style.boxShadow = 'none';
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature, .value-prop, .waitlist-form, .mysterious-element').forEach(element => {
  observer.observe(element);
});
