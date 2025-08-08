document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const startBtn = document.getElementById('startBtn');
  const dotsContainer = document.querySelector('#nav .dots');
  const confettiCanvas = document.getElementById('confetti-canvas');

  let current = 0;

  // Create navigation dots dynamically
  pages.forEach((_page, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => goToPage(idx));
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function updateNav() {
    prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = current === pages.length - 1 ? 'hidden' : 'visible';
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function showConfetti() {
    // Use canvas-confetti library
    const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });
    myConfetti({
      particleCount: 120,
      spread: 70,
      startVelocity: 40,
      scalar: 0.8,
      origin: { y: 0.6 }
    });
  }

  function goToPage(index) {
    if (index < 0 || index >= pages.length) return;
    pages[current].classList.remove('active');
    current = index;
    pages[current].classList.add('active');
    updateNav();
    if (current === 0) showConfetti();
  }

  // Button Events
  prevBtn.addEventListener('click', () => goToPage(current - 1));
  nextBtn.addEventListener('click', () => goToPage(current + 1));
  startBtn.addEventListener('click', () => goToPage(1));

  // Initial state
  pages[0].classList.add('active');
  updateNav();
  showConfetti();

  // Music Controls
  const bgMusic = document.getElementById('bg-music');
  const playMusic = document.getElementById('playMusic');
  const pauseMusic = document.getElementById('pauseMusic');

  playMusic.addEventListener('click', () => {
    bgMusic.play();
  });

  pauseMusic.addEventListener('click', () => {
    bgMusic.pause();
  });
});