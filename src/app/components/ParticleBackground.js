"use client"
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const shapes = ["circle", "square", "triangle"];
    let particles = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: null, y: null, radius: 80 };
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    canvas.width = width;
    canvas.height = height;

    const initParticles = () => {
        particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 2.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        life: 0,
        maxLife: 200 + Math.random() * 100
        }));
    };

    const drawParticles = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
        const alpha = 1 - p.life / p.maxLife;
        ctx.globalAlpha = alpha * 0.4; // overall lower opacity

        ctx.beginPath();
        ctx.fillStyle = p.color;

        switch (p.shape) {
            case "circle":
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
            break;
            case "square":
            ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
            break;
            case "triangle":
            ctx.moveTo(p.x, p.y - p.radius);
            ctx.lineTo(p.x - p.radius, p.y + p.radius);
            ctx.lineTo(p.x + p.radius, p.y + p.radius);
            ctx.closePath();
            ctx.fill();
            break;
        }
        });
        ctx.globalAlpha = 1;
    };

    const updateParticles = () => {
        particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // bounce off edges
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // repulse from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            const repulseX = Math.cos(angle) * force * 2;
            const repulseY = Math.sin(angle) * force * 2;
            p.x -= repulseX;
            p.y -= repulseY;
        }

        // reset particle after life ends
        if (p.life > p.maxLife) {
            particles[i] = {
            ...p,
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1 + 2.5,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            life: 0,
            maxLife: 200 + Math.random() * 100
            };
        }
        });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}