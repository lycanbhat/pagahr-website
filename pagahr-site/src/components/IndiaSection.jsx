import { useEffect, useRef } from 'react';
import styles from './IndiaSection.module.css';

const COMPLIANCE = [
  { badge: 'EPFO', title: 'PF auto-calc', desc: 'Employer + employee contribution computed per slab. UAN tracked per employee.' },
  { badge: 'ESIC', title: 'ESI eligible', desc: 'Auto-enrolment under ₹21K threshold. Both contributions, both views.' },
  { badge: 'Income Tax', title: 'TDS & Form 16', desc: 'Old vs new regime, declaration window control, Form 16 generation with one click.' },
  { badge: 'State PT', title: 'Professional Tax', desc: 'State-wise PT slabs. Maharashtra, Karnataka, Telangana, West Bengal and more.' },
  { badge: 'Gratuity Act', title: 'Gratuity accrued', desc: 'Basic × 15/26 × years of service — auto-tracked, shown on payslip and exit.' },
  { badge: 'Payment of Bonus', title: 'Statutory bonus', desc: '8.33% to 20% computed on eligible Basic, accrued monthly, paid annually.' },
  { badge: 'DPDP Act', title: 'Data residency', desc: 'All employee data stored in Mumbai region. DPDP-aligned consent & deletion flows.' },
  { badge: 'Labour Codes', title: '4 Codes ready', desc: 'Wage Code, Social Security, IR, OSH&WC — schemas in place, switch on when notified.' },
];

const DELAYS = ['', 'delay-1', 'delay-2', 'delay-3', '', 'delay-1', 'delay-2', 'delay-3'];

export default function IndiaSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} id="india" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">Built for India 🇮🇳</div>
          <h2 className="section-title reveal delay-1">Compliance that <span className="accent">just runs.</span></h2>
          <p className="section-sub reveal delay-2">Every statutory rule. Every deadline. Every form. Built in, kept current, audited every quarter.</p>
        </div>
        <div className={styles.grid}>
          {COMPLIANCE.map((c, i) => (
            <div key={c.title} className={`${styles.card} reveal ${DELAYS[i]}`}>
              <div className={styles.badge}>{c.badge}</div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.desc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
