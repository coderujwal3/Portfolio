import { useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function SiteHeader({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Ujwal Singh home" onClick={closeMenu}>
        <span className="brand-mark">U<span>.</span></span>
        <span className="brand-copy"><strong>ujwal singh</strong><small>ENGINEER · BUILDER · LEARNER</small></span>
      </Link>
      <nav className={`desktop-nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navItems.map(({ label, to }) => (
          <NavLink key={to} to={to} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-actions">
        <button className="icon-button theme-toggle" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link className="topbar-cta" to="/contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></Link>
        <button className="icon-button mobile-menu" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
