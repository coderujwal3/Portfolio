import { motion } from "framer-motion";
import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { experience } from "../../data/portfolio.js";
import NeoCard from "../ui/NeoCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function ExperienceSection() {
  return (
    <section className="relative z-1 mx-auto w-[min(1120px,calc(100%-72px))] pt-18.5 pb-12.5 max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-13.5 max-[720px]:pb-8.75 max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading
        index="03"
        eyebrow="LEARNING IN THE REAL WORLD"
        title="Experience that compounds."
        description="Structured programs, project work, and hands-on experimentation—each one building a stronger engineering foundation."
      />
      <div className="grid grid-cols-[1.45fr_0.78fr] items-start gap-6.5 max-[720px]:grid-cols-1 max-[720px]:gap-4.5">
        <div className="flex flex-col gap-4.25">
          {experience.map((item, index) => (
            <motion.article
              className="grid grid-cols-[21px_minmax(0,1fr)] gap-3.25"
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="relative flex justify-center">
                <span className="z-1 mt-6.75 h-2.75 w-2.75 rounded-full border-[3px] border-(--surface) bg-(--accent) shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_16%,transparent)]" />
                {index < experience.length - 1 && (
                  <span className="absolute top-9.5 -bottom-7.25 w-px bg-[color-mix(in_srgb,var(--accent)_20%,var(--line))]" />
                )}
              </div>
              <NeoCard className="px-6.25 pt-6.25 pb-5.5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
                    {item.kind}
                  </span>
                  <span className="rounded-[99px] bg-[color-mix(in_srgb,var(--surface)_72%,var(--accent))] px-1.5 py-1.5 font-dm-mono text-[8px] text-(--muted)">
                    {item.date}
                  </span>
                </div>
                <h3 className="mt-3.75 mb-1.25 text-[17px] tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p className="m-0 text-[10px] text-(--muted)">
                  {item.org}
                </p>
                <ul className="mt-5 mb-0 grid list-none gap-2.25 p-0">
                  {item.points.map((point) => (
                    <li
                      className="flex items-start gap-2 text-[10px] leading-[1.7] text-(--muted)"
                      key={point}
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#35a997]"
                        size={15}
                      />{" "}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </NeoCard>
            </motion.article>
          ))}
        </div>
        <aside className="flex flex-col gap-4.25 max-[720px]:grid max-[720px]:grid-cols-2 max-[420px]:grid-cols-1">
          <NeoCard className="p-6.25 max-[720px]:px-4.25 max-[720px]:py-5">
            <span className="mb-5.75 grid h-11.75 w-11.75 place-items-center rounded-[15px] text-(--accent) shadow-(--shadow-soft) max-[720px]:mb-4.5 max-[720px]:h-10 max-[720px]:w-10">
              <GraduationCap size={24} />
            </span>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
              EDUCATION
            </p>
            <h3 className="mt-2.5 mb-2 text-[19px] leading-[1.35] tracking-[-0.045em] max-[720px]:text-base">
              B.Tech — Artificial Intelligence & Machine Learning
            </h3>
            <p className="mt-0 mb-3.25 text-[11px] font-extrabold">
              Kashi Institute of Technology
            </p>
            <p className="m-0 text-[10px] leading-[1.8] text-(--muted)">
              Affiliated with <strong>Dr. A.P.J. Abdul Kalam Technical University
              (AKTU).</strong>
            </p>
            <div className="mt-5 flex items-center gap-2 border-t border-(--line) pt-3.75 font-dm-mono text-[8px] text-(--muted)">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35a997]" />{" "}
              <span>Final year</span>
            </div>
          </NeoCard>

          {/* Recognition part */}
          <NeoCard className="p-6.25 max-[720px]:px-4.25 max-[720px]:py-5">
            <span className="mb-5.75 grid h-11.75 w-11.75 place-items-center rounded-[15px] text-[#c58d34] shadow-(--shadow-soft) max-[720px]:mb-4.5 max-[720px]:h-10 max-[720px]:w-10">
              <Award size={24} />
            </span>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
              RECOGNITION
            </p>
            <h3 className="mt-2.5 mb-2 text-[27px] tracking-[-0.06em] max-[720px]:text-[23px]">
              Ex-Vice President
            </h3>
            <p className="m-0 text-[11px] font-bold">
              <span className="text-[14px]">Samwaad Club</span>, Kashi Institute of Technology
            </p>
            <span className="mt-3.25 inline-block text-[9px] text-(--muted)">
              Problem-solving · Team collaboration · Event management · Leadership
            </span>
          </NeoCard>
          
          <NeoCard className="p-6.25 max-[720px]:px-4.25 max-[720px]:py-5">
            <span className="mb-5.75 grid h-11.75 w-11.75 place-items-center rounded-[15px] text-[#c58d34] shadow-(--shadow-soft) max-[720px]:mb-4.5 max-[720px]:h-10 max-[720px]:w-10">
              <Award size={24} />
            </span>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
              RECOGNITION
            </p>
            <h3 className="mt-2.5 mb-2 text-[27px] tracking-[-0.06em] max-[720px]:text-[23px]">
              Best Coordinator Award
            </h3>
            <p className="m-0 text-[11px] font-bold">
              <span className="text-[14px]">Techkriti 2.0</span>, Kashi Institute of Technology
            </p>
            <span className="mt-3.25 inline-block text-[9px] text-(--muted)">
              Best Coordinator Award · Team collaboration · Event management
            </span>
          </NeoCard>
        </aside>
      </div>
    </section>
  );
}
