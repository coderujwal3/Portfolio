import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { experience } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function ExperienceSection() {
  return (
    <section className="relative z-[1] mx-auto w-[min(1120px,calc(100%-72px))] pt-[74px] pb-[50px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-[54px] max-[720px]:pb-[35px] max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading index="03" eyebrow="LEARNING IN THE REAL WORLD" title="Experience that compounds." description="Structured programs, project work, and hands-on experimentation—each one building a stronger engineering foundation." />
      <div className="grid grid-cols-[1.45fr_0.78fr] items-start gap-[26px] max-[720px]:grid-cols-1 max-[720px]:gap-[18px]">
        <div className="flex flex-col gap-[17px]">
          {experience.map((item, index) => (
            <motion.article className="grid grid-cols-[21px_minmax(0,1fr)] gap-[13px]" key={item.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <div className="relative flex justify-center"><span className="z-[1] mt-[27px] h-[11px] w-[11px] rounded-full border-[3px] border-[var(--surface)] bg-[var(--accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_16%,transparent)]" />{index < experience.length - 1 && <span className="absolute top-[38px] bottom-[-29px] w-px bg-[color-mix(in_srgb,var(--accent)_20%,var(--line))]" />}</div>
              <NeoCard className="px-[25px] pt-[25px] pb-[22px]">
                <div className="flex flex-wrap items-center justify-between gap-3"><span className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">{item.kind}</span><span className="rounded-[99px] bg-[color-mix(in_srgb,var(--surface)_72%,var(--accent))] px-[9px] py-[6px] font-dm-mono text-[8px] text-[var(--muted)]">{item.date}</span></div>
                <h3 className="mt-[15px] mb-[5px] text-[17px] tracking-[-0.035em]">{item.title}</h3><p className="m-0 text-[10px] text-[var(--muted)]">{item.org}</p>
                <ul className="mt-5 mb-0 grid list-none gap-[9px] p-0">{item.points.map((point) => <li className="flex items-start gap-2 text-[10px] leading-[1.7] text-[var(--muted)]" key={point}><CheckCircle2 className="mt-0.5 shrink-0 text-[#35a997]" size={15} /> <span>{point}</span></li>)}</ul>
              </NeoCard>
            </motion.article>
          ))}
        </div>
        <aside className="flex flex-col gap-[17px] max-[720px]:grid max-[720px]:grid-cols-2 max-[420px]:grid-cols-1">
          <NeoCard className="p-[25px] max-[720px]:px-[17px] max-[720px]:py-5">
            <span className="mb-[23px] grid h-[47px] w-[47px] place-items-center rounded-[15px] text-[var(--accent)] shadow-[var(--shadow-soft)] max-[720px]:mb-[18px] max-[720px]:h-10 max-[720px]:w-10"><GraduationCap size={24} /></span>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">EDUCATION</p><h3 className="mt-[10px] mb-2 text-[19px] leading-[1.35] tracking-[-0.045em] max-[720px]:text-base">B.Tech — Artificial Intelligence & Machine Learning</h3>
            <p className="mt-0 mb-[13px] text-[11px] font-extrabold">Kashi Institute of Technology</p>
            <p className="m-0 text-[10px] leading-[1.8] text-[var(--muted)]">Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).</p>
            <div className="mt-5 flex items-center gap-2 border-t border-[var(--line)] pt-[15px] font-dm-mono text-[8px] text-[var(--muted)]"><span className="h-[6px] w-[6px] rounded-full bg-[#35a997]" /> <span>Final year</span></div>
          </NeoCard>
          <NeoCard className="p-[25px] max-[720px]:px-[17px] max-[720px]:py-5">
            <span className="mb-[23px] grid h-[47px] w-[47px] place-items-center rounded-[15px] text-[#c58d34] shadow-[var(--shadow-soft)] max-[720px]:mb-[18px] max-[720px]:h-10 max-[720px]:w-10"><Award size={24} /></span>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">RECOGNITION</p><h3 className="mt-[10px] mb-[5px] text-[27px] tracking-[-0.06em] max-[720px]:text-[23px]">1st position</h3>
            <p className="m-0 text-[11px] font-bold">Internal Smart India Hackathon</p>
            <span className="mt-[13px] inline-block text-[9px] text-[var(--muted)]">Problem-solving · Team collaboration</span>
          </NeoCard>
        </aside>
      </div>
    </section>
  );
}
