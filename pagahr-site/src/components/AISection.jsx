import { useEffect, useRef } from 'react';
import styles from './AISection.module.css';

export default function AISection() {
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
    <section className={styles.section} id="ai" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className="section-eyebrow reveal">AI-first by default</div>
            <h2 className={`section-title reveal delay-1 ${styles.leftTitle}`}>
              An assistant that <span className="accent">actually understands</span> your HR data.
            </h2>
            <p className={`section-sub reveal delay-2 ${styles.leftSub}`}>
              Pagahr's AI assistant is built right in — no add-ons, no separate vendors. The magic isn't the model. It's the context. Every question loads only the relevant data: salary, leaves, attendance, tax, performance. Fast answers without leaking the whole org's records to a prompt.
            </p>

            <div className={styles.features}>
              <div className={`${styles.feature} reveal delay-3`}>
                <div className={styles.featureIcon} style={{ background: 'var(--pg-amber-light)', color: 'var(--pg-amber-deep)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 5 5.5.8-4 4 1 5.5-5-2.6-5 2.6 1-5.5-4-4 5.5-.8z"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle} style={{ color: 'var(--pg-black)' }}>Context-aware, not chatty</div>
                  <div className={styles.featureDesc} style={{ color: 'var(--pg-text-mid)' }}>Detects intent (salary, leave, tax, etc.) and pulls only what's needed before calling the LLM.</div>
                </div>
              </div>
              <div className={`${styles.feature} reveal delay-4`}>
                <div className={styles.featureIcon} style={{ background: 'var(--pg-amber-light)', color: 'var(--pg-amber-deep)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle} style={{ color: 'var(--pg-black)' }}>Auto-generated company feed</div>
                  <div className={styles.featureDesc} style={{ color: 'var(--pg-text-mid)' }}>AI writes birthday wishes, anniversary callouts, and announcement drafts — you approve in one click.</div>
                </div>
              </div>
              <div className={`${styles.feature} reveal delay-5`}>
                <div className={styles.featureIcon} style={{ background: 'var(--pg-amber-light)', color: 'var(--pg-amber-deep)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <div className={styles.featureTitle} style={{ color: 'var(--pg-black)' }}>No extra cost. No extra vendor.</div>
                  <div className={styles.featureDesc} style={{ color: 'var(--pg-text-mid)' }}>AI is built in. You don't pay per token, per seat, or per "AI plan upgrade."</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.chatMock} reveal delay-2`}>
            <div className={styles.chatHeader}>
              <div className={styles.avatar}>✦</div>
              <div>
                <div className={styles.chatTitle}>Pagahr AI</div>
                <div className={styles.chatSub}>Your intelligent HR assistant</div>
              </div>
              <div className={styles.status}><span className={styles.statusDot}></span> Online</div>
            </div>

            <div className={styles.messages}>
              <div className={styles.msgUser}>How many leaves do I have left?</div>
              <div className={styles.msgAi}>You have <strong>14.5 days</strong> remaining — 8 casual, 4 sick, 2.5 earned. Resets on 1 Jan 2027.</div>
              <div className={styles.msgUser}>Why was my TDS higher this month?</div>
              <div className={styles.msgAi}><strong>TDS up ₹8,100</strong> — you crossed the ₹15L slab after your Q1 hike. Invest ₹48,000 in ELSS to save ₹14,400 in tax this FY.</div>
              <div className={styles.typing}>
                <span></span><span></span><span></span>
              </div>
            </div>

            <div className={styles.pills}>
              {['📊 Show my payslip', '🏖️ Leave balance', '💸 Compare regimes', '📍 My attendance'].map((p) => (
                <div key={p} className={styles.pill}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
