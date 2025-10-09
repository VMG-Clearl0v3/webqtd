"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200); 
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

	const scrollToTop = () => {
	const start = window.scrollY;
	const duration = 800; // 0.8s
	let startTime: number | null = null;

	const easeInOutCubic = (t: number) =>
	t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

	const animateScroll = (currentTime: number) => {
	if (startTime === null) startTime = currentTime;
	const elapsed = currentTime - startTime;
	const progress = Math.min(elapsed / duration, 1);
	const ease = easeInOutCubic(progress);

	window.scrollTo(0, start * (1 - ease));

	if (elapsed < duration) requestAnimationFrame(animateScroll);
	};

	requestAnimationFrame(animateScroll);
	};

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 z-50   bg-white/90 backdrop-blur shadow-md 
        text-[#00377B] hover:bg-[#ff0000] hover:text-white p-3 rounded-full shadow-lg
        transform transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}