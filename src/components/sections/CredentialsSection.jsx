import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { credentials } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function CredentialsSection() {
  return (
    <section className="section-wrap section-block credentials-section">
      <SectionHeading index="05" eyebrow="COURSES & CREDENTIALS" title="Learning with intention." description="A few programs and certificates that shaped the fundamentals behind my project work." />
      <div className="credentials-grid">
        {credentials.map((credential, index) => {
          const Icon = credential.icon;
          return (
            <NeoCard className="credential-card" key={credential.name}>
              <div className={`credential-icon credential-icon-${index}`}><Icon size={20} /></div>
              <div className="credential-content"><span className="credential-issuer">{credential.issuer}</span><h3>{credential.name}</h3><p>{credential.note}</p></div>
              <span className="credential-check"><CheckCircle2 size={17} /></span>
            </NeoCard>
          );
        })}
      </div>
      <div className="hackday-card neo-panel">
        <div className="hackday-symbol"><Award size={23} /></div>
        <div><p className="eyebrow">COMMUNITY & HACKATHONS</p><h3>Hacktoberfest Hack Day Prayagraj × GDG</h3><p>Participated in the community hack day and continued exploring open-source, collaborative product building.</p></div>
        <a href="https://github.com/coderujwal3/GDG-x-CMP---MLH-Hackday" target="_blank" rel="noreferrer" aria-label="View ScamSentry AI hackday repository"><ArrowUpRight size={20} /></a>
      </div>
    </section>
  );
}
