import { useEffect } from "react";

export function useHeaderScroll(threshold = 30) {
  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
}
