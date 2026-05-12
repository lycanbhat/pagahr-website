import { useEffect, useRef } from 'react';
import styles from './Features.module.css';

const FEATURES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="2"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M19 21v-2a3 3 0 0 0-3-3"/></svg>,
    title: 'Employee Management',
    desc: 'Full lifecycle — hire to exit. Bulk import, profile pictures, gratuity tracking, birthdays, and an auto-built org chart.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Payroll',
    desc: 'Monthly runs with auto PF, ESI, PT, TDS. Locked runs, bulk payslip dispatch, push notifications to every employee.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Attendance',
    desc: 'GPS check-in with IP logging, shift-aware late detection, home screen widget for one-tap punch-in.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18l3-3 4 4 11-11"/><path d="M17 8h4v4"/></svg>,
    title: 'Leave Management',
    desc: 'Six default leave types plus custom. Carry-forward rules, manager queues, half-day support, push approvals.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>,
    title: 'Tax & Form 16',
    desc: '80C, 80D, HRA declarations. Old vs new regime comparison with TDS impact. Form 16 generated, ready to download.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Performance',
    desc: 'Cycles, OKRs, self-appraisals, manager reviews. Cycle statuses from DRAFT → ACTIVE → COMPLETED.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><rect x="6" y="10" width="6" height="4"/><circle cx="17" cy="12" r="1.5"/></svg>,
    title: 'Asset Management',
    desc: 'Inventory, assignment, maintenance logs, return tracking. Employees request, admins approve — auditable.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    title: 'Onboarding',
    desc: 'Public /onboard URL — candidates fill the form themselves. HR approves once, the employee record auto-creates.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>,
    title: 'Letters & Reports',
    desc: '8 HR letter types and 13 statutory Excel reports. Drag-and-drop letterhead designer included.',
  },
];

const DELAYS = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', '', 'delay-1', 'delay-2'];

export default function Features() {
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
    <section className={styles.section} id="features" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">One platform · zero glue</div>
          <h2 className="section-title reveal delay-1">Everything HR. <span className="accent">Nothing else.</span></h2>
          <p className="section-sub reveal delay-2">From candidate self-onboarding to full-and-final settlement — Pagahr covers the complete employee lifecycle. No bolt-ons. No spreadsheets. No 4 different vendors talking to each other through brittle integrations.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`${styles.card} reveal ${DELAYS[i]}`}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
