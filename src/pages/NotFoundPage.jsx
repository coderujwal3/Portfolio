import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="relative z-[1] mx-auto flex min-h-[60vh] w-[min(1120px,calc(100%-72px))] flex-col items-start justify-center gap-[14px] py-[74px] pb-[50px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:py-[54px] max-[720px]:pb-[35px] max-[420px]:w-[calc(100%-28px)]">
      <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">404 · PAGE NOT FOUND</p>
      <h1 className="m-0 text-[clamp(36px,6vw,58px)] tracking-[-0.06em]">This page wandered off.</h1>
      <p className="mb-2 mt-0 text-[var(--muted)]">The page you’re looking for doesn’t exist or may have moved.</p>
      <Link className="inline-flex items-center justify-center gap-[10px] rounded-[13px] bg-[linear-gradient(115deg,#5268d9,#6576e3)] px-[19px] py-[14px] text-[11px] font-extrabold text-white shadow-[6px_7px_15px_rgba(75,94,192,0.25),-4px_-4px_10px_rgba(255,255,255,0.65)] transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-[8px_11px_20px_rgba(75,94,192,0.29),-4px_-4px_10px_rgba(255,255,255,0.65)] dark:shadow-[6px_7px_15px_rgba(9,12,19,0.35)]" to="/">Back to home</Link>
    </section>
  );
}
