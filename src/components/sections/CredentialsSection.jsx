import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { credentials } from '../../data/portfolio.js';
import NeoCard from '../ui/NeoCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function CredentialsSection() {
  return (
    <section className="relative z-[1] mx-auto w-[min(1120px,calc(100%-72px))] pt-[74px] pb-[50px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-[54px] max-[720px]:pb-[35px] max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading index="05" eyebrow="COURSES & CREDENTIALS" title="Learning with intention." description="A few programs and certificates that shaped the fundamentals behind my project work." />
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[15px] max-[1000px]:grid-cols-1">
        {credentials.map((credential, index) => {
          const Icon = credential.icon;
          return (
            <NeoCard className="relative flex items-start gap-[14px] p-[21px] max-[1000px]:min-h-[104px] max-[720px]:p-[18px]" key={credential.name}>
              <div className={`grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[14px] text-[var(--accent)] shadow-[var(--shadow-soft)] ${index === 1 ? 'text-[#35a997]' : ''} ${index === 2 ? 'text-[#8d80da]' : ''}`}><Icon size={20} /></div>
              <div><span className="font-dm-mono text-[8px] uppercase tracking-[0.08em] text-[var(--accent)]">{credential.issuer}</span><h3 className="mt-[9px] mb-[7px] text-[12px] leading-[1.55]">{credential.name}</h3><p className="m-0 text-[9px] leading-[1.7] text-[var(--muted)]">{credential.note}</p></div>
              <span className="absolute top-[17px] right-[17px] text-[#35a997] opacity-80"><CheckCircle2 size={17} /></span>
            </NeoCard>
          );
        })}
      </div>
      <div className="mt-[17px] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[19px] rounded-[27px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] bg-[var(--surface)] p-[23px_25px] shadow-[var(--shadow-out)] max-[720px]:grid-cols-[auto_minmax(0,1fr)] max-[720px]:gap-[14px] max-[720px]:p-[19px]">
        <div className="grid h-12 w-12 place-items-center rounded-[15px] text-[#c58d34] shadow-[var(--shadow-soft)]"><Award size={23} /></div>
        <div><p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">COMMUNITY & HACKATHONS</p><h3 className="mt-[7px] mb-[5px] text-[14px]">Hacktoberfest Hack Day Prayagraj × GDG</h3><p className="m-0 text-[10px] leading-[1.7] text-[var(--muted)]">Participated in the community hack day and continued exploring open-source, collaborative product building.</p></div>
        <a className="grid h-9 w-9 place-items-center rounded-xl text-[var(--accent)] shadow-[var(--shadow-soft)] max-[720px]:col-start-2 max-[720px]:justify-self-start" href="https://github.com/coderujwal3/GDG-x-CMP---MLH-Hackday" target="_blank" rel="noreferrer" aria-label="View ScamSentry AI hackday repository"><ArrowUpRight size={20} /></a>
      </div>
    </section>
  );
}
