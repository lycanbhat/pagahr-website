import { useEffect, useRef } from 'react';
import styles from './MobileSection.module.css';

export default function MobileSection() {
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
    <section className={styles.section} id="mobile" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.phoneStage} reveal`}>
            <div className={`${styles.floatingCard} ${styles.left}`}>
              <div className={styles.floatingIcon}>💰</div>
              <div className={styles.floatingText}>Payslip ready</div>
              <div className={styles.floatingMeta}>March · ₹1,26,455</div>
            </div>

            <div className={styles.phoneFrame}>
              <img src="/Pagahr-Mobile.jpg" alt="Pagahr mobile app" className={styles.phoneScreenshot} />
            </div>

            <div className={`${styles.floatingCard} ${styles.right}`}>
              <div className={styles.floatingIcon}>🎂</div>
              <div className={styles.floatingText}>3 birthdays today</div>
              <div className={styles.floatingMeta}>Send a wish →</div>
            </div>
          </div>

          <div>
            <div className="section-eyebrow reveal">Mobile-first</div>
            <h2 className={`section-title reveal delay-1 ${styles.leftTitle}`}>
              Built for the <span className="accent">phone in their pocket.</span>
            </h2>
            <p className={`section-sub reveal delay-2 ${styles.leftSub}`}>
              A native Flutter app for iOS and Android. Home screen widget. One-tap GPS check-in. Push notifications for payslips and approvals. Built for the 80% of your team that opens HR exactly twice a month.
            </p>

            <div className={styles.features}>
              <div className={`${styles.feature} reveal delay-3`}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle}>GPS check-in, IP logged</div>
                  <div className={styles.featureDesc}>One tap from the home screen widget. Late detection respects shift + grace period.</div>
                </div>
              </div>
              <div className={`${styles.feature} reveal delay-4`}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle}>Real-time push notifications</div>
                  <div className={styles.featureDesc}>FCM-powered alerts for payroll, leave approvals, regularizations, and announcements.</div>
                </div>
              </div>
              <div className={`${styles.feature} reveal delay-5`}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle}>Real-time team chat</div>
                  <div className={styles.featureDesc}>Firebase Firestore-backed messaging. Department, project, or DM — same app, no Slack tax.</div>
                </div>
              </div>
            </div>

            <div className={`${styles.appButtons} reveal delay-6`}>
              <a href="#" className="btn btn-amber"><span>🍎</span> App Store</a>
              <a href="#" className="btn" style={{ background: '#fff', color: '#111', border: '1.5px solid var(--pg-border)' }}><span>🤖</span> Google Play</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
