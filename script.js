const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');

// Set initial volume to 40%
music.volume = 0.4;

// Envelope click event
envelope.addEventListener('click', () => {
  envelope.src = 'assets/open-envelope.png';
  envelope.style.transform = 'scale(0.9)';
  envelope.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
  envelope.style.opacity = '0';
  setTimeout(() => {
    envelope.style.display = 'none';
  }, 800);

  letter.classList.remove('hidden');
  letter.style.display = 'block';
  music.play();

  // Add a glowing effect to the letter
  letter.style.boxShadow = '0 0 20px 5px rgba(233, 30, 99, 0.5)';
  setTimeout(() => {
    letter.style.boxShadow = 'none';
  }, 2000);
});

// Update volume when slider is moved
volumeSlider.addEventListener('input', (event) => {
  music.volume = event.target.value;
});

// Add a magical sparkle effect to the background
const createSparkle = () => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
};

// Add a glowing pulse effect to the background
const createBackgroundOverlay = () => {
  const overlay = document.createElement('div');
  overlay.id = 'background-overlay';
  document.body.appendChild(overlay);
};

// Add mouse-following particles
const createMouseParticles = () => {
  document.addEventListener('mousemove', (event) => {
    const particle = document.createElement('div');
    particle.className = 'sparkle';
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;
    particle.style.animationDuration = '1s';
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
};

createBackgroundOverlay();
setInterval(createSparkle, 200);
createMouseParticles();
