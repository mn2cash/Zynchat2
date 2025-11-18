document.addEventListener('DOMContentLoaded', async () => {
  await tsParticles.load('tsparticles', {
    background: { color: 'transparent' },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: ['#3cf6ff', '#a855ff'] },
      links: {
        enable: true,
        color: '#6cd4ff',
        distance: 150,
        opacity: 0.25,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        enable: true,
        speed: 1.3,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: 900 },
        value: 120,
      },
      opacity: { value: 0.6 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
      glow: {
        enable: true,
        color: '#3cf6ff',
        blur: 10,
        intensity: 0.4,
      },
    },
  });
});
