import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logoLink}>
              <img src="/pagahr.png" alt="Pagahr" className={styles.logoImg} />
            </a>
            <p>The AI-first HRMS for Indian enterprises. Power your people. Power your business.</p>
            <div className={styles.socials}>
              <a className={styles.social} href="#" aria-label="LinkedIn">in</a>
              <a className={styles.social} href="#" aria-label="X">𝕏</a>
              <a className={styles.social} href="#" aria-label="YouTube">▶</a>
              <a className={styles.social} href="#" aria-label="GitHub">{'{ }'}</a>
            </div>
          </div>
          <div className={styles.col}>
            <h4>Product</h4>
            <a href="#">Payroll</a>
            <a href="#">Attendance</a>
            <a href="#">Leave</a>
            <a href="#">Performance</a>
            <a href="#">AI Chatbot</a>
            <a href="#">Mobile app</a>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <a href="#">About Nexsys</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.col}>
            <h4>Resources</h4>
            <a href="#">Docs</a>
            <a href="#">API</a>
            <a href="#">Changelog</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.col}>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">DPDP</a>
            <a href="#">Security</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Nexsys Technology Solutions · Pagahr v1.0.3 · Made in Bengaluru</p>
          <p>Mumbai data residency · DPDP-aligned · ISO 27001 (in progress)</p>
        </div>
      </div>
    </footer>
  );
}
