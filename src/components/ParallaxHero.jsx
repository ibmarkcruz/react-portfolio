import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./src/assets/images/hero.png')",
          y,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40 text-white text-5xl font-bold">
        Parallax Hero
      </div>
    </section>
  );
};

export default ParallaxHero;