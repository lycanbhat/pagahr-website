import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <a href="#" className={styles.logoLink}>
          <img src="/pagahr.png" alt="Pagahr" className={styles.logoImg} />
        </a>
        <ul className={styles.links}>
          <li><a href="#features" onClick={scrollTo('#features')}>Product</a></li>
          <li><a href="#ai" onClick={scrollTo('#ai')}>AI</a></li>
          <li><a href="#mobile" onClick={scrollTo('#mobile')}>Mobile</a></li>
          <li><a href="#india" onClick={scrollTo('#india')}>For India</a></li>
          <li><a href="#pricing" onClick={scrollTo('#pricing')}>Pricing</a></li>
        </ul>
        <div className={styles.cta}>
          <a href="#" className="btn btn-ghost">Sign in</a>
          <a href="#" className="btn btn-primary">Book a demo <span className="btn-arrow">→</span></a>
        </div>
      </div>
    </nav>
  );
}
