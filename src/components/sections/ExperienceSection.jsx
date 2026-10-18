import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { experience } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function ExperienceSection() {
  return (
    <section className="section-wrap section-block">
      <SectionHeading index="03" eyebrow="LEARNING IN THE REAL WORLD" title="Experience that compounds." description="Structured programs, project work, and hands-on experimentation—each one building a stronger engineering foundation." />
      <div className="experience-layout">
        <div className="experience-timeline">
          {experience.map((item, index) => (
            <motion.article className="experience-item" key={item.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <div className="timeline-rail"><span className="timeline-dot" />{index < experience.length - 1 && <span className="timeline-line" />}</div>
              <NeoCard className="experience-card">
                <div className="experience-top"><span className="eyebrow">{item.kind}</span><span className="date-pill">{item.date}</span></div>
                <h3>{item.title}</h3><p className="experience-org">{item.org}</p>
                <ul>{item.points.map((point) => <li key={point}><CheckCircle2 size={15} /> <span>{point}</span></li>)}</ul>
              </NeoCard>
            </motion.article>
          ))}
        </div>
        <aside className="education-column">
          <NeoCard className="education-card">
            <span className="big-card-icon"><GraduationCap size={24} /></span>
            <p className="eyebrow">EDUCATION</p><h3>B.Tech — Artificial Intelligence & Machine Learning</h3>
            <p className="education-org">Kashi Institute of Technology</p>
            <p className="education-detail">Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).</p>
            <div className="education-line"><span /> <span>Final year</span></div>
          </NeoCard>
          <NeoCard className="recognition-card">
            <span className="big-card-icon gold"><Award size={24} /></span>
            <p className="eyebrow">RECOGNITION</p><h3>1st position</h3>
            <p>Internal Smart India Hackathon</p>
            <span className="recognition-caption">Problem-solving · Team collaboration</span>
          </NeoCard>
        </aside>
      </div>
    </section>
  );
}
