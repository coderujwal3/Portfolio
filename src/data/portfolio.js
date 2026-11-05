import {
  BrainCircuit, Bot, Code2, Database, Laptop, ScanSearch, ShieldCheck, Terminal,
} from 'lucide-react';

export const skills = [
  {
    icon: Code2, title: 'Frontend engineering', subtitle: 'Interfaces that feel considered',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'React Native', 'Vite', 'Three.js / R3F', 'GSAP', 'Framer Motion', 'Figma'],
  },
  {
    icon: Database, title: 'Backend & data', subtitle: 'APIs, data models and integrations',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    icon: BrainCircuit, title: 'AI & machine learning', subtitle: 'From features to experiments',
    items: ['Python', 'NumPy', 'pandas', 'scikit-learn', 'TensorFlow', 'PyTorch', 'TF-IDF', 'K-Means', 'DBSCAN', 'XGBoost'],
  },
  {
    icon: ShieldCheck, title: 'Security & forensics', subtitle: 'Think defensively, test responsibly',
    items: ['Kali Linux', 'Web app testing', 'Image forensics', 'Metadata analysis', 'OSINT scripting', 'Risk assessment', 'Threat analysis'],
  },
];

export const projects = [
  {
    number: '01', category: 'AI + SECURITY', title: 'ScamSentry AI',
    description: 'A Python CLI that inspects suspicious text and URLs using deterministic signals, explains social-engineering indicators, validates AI interpretations, and assigns an explainable risk band.',
    tags: ['Python', 'Security', 'LLM output validation', 'CLI'],
    url: 'https://github.com/coderujwal3/ScamSentry-AI',
    icon: ScanSearch, featured: true, status: 'Hackday build',
  },
  {
    number: '02', category: 'DIGITAL FORENSICS', title: 'Image-Forensic',
    description: 'A Python library project focused on JPEG parsing and EXIF metadata extraction, with a clean API and forensic-minded reporting about what metadata can—and cannot—prove.',
    tags: ['Python', 'JPEG', 'EXIF', 'DFIR'],
    url: 'https://github.com/coderujwal3/Image-Forensic',
    icon: ScanSearch, featured: true, status: 'Open source',
  },
  {
    number: '03', category: 'DEVELOPER TOOLS', title: 'Phoenix Shell',
    description: 'A terminal-first shell project exploring command-line workflows and developer productivity. A natural fit for the Linux and scripting side of my toolkit.',
    tags: ['Shell', 'Linux', 'CLI', 'Automation'],
    url: 'https://github.com/hackedarea/phoenix-shell',
    icon: Terminal, featured: true, status: 'Project',
  },
  {
    number: '04', category: 'FULL-STACK · TRAVEL', title: 'Dhoomchhalle',
    description: 'A traveler-focused platform concept to make local travel less confusing, bringing hotel discovery and useful destination information into one experience.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    icon: Laptop, featured: true, status: 'In progress',
  },
  {
    number: '05', category: 'AI FOR AGRICULTURE', title: 'KrishiSetu',
    description: 'An offline-first agritech solution concept with PWA support, mapping, and room for AI-powered weather, demand and price insights for agricultural decisions.',
    tags: ['PERN', 'PWA', 'Leaflet', 'ML concepts'],
    icon: Bot, featured: false, status: 'Hackathon concept',
  },
  {
    number: '06', category: 'MACHINE LEARNING', title: 'Restaurant Intelligence',
    description: 'Experiments around restaurant-rating prediction with regression models and content-based recommendations using one-hot encoding and cosine similarity.',
    tags: ['scikit-learn', 'Regression', 'Cosine similarity'],
    icon: BrainCircuit, featured: false, status: 'ML experiments',
  },
];

export const experience = [
  {
    kind: 'INTERNSHIP PROGRAM', title: 'Cyber Security & Ethical Hacking', org: 'Edureka', date: 'Mar 2025 - Aug 2025',
    points: [
      'Completed a structured cyber security and ethical hacking internship program.',
      'Worked through security concepts and practical, lab-based exercises in controlled environments.',
      'Completed the capstone project: “Ethically Hacking an E-Commerce Website”.',
    ],
  },
  {
    kind: 'INTERNSHIP', title: 'Data Scientist & Gen AI', org: 'Syskriti Pvt. Ltd.', date: 'Feb 2026 - Aug 2026',
    points: [
      'Completed a structured cyber security and ethical hacking internship program.',
      'Worked through security concepts and practical, lab-based exercises in controlled environments.',
      'Completed the capstone project: “Ethically Hacking an E-Commerce Website”.',
    ],
  },
  {
    kind: 'INTERNSHIP PROGRAM', title: 'Full Stack Web Developer', org: 'Edureka', date: 'Jun 2023 - Mar 2024',
    points: [
      'Completed a structured cyber security and ethical hacking internship program.',
      'Worked through security concepts and practical, lab-based exercises in controlled environments.',
      'Completed the capstone project: “Ethically Hacking an E-Commerce Website”.',
    ],
  },
  {
    kind: 'Offline Training', title: 'CyberOps Associate', org: 'CISCO', date: 'Sept 2026 - Nov 2026',
    points: [
      "Completed a structured path for cyberOps associate training, covering security concepts, network monitoring, and incident response.",
      "Gained practical experience through hands-on labs and exercises in a controlled environment.",
      "Successfully completed the training program and earned the CyberOps Associate certification.",
    ],
  },
];

export const credentials = [
  { icon: ShieldCheck, name: 'Cyber Security and Ethical Hacking Internship Program', issuer: 'Edureka', note: 'Completion certificate · E-commerce security capstone' },
  { icon: Code2, name: 'Python Professional with Grade A', issuer: 'Edureka', note: 'Expert in writing scripts using Python Programming Language' },
  { icon: Laptop, name: 'CyberOps Associate', issuer: 'CISCO', note: 'Proficient in cyber security operations, network monitoring, and incident response' },
];
