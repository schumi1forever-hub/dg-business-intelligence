export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} DG Business Intelligence</span>

      <a
        className="footer-cta"
        href="mailto:tim_de_goede@yahoo.com?subject=Kennismaking"
      >
        Plan een kennismaking
      </a>

      <span>Power BI • SQL • Consultant &amp; Trainer</span>
    </footer>
  );
}