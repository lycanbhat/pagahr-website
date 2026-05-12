import styles from './LogoStrip.module.css';

const TRUST_ITEMS = [
  { icon: '🤖', label: 'Powered by', value: 'Built-in AI' },
  { icon: '🇮🇳', label: 'Built for', value: 'Indian compliance' },
  { icon: '🏙️', label: 'Data hosted in', value: 'Mumbai region' },
  { icon: '⚡', label: 'Setup in', value: 'under 2 hours' },
  { icon: '📱', label: 'Native apps on', value: 'iOS & Android' },
  { icon: '🔐', label: 'Architecture', value: 'Multi-tenant SaaS' },
  { icon: '🛡️', label: 'Compliance', value: 'DPDP-aligned' },
  { icon: '📊', label: 'Modules', value: '20 integrated' },
];

export default function TrustStrip() {
  return (
    <section className={styles.strip}>
      <div className="container">
        <p className={styles.label}>Why teams choose Pagahr</p>
        <div className={styles.grid}>
          {TRUST_ITEMS.map((item) => (
            <div key={item.value} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <div>
                <div className={styles.itemLabel}>{item.label}</div>
                <div className={styles.itemValue}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
