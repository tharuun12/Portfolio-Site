import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          color: {
            value: '#4F46E5',
          },
          links: {
            color: '#4F46E5',
            distance: 200,
            enable: true,
            opacity: 0.2, // Reduced opacity
            width: 0.8, // Thinner lines
          },
          move: {
            enable: true,
            speed: 1, // Slower movement
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area = fewer particles
            },
            value: 50, // Reduced number of particles
          },
          opacity: {
            value: 0.3, // Reduced particle opacity
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 }, // Smaller particles
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}