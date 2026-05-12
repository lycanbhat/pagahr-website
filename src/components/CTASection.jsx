import { useEffect, useRef } from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container" style={{ position: 'relative' }}>
        <h2 className={`${styles.title} reveal`}>Power your people.<br />Power your business.</h2>
        <p className={`${styles.sub} reveal delay-1`}>14-day trial · no credit card · setup in 2 hours.</p>
        <div className={`${styles.buttons} reveal delay-2`}>
          <a href="#" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Start free trial <span className="btn-arrow">→</span>
          </a>
          <a href="#" className="btn" style={{ background: '#fff', color: '#111', padding: '14px 28px', fontSize: '15px' }}>
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
