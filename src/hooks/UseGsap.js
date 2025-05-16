import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const [isReady, setIsReady] = useState(false);
  const ctx = useRef(gsap.context(() => {}));

  useEffect(() => {
    setIsReady(true);

    // Cleanup GSAP animations when the component unmounts
    return () => {
      ctx.current.revert();
    };
  }, []);

  // Helper function to create scroll animations
  const createScrollAnimation = (trigger, animation, config = {}) => {
    if (!isReady) return;

    return ScrollTrigger.create({
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      toggleActions: "play none none reverse",
      ...config
    });
  };

  return {
    gsap,
    ScrollTrigger,
    createScrollAnimation,
    isReady
  };
};
