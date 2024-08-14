import { useEffect, useRef } from 'react';
import styles from '../styles/Pattern.module.scss';

const DynamicPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];

    function createDots() {
      for (let i = 0; i < 100; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
        });
      }
    }

    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
      });
    }

    function updateDots() {
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

        // Logic to form the letter 'B' shape
      });
    }

    function animate() {
      drawDots();
      updateDots();
      requestAnimationFrame(animate);
    }

    createDots();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default DynamicPattern;
