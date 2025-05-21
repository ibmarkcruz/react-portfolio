import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div className="fixed top-0 left-0 w-4 h-4 bg-slate-300 rounded-full pointer-events-none z-50"
      animate={{
        x: position.x - 12, // center offset
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
}

export default CursorTrail;