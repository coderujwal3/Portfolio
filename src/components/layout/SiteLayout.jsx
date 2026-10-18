import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme.js';
import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

export default function SiteLayout() {
  const [dark, setDark] = useTheme();

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <SiteHeader dark={dark} setDark={setDark} />
      <main><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
