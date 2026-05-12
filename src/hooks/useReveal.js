import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = el.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
