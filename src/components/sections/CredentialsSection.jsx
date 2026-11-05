import { ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import { credentials } from "../../data/portfolio.js";
import NeoCard from "../ui/NeoCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function CredentialsSection() {
  return (
    <section className="relative z-1 mx-auto w-[min(1120px,calc(100%-72px))] pt-[74px] pb-[50px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-[54px] max-[720px]:pb-[35px] max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading
        index="05"
        eyebrow="COURSES & CREDENTIALS"
        title="Learning with intention."
        description="A few programs and certificates that shaped the fundamentals behind my project work."
      />
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[15px] max-[1000px]:grid-cols-1">
        {credentials.map((credential, index) => {
          const Icon = credential.icon;
          return (
            <NeoCard
              className="relative flex items-start gap-[14px] p-[21px] max-[1000px]:min-h-[104px] max-[720px]:p-[18px]"
              key={credential.name}
            >
              <div
                className={`grid h-10.75 w-10.75 shrink-0 place-items-center rounded-[14px] text-(--accent) shadow-(--shadow-soft) ${index === 1 ? "text-[#35a997]" : ""} ${index === 2 ? "text-[#8d80da]" : ""}`}
              >
                <Icon size={20} />
              </div>
              <div>
                <span className="font-dm-mono text-[8px] uppercase tracking-[0.08em] text-(--accent)">
                  {credential.issuer}
                </span>
                <h3 className="mt-1.75 mb-1.75 text-[12px] leading-[1.55]">
                  {credential.name}
                </h3>
                <p className="m-0 text-[9px] leading-[1.7] text-(--muted)">
                  {credential.note}
                </p>
              </div>
              <span className="absolute top-4.25 right-4.25 text-[#35a997] opacity-80">
                <CheckCircle2 size={17} />
              </span>
            </NeoCard>
          );
        })}
      </div>
      <div className="mt-4.25 rounded-[27px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] bg-(--surface) p-[23px_25px] shadow-(--shadow-out) max-[720px]:p-4.75">
        <div className="flex items-start gap-3.75">
          <span className="grid h-10.75 w-10.75 shrink-0 place-items-center rounded-[14px] text-(--accent) shadow-(--shadow-soft)">
            <Award size={22} />
          </span>
          <div className="min-w-0">
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
              COMMUNITY & HACKATHONS
            </p>
            <h3 className="mt-1.5 mb-1 text-[14px] font-bold">
              Learning by building together.
            </h3>
            <p className="m-0 text-[10px] leading-[1.7] text-(--muted)">
              Communities and events that keep me learning, collaborating, and
              building.
            </p>
          </div>
        </div>
        <div className="mt-4.75 grid grid-cols-3 gap-3 max-[900px]:grid-cols-1">
          <div className="flex min-w-0 items-center justify-between gap-3 rounded-[18px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] p-3.75 shadow-(--shadow-in)">
            <div className="min-w-0">
              <h4 className="m-0 text-[11px] font-bold leading-normal">
                Hacktoberfest Hack Day Prayagraj &times; GDG
              </h4>
              <p className="mb-0 mt-1.5 text-[9px] leading-[1.7] text-(--muted)">
                Participated in the community hack day and continued exploring
                open-source, collaborative product building.
              </p>
            </div>
            <a
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-(--accent) shadow-(--shadow-soft) transition hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              href="https://github.com/coderujwal3/GDG-x-CMP---MLH-Hackday"
              target="_blank"
              rel="noreferrer"
              aria-label="View ScamSentry AI hackday repository"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="flex min-w-0 items-center justify-between gap-3 rounded-[18px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] p-[15px] shadow-(--shadow-in)">
            <div className="min-w-0">
              <h4 className="m-0 text-[11px] font-bold leading-[1.5]">
                AWS Builder Center Community
              </h4>
              <p className="mb-0 mt-1.5 text-[9px] leading-[1.7] text-(--muted)">
                Participated in the community and continued exploring
                open-source, collaborative product building.
              </p>
            </div>
            <a
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-(--accent) shadow-(--shadow-soft) transition hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              href="https://builder.aws.com/community/@ujwalsingh"
              target="_blank"
              rel="noreferrer"
              aria-label="View my AWS Builder Center profile"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="flex min-w-0 items-center justify-between gap-3 rounded-[18px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] p-[15px] shadow-(--shadow-in)">
            <div className="min-w-0">
              <h4 className="m-0 text-[11px] font-bold leading-[1.5]">
                DEV Community
              </h4>
              <p className="mb-0 mt-1.5 text-[9px] leading-[1.7] text-(--muted)">
                Participated in the community where I learned and shared
                knowledge about programming and technology.
              </p>
            </div>
            <a
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-(--accent) shadow-(--shadow-soft) transition hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              href="https://dev.to/ujwalsingh"
              target="_blank"
              rel="noreferrer"
              aria-label="View my DEV community profile"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
