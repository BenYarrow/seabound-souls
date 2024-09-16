import React, { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";

const WaveAnimation = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const wave = waveRef.current;

    const animateWave = () => {
      gsap.fromTo(
        wave,
        { x: "-50%", scale: 0 }, // Start from the center with zero scale
        {
          x: "50%", // Move wave to the right edge
          scale: 1, // Scale wave to its original size
          duration: 4, // Adjust duration as needed
          ease: Power1.easeInOut,
          onComplete: () => {
            gsap.set(wave, { scale: 0 }); // Reset scale to zero
            animateWave(); // Repeat animation
          },
        }
      );
    };

    animateWave();

    // Clean up animation on component unmount
    return () => {
      gsap.killTweensOf(wave);
    };
  }, []);

  return (
    <svg
      ref={waveRef}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      style={{
        display: "block",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100px", // Adjust the height as needed
      }}
    >
      <path
        d="M0,50 C25,25 75,25 100,50 C125,75 175,75 200,50 C225,25 275,25 300,50 C325,75 375,75 400,50 C425,25 475,25 500,50 C525,75 575,75 600,50 C625,25 675,25 700,50 C725,75 775,75 800,50 C825,25 875,25 900,50 C925,75 975,75 1000,50 L1000,100 L0,100 Z"
        style={{ stroke: "none", fill: "blue" }} // Adjust color as needed
      />
    </svg>
  );
};

export default WaveAnimation;
