import { useEffect, useState } from "react";
import "./FloatingHearts.css";

function FloatingHearts({ show }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(), // safer unique id
          left: Math.random() * 100,      // 👈 EVERY SIDE (0–100%)
          drift: -40 + Math.random() * 80, // 👈 left OR right
          size: 14 + Math.random() * 12,
          delay: Math.random(),
          duration: 3 + Math.random() * 2 // 👈 smoother variety
        }
      ]);
    }, 180);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            "--drift": `${heart.drift}px`
          }}
        >
          💕
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
