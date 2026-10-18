import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { skills } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function SkillsSection() {
  return (
    <section className="section-wrap section-block">
      <SectionHeading index="02" eyebrow="MY TOOLKIT" title="Tools are means, not the goal." description="A practical stack across product engineering, data work and defensive security. I keep expanding it as projects demand." />
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.07 }}>
              <NeoCard className="skill-card">
                <div className="skill-head"><span className="skill-icon"><Icon size={20} /></span><span className="skill-count">0{index + 1}</span></div>
                <h3>{skill.title}</h3><p>{skill.subtitle}</p>
                <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
              </NeoCard>
            </motion.div>
          );
        })}
      </div>
      <div className="toolbelt-note"><Terminal size={17} /><p><strong>Daily workflow:</strong> Git & GitHub · VS Code · Linux / Kali · REST APIs · documentation-first problem solving</p></div>
    </section>
  );
}
