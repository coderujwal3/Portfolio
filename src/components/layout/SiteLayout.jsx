import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme.js';
import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

export default function SiteLayout() {
  const [dark, setDark] = useTheme();

  return (
    <div className="site-shell relative min-h-screen overflow-clip bg-[var(--surface)] text-[var(--text)] transition-colors duration-[250ms] [--surface:#e8edf4] [--surface-raised:#e8edf4] [--text:#273248] [--muted:#707c91] [--line:rgba(115,130,154,0.18)] [--shadow-out:9px_9px_20px_#cbd1db,-9px_-9px_20px_#fff] [--shadow-soft:5px_5px_12px_#cbd1db,-5px_-5px_12px_#fff] [--shadow-in:inset_5px_5px_10px_#cbd1db,inset_-5px_-5px_10px_#fff] [--accent:#5268d9] [--mint:#35a997] dark:[--surface:#202631] dark:[--surface-raised:#202631] dark:[--text:#e8edf8] dark:[--muted:#a0acc0] dark:[--line:rgba(173,188,211,0.13)] dark:[--shadow-out:9px_9px_20px_#171c24,-9px_-9px_20px_#29303c] dark:[--shadow-soft:5px_5px_12px_#171c24,-5px_-5px_12px_#29303c] dark:[--shadow-in:inset_5px_5px_10px_#171c24,inset_-5px_-5px_10px_#29303c] dark:[--accent:#91a0ff] dark:[--mint:#66d8c4] motion-reduce:[&_*]:[animation-duration:0.01ms] motion-reduce:[&_*]:[animation-iteration-count:1] motion-reduce:[&_*]:[transition-duration:0.01ms]">
      <div className="pointer-events-none absolute top-[260px] right-[-260px] z-0 h-[460px] w-[460px] rounded-full bg-[#5268d9] opacity-[0.13] blur-[90px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[1850px] left-[-270px] z-0 h-[460px] w-[460px] rounded-full bg-[#3cb7a3] opacity-[0.08] blur-[90px]" aria-hidden="true" />
      <SiteHeader dark={dark} setDark={setDark} />
      <main className="relative z-[1]"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
