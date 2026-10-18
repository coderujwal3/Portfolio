import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, BrainCircuit, ChevronDown, Code2, Mail, MapPin, ShieldCheck,
  Youtube, Github,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero section-wrap">
      <div className="hero-copy">
        <motion.div className="availability-pill" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="status-dot" /> Building, learning & shipping
        </motion.div>
        <motion.p className="hero-overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>HEY, I’M UJWAL SINGH</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }}>
          I build things at the intersection of <span className="gradient-text">AI, code & security.</span>
        </motion.h1>
        <p className="hero-lede">Final-year AI & Machine Learning engineering student, full-stack developer, and cybersecurity enthusiast. I like making complex ideas useful—and understanding how they work beneath the surface.</p>
        <div className="hero-actions">
          <Link className="button-primary" to="/projects">Explore my work <ArrowRight size={17} /></Link>
          <Link className="button-secondary" to="/contact"><Mail size={16} /> Get in touch</Link>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/coderujwal3" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
          <a href="https://www.youtube.com/@Nthree3" target="_blank" rel="noreferrer"><Youtube size={17} /> N3 Network Node Neural <ArrowUpRight size={12} /></a>
        </div>
      </div>

      <motion.div className="hero-visual-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.2 }}>
        <div className="hero-orbit orbit-large" />
        <div className="hero-orbit orbit-small" />
        <div className="hero-visual neo-panel">
          <div className="visual-topline"><span>UJWAL.SYS</span><span className="live-label"><i /> AVAILABLE TO CONNECT</span></div>
          <div className="monogram-wrap">
            <div className="monogram-glow" />
            <div className="monogram">US<span>↗</span></div>
            <div className="orbit-chip chip-brain"><BrainCircuit size={20} /></div>
            <div className="orbit-chip chip-code"><Code2 size={20} /></div>
            <div className="orbit-chip chip-shield"><ShieldCheck size={20} /></div>
          </div>
          <div className="visual-meta"><div><span>FOCUS</span><strong>Build · Learn · Secure</strong></div><div><span>BASE</span><strong><MapPin size={13} /> India</strong></div></div>
          <div className="visual-terminal"><span className="terminal-prompt">$</span> whoami <span className="terminal-output">ujwal.singh</span><span className="cursor-block" /></div>
        </div>
        <div className="float-tag tag-ai"><BrainCircuit size={16} /><span>AI / ML</span></div>
        <div className="float-tag tag-security"><ShieldCheck size={16} /><span>Cybersecurity</span></div>
      </motion.div>
      <Link to="/about" className="scroll-cue"><span className="scroll-line" /> EXPLORE ABOUT <ChevronDown size={14} /></Link>
    </section>
  );
}
