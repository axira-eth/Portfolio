import { useEffect, useRef } from 'react';

const DynamicPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    const numDots = 300;
    const letterBPath = []; // Array to store coordinates for the letter 'B'

    // Define coordinates for the letter 'B'
    function defineLetterB() {
      const offsetX = canvas.width / 2 - 50; // Offset to center the letter
      const offsetY = canvas.height / 2 - 100; // Offset to center the letter
      // Vertical line of the 'B'
      for (let i = 0; i < 200; i++) {
        letterBPath.push({ x: offsetX, y: offsetY + i });
      }
      // Top half-circle
      for (let i = 0; i < 180; i++) {
        const angle = (Math.PI / 180) * i;
        letterBPath.push({
          x: offsetX + 50 + 50 * Math.cos(angle),
          y: offsetY + 50 + 50 * Math.sin(angle),
        });
      }
      // Bottom half-circle
      for (let i = 0; i < 180; i++) {
        const angle = (Math.PI / 180) * i;
        letterBPath.push({
          x: offsetX + 50 + 50 * Math.cos(angle),
          y: offsetY + 150 + 50 * Math.sin(angle),
        });
      }
    }

    function createDots() {
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
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
      dots.forEach((dot, index) => {
        const target = letterBPath[index % letterBPath.length];
        dot.x += (target.x - dot.x) * 0.05;
        dot.y += (target.y - dot.y) * 0.05;
      });
    }

    function animate() {
      drawDots();
      updateDots();
      requestAnimationFrame(animate);
    }

    defineLetterB();
    createDots();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default DynamicPattern;
