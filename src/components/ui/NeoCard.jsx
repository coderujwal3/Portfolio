export default function NeoCard({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-[22px] border border-[color-mix(in_srgb,var(--surface)_45%,var(--line))] bg-surface shadow-shadow-soft transition-[transform,box-shadow,border-color] duration-250 hover:shadow-(--shadow-out) ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
