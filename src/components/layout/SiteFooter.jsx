import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="relative z-[1] mx-auto flex w-[min(1120px,calc(100%-72px))] items-center justify-between gap-5 border-t border-[var(--line)] pt-6 pb-[31px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-[17px] max-[720px]:pt-[22px] max-[420px]:w-[calc(100%-28px)]">
      <Link
        className="inline-flex shrink-0 items-center gap-[11px] max-[420px]:gap-2"
        to="/"
      >
        <span className="grid h-9.5 w-9.5 place-items-center rounded-xl bg-(--surface) border-2 border-(--accent) text-xl font-extrabold tracking-[-0.08em] text-(--text) shadow-(--shadow-soft)">
          U
        </span>
        <span className="flex flex-col gap-[3px]">
          <strong className="text-xs tracking-[0.015em]">ujwal singh</strong>
          <small className="font-dm-mono text-[7px] tracking-[0.095em] text-[var(--muted)]">
            CURIOUS TODAY. BETTER TOMORROW.
          </small>
        </span>
      </Link>
      <p className="m-0 max-w-[320px] text-center text-[9px] text-[var(--muted)] max-[720px]:text-left">
        Designed with intent. Built with React. Styled with neumorphism.
      </p>
      <div className="flex items-center gap-[17px] font-dm-mono text-[8px] text-[var(--muted)] max-[720px]:w-full max-[720px]:justify-between">
        <span>© {new Date().getFullYear()} Ujwal Singh</span>
        <Link
          className="inline-flex items-center gap-1 font-manrope font-extrabold text-[var(--accent)]"
          to="/"
          aria-label="Back to home"
        >
          <ArrowDownRight size={16} className="rotate-[-135deg]" /> Back to home
        </Link>
      </div>
    </footer>
  );
}
