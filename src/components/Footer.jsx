import styles from './Footer.module.css';

const MODULES = [
  'Employee Management', 'Payroll', 'Attendance', 'Leave Management',
  'Tax & Form 16',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logoLink}>
              <img src="/pagahr.png" alt="Pagahr" className={styles.logoImg} />
            </a>
            <p>The AI-first HRMS for Indian enterprises.<br />Power your people. Power your business.</p>
            <div className={styles.parent}>
              A product by{' '}
              <a href="https://joviratech.com" target="_blank" rel="noopener noreferrer">
                Jovira Technologies Pvt. Ltd.
              </a>
            </div>
          </div>

          {/* Modules */}
          <div className={styles.col}>
            <h4>Modules</h4>
            {MODULES.map((m) => (
              <a key={m} href="#">{m}</a>
            ))}
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h4>Company</h4>
            <a href="https://joviratech.com" target="_blank" rel="noopener noreferrer">Jovira Technologies</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© 2026 Jovira Technologies Private Limited. All rights reserved.</p>
          <p>Mumbai data residency · DPDP-aligned</p>
        </div>
      </div>
    </footer>
  );
}
