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
    <section className="section-wrap section-block">
      <SectionHeading index="04" eyebrow="SELECTED WORK" title="Ideas made tangible." description="A mix of open-source tools, full-stack product ideas and ML experiments. Project stage is shown where work is still evolving." />
      <div className="project-toolbar">
        <p><span className="toolbar-dot" /> A few things I’ve been building</p>
        <div className="project-filter" role="group" aria-label="Filter projects">
          {['Featured', 'All projects'].map((label) => <button key={label} className={projectFilter === label ? 'active' : ''} onClick={() => setProjectFilter(label)}>{label}</button>)}
        </div>
      </div>
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article className={`project-card-wrap ${project.featured && project.number === '01' ? 'project-featured' : ''}`} key={project.number} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25, delay: index * 0.025 }}>
                <NeoCard className="project-card">
                  <div className="project-topline"><span className="project-number">/{project.number}</span><span className="project-status">{project.status}</span></div>
                  <div className="project-icon-wrap"><Icon size={23} /></div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3><p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-bottom">
                    {project.url ? <a href={project.url} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a> : <span className="project-no-link">In development <span>↗</span></span>}
                    <span className="project-decoration"><Icon size={17} /></span>
                  </div>
                </NeoCard>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="github-strip neo-panel">
        <div><Github size={23} /><span><strong>There’s more on GitHub.</strong><small>Small experiments, scripts and works in progress.</small></span></div>
        <a href="https://github.com/coderujwal3" target="_blank" rel="noreferrer" className="button-secondary">Visit GitHub <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
