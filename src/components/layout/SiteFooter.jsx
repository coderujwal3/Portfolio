import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="footer section-wrap">
      <Link className="brand footer-brand" to="/">
        <span className="brand-mark">U<span>.</span></span>
        <span className="brand-copy"><strong>ujwal singh</strong><small>CURIOUS TODAY. BETTER TOMORROW.</small></span>
      </Link>
      <p>Designed with intent. Built with React. Styled with neumorphism.</p>
      <div className="footer-right">
        <span>© {new Date().getFullYear()} Ujwal Singh</span>
        <Link to="/" aria-label="Back to home"><ArrowDownRight size={16} className="back-to-top-icon" /> Back to home</Link>
      </div>
    </footer>
  );
}
