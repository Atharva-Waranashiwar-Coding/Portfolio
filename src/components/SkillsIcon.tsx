// components/SkillsIcon.tsx
import { ReactNode, useState } from "react";

export default function SkillIcon({ icon, label }: { icon: ReactNode; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      {hovered && (
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
          {label}
        </span>
      )}
    </div>
  );
}