const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');
const openSound = new Audio('assets/open-sound.mp3');
const sparkleSound = new Audio('assets/sparkle-sound.mp3');

// Set initial volume to 40%
music.volume = 0.4;

// Envelope click event
envelope.addEventListener('click', (event) => {
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

  openSound.play();

  const rect = envelope.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  createExplosion(x, y);
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

    sparkleSound.currentTime = 0; // Reset sound for rapid playback
    sparkleSound.play();
  });
};

// Add mystical fog to the background
const createFog = () => {
  const fog = document.createElement('div');
  fog.className = 'mystical-fog';
  document.body.appendChild(fog);
};

// Add shooting stars to the background
const createShootingStar = () => {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 50}vh`;
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
};

// Create explosion effect
const createExplosion = (x, y) => {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'sparkle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
};

// Add aurora effect to the background
const createAurora = () => {
  const aurora = document.createElement('div');
  aurora.className = 'aurora';
  document.body.appendChild(aurora);
};

// Add click wave effect
document.addEventListener('click', (event) => {
  const wave = document.createElement('div');
  wave.className = 'click-wave';
  wave.style.left = `${event.clientX}px`;
  wave.style.top = `${event.clientY}px`;
  document.body.appendChild(wave);

  setTimeout(() => {
    wave.remove();
  }, 1000);
});

createBackgroundOverlay();
setInterval(createSparkle, 300);
createMouseParticles();
createFog();
setInterval(createShootingStar, 5000);
createAurora();
