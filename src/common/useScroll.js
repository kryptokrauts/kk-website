import { useEffect, useState } from "react";

export function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = evt => {
    if (evt.currentTarget.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return scrolled;
}