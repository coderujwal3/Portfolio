import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Award, Github } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function ProjectsSection() {
  const [projectFilter, setProjectFilter] = useState('Featured');
  const visibleProjects = projectFilter === 'Featured' ? projects.filter((project) => project.featured) : projects;

  return (
    <section className="relative z-1 mx-auto w-[min(1120px,calc(100%-72px))] pt-18.5 pb-12.5 max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-13.5 max-[720px]:pb-8.75 max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading index="04" eyebrow="SELECTED WORK" title="Ideas made tangible." description="A mix of open-source tools, full-stack product ideas and ML experiments. Project stage is shown where work is still evolving." />
      <div className="mb-5 flex items-center justify-between gap-4 max-[720px]:flex-col max-[720px]:items-start">
        <p className="m-0 flex items-center gap-2.25 text-[10px] text-[(--muted)"><span className="h-1.5 w-1.5 rounded-full bg-[#35a997]" /> A few things I've been building</p>
        <div className="flex items-center gap-0.75 rounded-xl bg-(--surface) p-1 shadow-(--shadow-in)" role="group" aria-label="Filter projects">
          {['Featured', 'All projects'].map((label) => <button key={label} className={`cursor-pointer rounded-[9px] border-0 bg-transparent px-3 py-2.25 text-[9px] font-bold text-(--muted) ${projectFilter === label ? 'bg-(--surface) text-(--text) shadow-(--shadow-soft)' : ''} max-[420px]:px-2.25`} onClick={() => setProjectFilter(label)}>{label}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[720px]:grid-cols-1">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article className="min-w-0" key={project.number} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25, delay: index * 0.025 }}>
                <NeoCard className="flex h-full min-h-85 flex-col p-[20px_21px_16px] max-[720px]:min-h-0">
                  <div className="flex items-center justify-between gap-2"><span className="font-dm-mono text-[10px] text-(--accent)">/{project.number}</span><span className="rounded-[99px] bg-[color-mix(in_srgb,var(--surface)_70%,var(--mint))] px-2 py-1.25 text-[7px] font-extrabold text-[color-mix(in_srgb,var(--mint)_70%,var(--text))]">{project.status}</span></div>
                  <div className="my-5.25 mb-4.5 grid h-11.5 w-11.5 place-items-center rounded-[15px] text-(--accent) shadow-(--shadow-soft)"><Icon size={23} /></div>
                  <p className="mb-1.75 mt-0 font-dm-mono text-[7px] tracking-[0.12em] text-(--muted)">{project.category}</p>
                  <h3 className="m-0 text-[19px] tracking-[-0.045em]">{project.title}</h3><p className="mt-2.75 mb-4 text-[10px] leading-[1.85] text-(--muted) max-[720px]:text-[11px]">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">{project.tags.map((tag) => <span className="inline-block rounded-lg bg-[color-mix(in_srgb,var(--surface)_78%,var(--text))] px-1.75 py-1.75 text-[7px] leading-none text-(--text) dark:bg-[color-mix(in_srgb,var(--surface)_79%,white)]" key={tag}>{tag}</span>)}</div>
                  <div className="mt-4.5 flex items-center justify-between gap-2.25 border-t border-(--line) pt-3.25">
                    {project.url ? <a className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-(--accent) transition-[gap] hover:gap-2.5" href={project.url} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a> : <span className="text-[8px] font-bold text-(--muted)">In development <span className="ml-1 text-(--accent)">↗</span></span>}
                    <span className="grid place-items-center text-(--muted) opacity-[0.65]"><Icon size={17} /></span>
                  </div>
                </NeoCard>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center justify-between gap-5 rounded-[19px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] bg-(--surface) p-[21px_25px] shadow-(--shadow-out) max-[720px]:flex-col max-[720px]:items-start max-[720px]:p-4.75">
        <div className="flex items-center gap-3.5"><Github className="text-(--accent)" size={23} /><span className="flex flex-col gap-1.25"><strong className="text-[11px]">There's more on GitHub.</strong><small className="text-[9px] text-(--muted)">Small experiments, scripts and works in progress.</small></span></div>
        <a href="https://github.com/coderujwal3" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-[13px] bg-(--surface) px-3.25 py-2.75 text-[9px] font-extrabold text-(--text) shadow-(--shadow-soft) transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-(--shadow-out) max-[720px]:self-stretch">Visit GitHub <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
