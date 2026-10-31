import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { skills } from "../../data/portfolio.js";
import CertificateCarousel from "../ui/CertificateCarousel.jsx";
import NeoCard from "../ui/NeoCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function SkillsSection() {
  return (
    <section className="relative z-1 mx-auto w-[min(1120px,calc(100%-72px))] pt-18.5 pb-12.5 max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-13.5 max-[720px]:pb-8.75 max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading
        index="02"
        eyebrow="MY TOOLKIT"
        title="Tools are means, not the goal."
        description="A practical stack across product engineering, data work and defensive security. I keep expanding it as projects demand."
      />
      <div className="grid grid-cols-4 gap-3.75 max-[1000px]:grid-cols-2 max-[720px]:gap-2.75 max-[420px]:grid-cols-1">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <NeoCard className="h-full min-h-67.5 p-[22px_19px] max-[1000px]:min-h-62.5 max-[720px]:min-h-67.5 max-[720px]:p-[17px_15px] max-[420px]:min-h-0">
                <div className="mb-4.5 flex items-center justify-between">
                  <span className="grid h-10.25 w-10.25 place-items-center rounded-[14px] text-(--accent) shadow-(--shadow-soft)">
                    <Icon size={20} />
                  </span>
                  <span className="font-dm-mono text-[9px] text-(--muted)">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-1.25 mt-0 text-[14px] font-bold tracking-[-0.03em] max-[720px]:text-xs">
                  {skill.title}
                </h3>
                <p className="mb-3.5 mt-0 min-h-8 text-[9px] leading-[1.65] text-(--muted) max-[720px]:min-h-9.5 max-[720px]:text-[9px] max-[420px]:min-h-0">
                  {skill.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.75 max-[720px]:gap-1.25">
                  {skill.items.map((item) => (
                    <span
                      className="inline-block rounded-lg bg-[color-mix(in_srgb,var(--surface)_78%,var(--text))] px-2 py-1.5 text-[10px] leading-none text-(--text) dark:bg-[color-mix(in_srgb,var(--surface)_79%,white)] max-[720px]:p-1.5 max-[720px]:text-[7px]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </NeoCard>
            </motion.div>
          );
        })}
      </div>
      <CertificateCarousel />
      <div className="mt-4.5 flex items-center gap-3 rounded-[15px] p-4 px-5 text-(--muted) shadow-(--shadow-in) max-[720px]:items-start max-[720px]:p-3.5">
        <Terminal className="shrink-0 text-[#35a997]" size={17} />
        <p className="m-0 text-[10px] leading-[1.7]">
          <strong className="text-(--text)">Daily workflow:</strong> Git &
          GitHub · VS Code · Linux / Kali · REST APIs · documentation-first
          problem solving
        </p>
      </div>
    </section>
  );
}
