import {
  Code2,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import NeoCard from "../ui/NeoCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="section-wrap section-block">
      <SectionHeading
        index="01"
        eyebrow="A LITTLE CONTEXT"
        title="Curious by default. Builder by habit."
        description="A broad toolkit, one consistent goal: solve real problems thoughtfully."
      />
      <div className="about-grid">
        <NeoCard className="about-main-card">
          <div className="card-kicker">
            <Sparkles size={16} /> THE SHORT VERSION
          </div>
          <h3>
            I’m happiest when I’m{" "}
            <span className="gradient-text">learning by building.</span>
          </h3>
          <p>
            I’m pursuing a B.Tech in Artificial Intelligence & Machine Learning
            at Kashi Institute of Technology, affiliated with Dr. A.P.J. Abdul
            Kalam Technical University. My interests span full-stack product
            development, applied machine learning, Linux tooling and ethical
            security research.
          </p>
          <p>
            I enjoy taking an idea from a rough problem statement to something
            testable: designing the interface, shaping the API, thinking through
            the data, then asking how the system could fail and how to make it
            safer.
          </p>
          <div className="about-facts">
            <div>
              <span className="fact-icon">
                <GraduationCap size={17} />
              </span>
              <span>
                <small>EDUCATION</small>
                <strong>B.Tech · AI & ML</strong>
              </span>
            </div>
            <div>
              <span className="fact-icon">
                <MapPin size={17} />
              </span>
              <span>
                <small>LOCATION</small>
                <strong>India</strong>
              </span>
            </div>
            <div>
              <span className="fact-icon">
                <Rocket size={17} />
              </span>
              <span>
                <small>APPROACH</small>
                <strong>Learn by shipping</strong>
              </span>
            </div>
          </div>
        </NeoCard>
        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="hero-orbit orbit-large" />
          <div className="hero-orbit orbit-small" />
          <div className="hero-visual neo-panel">
            <div className="visual-topline">
              <span>UJWAL.SYS</span>
              <span className="live-label">
                <i /> AVAILABLE TO CONNECT
              </span>
            </div>
            <div className="monogram-wrap">
              <div className="monogram-glow" />
              <div className="monogram">
                US<span>↗</span>
              </div>
              <div className="orbit-chip chip-brain">
                <BrainCircuit size={20} />
              </div>
              <div className="orbit-chip chip-code">
                <Code2 size={20} />
              </div>
              <div className="orbit-chip chip-shield">
                <ShieldCheck size={20} />
              </div>
            </div>
            <div className="visual-meta">
              <div>
                <span>FOCUS</span>
                <strong>Build · Learn · Secure</strong>
              </div>
              <div>
                <span>BASE</span>
                <strong>
                  <MapPin size={13} /> India
                </strong>
              </div>
            </div>
            <div className="visual-terminal">
              <span className="terminal-prompt">$</span> whoami{" "}
              <span className="terminal-output">ujwal.singh</span>
              <span className="cursor-block" />
            </div>
          </div>
          <div className="float-tag tag-ai">
            <BrainCircuit size={16} />
            <span>AI / ML</span>
          </div>
          <div className="float-tag tag-security">
            <ShieldCheck size={16} />
            <span>Cybersecurity</span>
          </div>
        </motion.div>
        <div className="about-side-stack">
          <NeoCard className="mini-stat-card">
            <div className="mini-stat-icon">
              <Code2 size={19} />
            </div>
            <strong>Full-stack</strong>
            <p>From interface details to server-side logic.</p>
            <span className="mini-card-index">01 / BUILD</span>
          </NeoCard>

          <NeoCard className="mini-stat-card">
            <div className="mini-stat-icon mint">
              <BrainCircuit size={19} />
            </div>
            <strong>AI + ML</strong>
            <p>Turning data, models and experiments into useful features.</p>
            <span className="mini-card-index">02 / EXPLORE</span>
          </NeoCard>

          <NeoCard className="mini-stat-card">
            <div className="mini-stat-icon violet">
              <ShieldCheck size={19} />
            </div>
            <strong>Security mindset</strong>
            <p>Test responsibly. Explain evidence. Respect uncertainty.</p>
            <span className="mini-card-index">03 / PROTECT</span>
          </NeoCard>
        </div>
      </div>
    </section>
  );
}
