import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const SIDEBAR = [
  { section: 'WORKSPACE', items: [
    { label: 'Dashboard', active: true },
    { label: 'Company Feeds', badge: 3 },
    { label: 'AI Assistant' },
  ]},
  { section: 'PEOPLE', items: [
    { label: 'Employees' },
    { label: 'Onboarding', badge: 3 },
    { label: 'Org Chart' },
    { label: 'Attendance' },
    { label: 'Leave', badge: 2 },
  ]},
  { section: 'COMPENSATION', items: [
    { label: 'Payroll' },
    { label: 'Salary Structure' },
    { label: 'Tax & Form 16' },
  ]},
  { section: 'OPERATIONS', items: [
    { label: 'Performance' },
    { label: 'Assets' },
    { label: 'Letters & Reports' },
  ]},
];

export default function Hero() {
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
    <section className={styles.hero} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — copy */}
          <div>
            <div className={`${styles.eyebrow} reveal`}>
              <span className={styles.dot}></span>
              Now live · v1.0.3 · Built for Indian enterprises
            </div>
            <h1 className={`${styles.h1} reveal delay-1`}>
              Your HR on<br /><span className={styles.accent}>autopilot.</span>
            </h1>
            <p className={`${styles.lead} reveal delay-2`}>
              Pagahr is the AI-first HRMS that runs payroll, attendance, leaves, tax, and compliance for Indian SMEs and enterprises. Built to handle 10 to 500 employees without breaking a sweat.
            </p>
            <div className={`${styles.actions} reveal delay-3`}>
              <a href="#" className="btn btn-amber">Start free trial <span className="btn-arrow">→</span></a>
              <a href="#" className="btn btn-outline">▶ Watch 2-min demo</a>
            </div>
            <div className={`${styles.meta} reveal delay-4`}>
              <div className={styles.metaItem}><span className={styles.check}>✓</span> No credit card</div>
              <div className={styles.metaItem}><span className={styles.check}>✓</span> 14-day trial</div>
              <div className={styles.metaItem}><span className={styles.check}>✓</span> Setup in 2 hours</div>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className={`${styles.preview} reveal delay-2`}>
            <div className={`${styles.previewCard} ${styles.previewMain}`}>

              {/* Top bar */}
              <div className={styles.topbar}>
                <div className={styles.topbarLogo}>
                  <img src="/pagahr.png" alt="Pagahr" className={styles.topbarLogoImg} />
                </div>
                <div className={styles.topbarSearch}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  Search employees, payslips…
                </div>
                <div className={styles.topbarAsk}>
                  <span className={styles.topbarAskIcon}>✦</span> Ask AI
                </div>
                <div className={styles.topbarCompany}>Acme Manufacturing Pvt Ltd ▾</div>
              </div>

              {/* Body */}
              <div className={styles.dashBody}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                  {SIDEBAR.map((group) => (
                    <div key={group.section} className={styles.sideGroup}>
                      <div className={styles.sideSection}>{group.section}</div>
                      {group.items.map((item) => (
                        <div key={item.label} className={`${styles.sideItem} ${item.active ? styles.sideActive : ''}`}>
                          <span className={styles.sideIcon}></span>
                          <span className={styles.sideLabel}>{item.label}</span>
                          {item.badge && <span className={styles.sideBadge}>{item.badge}</span>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className={styles.main}>
                  {/* Header */}
                  <div className={styles.mainHeader}>
                    <div>
                      <div className={styles.greeting}>Good morning, Rohan 👋</div>
                      <div className={styles.greetingSub}>Tuesday, 28 April 2026 · Acme Manufacturing Pvt Ltd</div>
                    </div>
                    <div className={styles.exportBtn}>↑ Export</div>
                  </div>

                  {/* AI Brief */}
                  <div className={styles.aiBrief}>
                    <span className={styles.aiBriefIcon}>✦</span>
                    <div className={styles.aiBriefText}>
                      <strong>PAGAHR AI · DAILY BRIEF</strong><br />
                      3 employees have pending leave approvals expiring today. April payroll is on track at ₹42.8L (−2.1% vs March).
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div className={styles.statCards}>
                    <div className={styles.statCard}>
                      <div className={styles.statLabel}>HEADCOUNT</div>
                      <div className={styles.statVal}>247</div>
                      <div className={`${styles.statDelta} ${styles.green}`}>▲ +12 this quarter</div>
                    </div>
                    <div className={styles.statCard}>
                      <div className={styles.statLabel}>APRIL PAYROLL</div>
                      <div className={`${styles.statVal} ${styles.statValSm}`}>₹42,84,500</div>
                      <div className={`${styles.statDelta} ${styles.red}`}>▼ −2.1% vs March</div>
                    </div>
                    <div className={styles.statCard}>
                      <div className={styles.statLabel}>AVG ATTENDANCE</div>
                      <div className={styles.statVal}>94.6%</div>
                      <div className={`${styles.statDelta} ${styles.green}`}>▲ +1.2 pts</div>
                    </div>
                    <div className={styles.statCard}>
                      <div className={styles.statLabel}>OPEN LEAVE REQS</div>
                      <div className={styles.statVal}>7</div>
                      <div className={`${styles.statDelta} ${styles.amber}`}>▼ 4 due today</div>
                    </div>
                  </div>

                  {/* Chart row */}
                  <div className={styles.chartRow}>
                    <div className={styles.chartCard}>
                      <div className={styles.chartHeader}>
                        <span className={styles.chartTitle}>Headcount &amp; cost trend</span>
                        <div className={styles.chartTabs}>
                          <span className={styles.chartTab}>Headcount</span>
                          <span className={`${styles.chartTab} ${styles.chartTabActive}`}>Payroll cost</span>
                          <span className={styles.chartTab}>Attrition</span>
                        </div>
                      </div>
                      <div className={styles.chartArea}>
                        <svg viewBox="0 0 260 70" preserveAspectRatio="none" width="100%" height="100%">
                          <defs>
                            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.9"/>
                              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.3"/>
                            </linearGradient>
                          </defs>
                          {[22,26,24,28,27,30,29,32,31,35,34,42].map((h, i) => (
                            <rect key={i} x={i * 22 + 2} y={70 - h} width="16" height={h}
                              fill={i === 11 ? "url(#barGrad)" : "rgba(245,166,35,0.25)"}
                              rx="2"
                            />
                          ))}
                          <polyline
                            points="10,48 32,44 54,46 76,42 98,43 120,40 142,41 164,38 186,39 208,35 230,36 252,28"
                            fill="none" stroke="#111" strokeWidth="1.5" strokeDasharray="3,2"
                            strokeLinecap="round" strokeLinejoin="round"
                          />
                        </svg>
                        <div className={styles.chartMonths}>
                          {['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'].map(m => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className={styles.rightPanel}>
                      <div className={styles.rpTitle}>APRIL 2026 PAYROLL</div>
                      <div className={styles.rpAmount}>₹42,84,500</div>
                      <div className={styles.rpBadge}>PROCESSING</div>
                      <div className={styles.rpProgress}>
                        <div className={styles.rpProgressBar}>
                          <div className={styles.rpProgressFill} style={{ width: '68%' }}></div>
                        </div>
                        <div className={styles.rpProgressLabel}>168 / 247 processed</div>
                      </div>
                      <div className={styles.rpStats}>
                        <div className={styles.rpStat}><span>PF deduction</span><span>₹3,12,480</span></div>
                        <div className={styles.rpStat}><span>TDS</span><span>₹4,82,180</span></div>
                      </div>
                      <div className={styles.rpCelebTitle}>Celebrations this week</div>
                      <div className={styles.rpCeleb}>
                        <span className={styles.rpCelebAvatar} style={{ background: '#fce7f3' }}>SK</span>
                        <div><div className={styles.rpCelebName}>Sneha Kulkarni</div><div className={styles.rpCelebMeta}>Birthday · Today</div></div>
                      </div>
                      <div className={styles.rpCeleb}>
                        <span className={styles.rpCelebAvatar} style={{ background: '#dcfce7' }}>AD</span>
                        <div><div className={styles.rpCelebName}>Arjun Desai</div><div className={styles.rpCelebMeta}>3 yr work anniv · Tomorrow</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
