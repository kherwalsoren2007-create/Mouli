(function () {
  const pagesContainer = document.getElementById('pages');
  const pageElements = Array.from(document.querySelectorAll('.page'));
  const nextButton = document.getElementById('nextBtn');
  const prevButton = document.getElementById('prevBtn');
  const enterButton = document.getElementById('enterBtn');
  const dotsContainer = document.getElementById('dots');
  const playMusicButton = document.getElementById('playMusicBtn');
  const replayButton = document.getElementById('replayBtn');
  const audioElement = document.getElementById('bg-music');

  let currentIndex = 0;
  let isAnimating = false;

  // Create confetti instance on our canvas
  const confettiCanvas = document.getElementById('confetti-canvas');
  const confettiInstance = window.confetti ? window.confetti.create(confettiCanvas, { resize: true, useWorker: true }) : null;

  function burstConfettiSweet(durationMs = 1200) {
    if (!confettiInstance) return;
    const end = Date.now() + durationMs;
    (function frame() {
      confettiInstance({
        particleCount: 2,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ['#f9d6ff', '#e6d6ff', '#ffd9b3', '#d9fff5', '#d7eaff']
      });
      confettiInstance({
        particleCount: 2,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ['#f9d6ff', '#e6d6ff', '#ffd9b3', '#d9fff5', '#d7eaff']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function gentlePop() {
    if (!confettiInstance) return;
    confettiInstance({
      particleCount: 60,
      spread: 70,
      gravity: 0.8,
      origin: { y: 0.4 },
      colors: ['#f9d6ff', '#e6d6ff', '#ffd9b3', '#d9fff5', '#d7eaff']
    });
  }

  function setActiveDot(index) {
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function initDots() {
    dotsContainer.innerHTML = '';
    pageElements.forEach((_p, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Go to page ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function onTransitionEndOnce(el, cb) {
    function handler(e) {
      if (e.target !== el) return;
      el.removeEventListener('transitionend', handler);
      cb();
    }
    el.addEventListener('transitionend', handler);
  }

  function showPage(index) {
    if (isAnimating || index === currentIndex || index < 0 || index >= pageElements.length) return;
    isAnimating = true;

    const outgoing = pageElements[currentIndex];
    const incoming = pageElements[index];

    outgoing.classList.remove('active');
    incoming.style.willChange = 'transform, opacity, filter';

    // Stagger for smoother feel
    requestAnimationFrame(() => {
      incoming.classList.add('active');
      onTransitionEndOnce(incoming, () => {
        incoming.style.willChange = 'auto';
        isAnimating = false;
      });
    });

    currentIndex = index;
    setActiveDot(currentIndex);

    // Page-specific effects
    if (currentIndex === 0) {
      setTimeout(() => burstConfettiSweet(1000), 250);
    } else if (currentIndex === 3) { // poem page
      gentlePop();
    }
  }

  function goTo(index) { showPage(index); }
  function next() { showPage(Math.min(currentIndex + 1, pageElements.length - 1)); }
  function prev() { showPage(Math.max(currentIndex - 1, 0)); }

  // Buttons
  if (nextButton) nextButton.addEventListener('click', next);
  if (prevButton) prevButton.addEventListener('click', prev);
  if (enterButton) enterButton.addEventListener('click', () => {
    burstConfettiSweet(1400);
    setTimeout(next, 500);
  });

  if (replayButton) replayButton.addEventListener('click', () => {
    try { audioElement.pause(); audioElement.currentTime = 0; } catch (_) {}
    goTo(0);
    setTimeout(() => burstConfettiSweet(1000), 300);
  });

  if (playMusicButton) playMusicButton.addEventListener('click', async () => {
    try {
      await audioElement.play();
      playMusicButton.textContent = 'Playing ♫';
      playMusicButton.disabled = true;
    } catch (err) {
      alert('Please tap again to allow audio playback.');
    }
  });

  // Keyboard nav
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Touch swipe
  let touchStartX = null; let touchStartY = null;
  pagesContainer.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    touchStartX = t.clientX; touchStartY = t.clientY;
  }, { passive: true });
  pagesContainer.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX; const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > 40 && Math.abs(dy) < 60) {
      if (dx < 0) next(); else prev();
    }
    touchStartX = touchStartY = null;
  });

  // Deep link via query (?p=1..6)
  const urlParams = new URLSearchParams(window.location.search);
  const p = parseInt(urlParams.get('p'), 10);
  if (!isNaN(p) && p >= 1 && p <= pageElements.length) {
    currentIndex = p - 1;
    pageElements.forEach((pg, i) => pg.classList.toggle('active', i === currentIndex));
  }

  initDots();
  setActiveDot(currentIndex);

  // Initial confetti on welcome
  setTimeout(() => burstConfettiSweet(1000), 450);
})();