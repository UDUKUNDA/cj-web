'use client';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  width: number;
  height: number;
  align?: "left" | "center";
};

export default function FrameFit({ children, width, height, align = "left" }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const s = Math.min(w / width, h / height);
      setScale(s);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [width, height]);

  return (
    <div className={`flex h-screen w-screen items-start overflow-hidden ${align === "center" ? "justify-center" : "justify-start"}`}>
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: align === "center" ? 'top center' : 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
