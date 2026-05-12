import { useCounter } from '../hooks/useCounter';
import styles from './Stats.module.css';

function StatItem({ value, unit, label, delay }) {
  const { ref, value: count } = useCounter(value);
  return (
    <div className={`${styles.item} reveal ${delay}`} ref={ref}>
      <div className={styles.value}>
        {count}<span className={styles.unit}>{unit}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          <StatItem value={20} unit="" label="Integrated modules — payroll, leave, tax, performance and more" delay="" />
          <StatItem value={98} unit="%" label="Faster monthly payroll runs versus spreadsheet workflows" delay="delay-1" />
          <StatItem value={2} unit="hrs" label="Average setup time — onboard your full team same-day" delay="delay-2" />
          <StatItem value={13} unit="" label="Statutory reports auto-generated — PF, ESI, TDS, Form 16, more" delay="delay-3" />
        </div>
      </div>
    </section>
  );
}
