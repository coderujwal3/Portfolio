import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between gap-6.5 border-b border-(--line) bg-[color-mix(in_srgb,var(--surface)_87%,transparent)] px-9.5 py-4.75 backdrop-blur-[18px] max-[1000px]:px-6.75 max-[720px]:gap-3 max-[720px]:px-4.5 max-[720px]:py-3 max-[420px]:px-3">
      <Link
        className="inline-flex shrink-0 items-center gap-2.75 max-[420px]:gap-2"
        to="/"
        aria-label="Ujwal Singh home"
        onClick={closeMenu}
      >
        <span className="grid h-10.5 w-10.5 place-items-center rounded-[14px] bg-(--surface) border-2 border-(--accent) text-[22px] font-extrabold tracking-[-0.08em] text-(--text) shadow-(--shadow-soft) max-[720px]:h-9.25 max-[720px]:w-9.25 max-[720px]:rounded-xl max-[720px]:text-xl">
          U
        </span>
        <span className="flex flex-col gap-0.75">
          <strong className="text-[13px] tracking-[0.015em] max-[420px]:text-[11px]">
            ujwal singh
          </strong>
          <small className="font-dm-mono text-[8px] font-semibold tracking-[0.095em] text-(--muted) max-[720px]:text-[7px] max-[720px]:tracking-[0.04em] max-[420px]:text-[6px]">
            ENGINEER
          </small>
        </span>
      </Link>
      <nav
        className={`flex items-center justify-end gap-[clamp(16px,2.2vw,31px)] max-[1000px]:gap-3.75 max-[720px]:absolute max-[720px]:top-[calc(100%+8px)] max-[720px]:right-4 max-[720px]:left-4 max-[720px]:z-20 max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-0 max-[720px]:rounded-[18px] max-[720px]:border max-[720px]:border-(--line) max-[720px]:bg-(--surface) max-[720px]:p-2.5 max-[720px]:shadow-(--shadow-out) ${mobileOpen ? "max-[720px]:flex" : "max-[720px]:hidden"}`}
        aria-label="Main navigation"
      >
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `relative text-[11px] font-bold text-(--muted) transition-colors duration-200 hover:text-(--text) after:absolute after:-bottom-1.75 after:left-0 after:right-full after:h-0.5 after:rounded-sm after:bg-(--accent) after:content-[''] after:transition-[right] after:duration-200 hover:after:right-0 max-[720px]:rounded-[10px] max-[720px]:px-3.25 max-[720px]:py-3.25 max-[720px]:text-xs max-[720px]:after:hidden ${isActive ? "text-(--text) after:right-0 max-[720px]:bg-[color-mix(in_srgb,var(--surface)_70%,var(--text))]" : "max-[720px]:hover:bg-[color-mix(in_srgb,var(--surface)_70%,var(--text))]"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-3.25 max-[720px]:gap-2">
        <button
          className="grid h-9.75 w-9.75 place-items-center rounded-[13px] border-0 bg-(--surface) text-(--text) shadow-(--shadow-soft) transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-(--shadow-out) max-[720px]:h-9 max-[720px]:w-9 max-[720px]:rounded-xl"
          onClick={() => setDark((value) => !value)}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link
          className="flex items-center gap-2 rounded-[13px] bg-(--surface) px-3.75 py-3 text-[11px] font-extrabold text-(--text) shadow-(--shadow-soft) transition-[color,transform] duration-200 hover:-translate-y-px hover:text-(--accent) max-[720px]:gap-1.25 max-[720px]:px-2.75 max-[720px]:py-2.5 max-[720px]:text-[10px] max-[420px]:hidden"
          to="/contact"
          onClick={closeMenu}
        >
          Let’s talk <ArrowUpRight size={15} />
        </Link>
        <button
          className="hidden h-9 w-9 place-items-center rounded-xl border-0 bg-(--surface) text-(--text) shadow-(--shadow-soft) transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-(--shadow-out) max-[720px]:grid"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
