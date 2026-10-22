export default function SectionHeading({ eyebrow, title, description, index }) {
  return (
    <div className="mb-8.5 flex max-w-190 items-start gap-4.5 max-[720px]:mb-6.25 max-[720px]:gap-3">
      <div className="grid h-10.5 w-10.5 shrink-0 place-items-center rounded-[14px] bg-surface text-[11px] text-(--accent) shadow-shadow-soft max-[720px]:h-8.75 max-[720px]:w-8.75 max-[720px]:rounded-xl max-[720px]:text-[9px]">
        {index}
      </div>
      <div>
        <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
          {eyebrow}
        </p>
        <h2 className="my-2.25 max-w-175 text-[clamp(29px,3.25vw,43px)] font-extrabold leading-[1.17] tracking-[-0.055em] max-[720px]:text-[clamp(28px,7.2vw,37px)]">
          {title}
        </h2>
        {description && (
          <p className="m-0 max-w-160 text-[12px] leading-[1.8] text-(--muted) max-[720px]:text-[11px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
