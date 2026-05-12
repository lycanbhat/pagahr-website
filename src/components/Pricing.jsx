import { useEffect, useRef } from 'react';
import styles from './Pricing.module.css';

const PLANS = [
  {
    tier: 'Starter',
    price: '49',
    unit: '/ emp · mo',
    desc: 'For teams of 10–50, just getting off spreadsheets.',
    features: ['Employees, payroll, attendance','Leave management','Mobile app (iOS & Android)','Payslip PDF + bulk email','Email support'],
    cta: 'Start free trial',
    ctaClass: 'btn-outline',
    featured: false,
  },
  {
    tier: 'Growth',
    price: '89',
    unit: '/ emp · mo',
    desc: 'For 50–250 employees. Everything in Starter, plus AI & compliance.',
    features: ['Everything in Starter','AI HR Chatbot (built-in)','Tax, declarations, Form 16','Performance & OKRs','Assets, letters, 13 reports','Public self-onboarding URL','Priority chat support'],
    cta: 'Start free trial',
    ctaClass: 'btn-amber',
    featured: true,
    tag: '★ MOST POPULAR',
  },
  {
    tier: 'Enterprise',
    price: null,
    unit: 'Contact us',
    desc: 'For 250+ employees. Multi-entity, SSO, SLAs & success manager.',
    features: ['Everything in Growth','Multi-entity / multi-tenant','SSO (SAML, OIDC, Google)','Custom RBAC & audit log','99.9% uptime SLA','Dedicated success manager'],
    cta: 'Talk to sales',
    ctaClass: 'btn-outline',
    featured: false,
  },
];

export default function Pricing() {
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
    <section className={styles.section} id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">Simple. Per employee. No surprises.</div>
          <h2 className="section-title reveal delay-1">Pricing that scales <span className="accent">with you.</span></h2>
          <p className="section-sub reveal delay-2">Pick a tier. Toggle the modules you need. Pay only for active employees. No long-term contracts.</p>
        </div>
        <div className={styles.grid}>
          {PLANS.map((p, i) => (
            <div key={p.tier} className={`${styles.card} ${p.featured ? styles.featured : ''} reveal ${i === 0 ? '' : i === 1 ? 'delay-1' : 'delay-2'}`}>
              {p.tag && <div className={styles.tag}>{p.tag}</div>}
              <div className={styles.tier}>{p.tier}</div>
              <div className={styles.amount}>
                {p.price ? (
                  <>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.value}>{p.price}</span>
                    <span className={styles.unit}>{p.unit}</span>
                  </>
                ) : (
                  <span className={styles.custom}>Custom</span>
                )}
              </div>
              <div className={styles.desc}>{p.desc}</div>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`btn ${p.ctaClass} ${styles.cta}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
