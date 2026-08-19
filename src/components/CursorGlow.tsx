'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 150, y: e.clientY - 150 });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [visible]);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
