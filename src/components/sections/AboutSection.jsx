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

export default function AboutSection() {
  return (
    <section className="relative z-[1] mx-auto w-[min(1120px,calc(100%-72px))] pt-[74px] pb-[50px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:pt-[54px] max-[720px]:pb-[35px] max-[420px]:w-[calc(100%-28px)]">
      <SectionHeading
        index="01"
        eyebrow="ABOUT ME"
        title="Curious by default, thoughtful by design"
      />
      <div className="flex flex-col gap-5.75">
        <NeoCard className="p-8.5 max-[720px]:px-5.5 max-[720px]:py-6.25">
          <div className="flex items-center gap-2 font-dm-mono text-[9px] tracking-[0.1em] text-[var(--accent)]">
            <Sparkles size={16} /> THE SHORT VERSION
          </div>
          <h3 className="mt-5 mb-[14px] max-w-[470px] text-[clamp(25px,2.7vw,32px)] leading-[1.24] tracking-tighter max-[720px]:text-[30px]">
            I'm happiest when I'm{" "}
            <span className="bg-[linear-gradient(105deg,#5368df_5%,#7e76d9_47%,#38a997_100%)] text-4xl bg-clip-text text-transparent">
              learning by building.
            </span>
          </h3>
          <p className="mb-[13px] mt-0 max-w-[650px] text-[12px] leading-[1.9] text-[var(--muted)]">
            I'm pursuing a B.Tech in Artificial Intelligence & Machine Learning
            at Kashi Institute of Technology, affiliated with Dr. A.P.J. Abdul
            Kalam Technical University. My interests span full-stack product
            development, applied machine learning, Linux tooling and ethical
            security research.
          </p>
          <p className="mb-[13px] mt-0 max-w-[650px] text-[12px] leading-[1.9] text-[var(--muted)]">
            I enjoy taking an idea from a rough problem statement to something
            testable: designing the interface, shaping the API, thinking through
            the data, then asking how the system could fail and how to make it
            safer.
          </p>
          <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-[var(--line)] pt-[21px] [&>div]:flex [&>div]:items-center [&>div]:gap-[10px] max-[720px]:justify-start max-[720px]:[&>div]:min-w-[42%] max-[420px]:flex-col">
            <div>
              <span className="grid h-[37px] w-[37px] place-items-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)]">
                <GraduationCap size={17} />
              </span>
              <span>
                <small className="mb-1 block font-dm-mono text-[7px] tracking-[0.1em] text-[var(--muted)]">
                  EDUCATION
                </small>
                <strong className="text-[10px]">B.Tech · AI & ML</strong>
              </span>
            </div>
            <div>
              <span className="grid h-[37px] w-[37px] place-items-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)]">
                <MapPin size={17} />
              </span>
              <span>
                <small className="mb-1 block font-dm-mono text-[7px] tracking-[0.1em] text-[var(--muted)]">
                  LOCATION
                </small>
                <strong className="text-[10px]">Varanasi, India</strong>
              </span>
            </div>
            <div>
              <span className="grid h-[37px] w-[37px] place-items-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)]">
                <Rocket size={17} />
              </span>
              <span>
                <small className="mb-1 block font-dm-mono text-[7px] tracking-[0.1em] text-[var(--muted)]">
                  APPROACH
                </small>
                <strong className="text-[10px]">Learn by shipping</strong>
              </span>
            </div>
          </div>
        </NeoCard>


        <div className="flex w-full justify-evenly flex-row gap-3.25 max-[720px]:gap-2.25 flex-wrap">
          <NeoCard className="p-[20px_21px_16px] max-[720px]:p-[14px_12px]">
            <div className="mb-3.25 grid h-9 w-9 place-items-center rounded-xl text-(--accent) shadow-(--shadow-soft) max-[720px]:h-8 max-[720px]:w-8 max-[720px]:rounded-[11px]">
              <Code2 size={19} />
            </div>
            <strong className="text-[13px] max-[720px]:block max-[720px]:text-[11px]">
              Full-stack Web Development (using MERN)
            </strong>
            <p className="mt-1.75 mb-4.25 max-w-72.5 text-[10px] leading-[1.7] text-(--muted) max-[720px]:text-[9px] max-[720px]:leading-[1.6] max-[420px]:mb-2.5">
              <span className="text-(--accent) font-semibold">Level: Intermediate</span> {" "} Experienced with MongoDB, Express.js, React, and Node.js. Developed full-stack applications involving authentication, REST APIs, hotel listings, session management, password recovery, rate limiting, and deployment.
            </p>
            <span className="font-dm-mono text-[7px] tracking-[0.15em] text-(--muted) max-[720px]:text-[6px] max-[720px]:tracking-wider">
              01 / BUILD
            </span>
          </NeoCard>

          <NeoCard className="p-[20px_21px_16px] max-[720px]:p-[14px_12px]">
            <div className="mb-3.25 grid h-9 w-9 place-items-center rounded-xl text-[#35a997] shadow-(--shadow-soft) max-[720px]:h-8 max-[720px]:w-8 max-[720px]:rounded-[11px]">
              <BrainCircuit size={19} />
            </div>
            <strong className="text-[13px] max-[720px]:block max-[720px]:text-[11px]">
              Python Programming & Scripting
            </strong>
            <p className="mt-1.75 mb-4.25 max-w-72.5 text-[10px] leading-[1.7] text-(--muted) max-[720px]:text-[9px] max-[720px]:leading-[1.6] max-[420px]:mb-2.5">
              <span className="text-(--accent) font-semibold">Level: Intermediate</span> {" "} Develops Python scripts and command-line utilities for automation, image forensics, data processing, and information retrieval. Familiar with Python project structure, virtual environments, CLI development, and package distribution.
            </p>
            <span className="font-dm-mono text-[7px] tracking-[0.15em] text-(--muted) max-[720px]:text-[6px] max-[720px]:tracking-wider">
              02 / EXPLORE
            </span>
          </NeoCard>

          <NeoCard className="p-[20px_21px_16px] max-[720px]:p-[14px_12px]">
            <div className="mb-3.25 grid h-9 w-9 place-items-center rounded-xl text-[#35a997] shadow-(--shadow-soft) max-[720px]:h-8 max-[720px]:w-8 max-[720px]:rounded-[11px]">
              <BrainCircuit size={19} />
            </div>
            <strong className="text-[13px] max-[720px]:block max-[720px]:text-[11px]">
              AI & ML
            </strong>
            <p className="mt-1.75 mb-4.25 max-w-72.5 text-[10px] leading-[1.7] text-(--muted) max-[720px]:text-[9px] max-[720px]:leading-[1.6] max-[420px]:mb-2.5">
              <span className="text-(--accent) font-semibold">Level: Intermediate</span> {" "} foundations; developing practical expertise. Familiar with scikit-learn, TensorFlow, and PyTorch, alongside regression, classification concepts, model selection, and ML applications involving prediction, recommendation, and risk assessment.
            </p>
            <span className="font-dm-mono text-[7px] tracking-[0.15em] text-(--muted) max-[720px]:text-[6px] max-[720px]:tracking-wider">
              03 / EXPLORE
            </span>
          </NeoCard>

          <NeoCard className="p-[20px_21px_16px] max-[720px]:p-[14px_12px]">
            <div className="mb-3.25 grid h-9 w-9 place-items-center rounded-xl text-[#8680d9] shadow-(--shadow-soft) max-[720px]:h-8 max-[720px]:w-8 max-[720px]:rounded-[11px]">
              <ShieldCheck size={19} />
            </div>
            <strong className="text-[13px] max-[720px]:block max-[720px]:text-[11px]">
              Cybersecurity & Ethical Hacking
            </strong>
            <p className="mt-1.75 mb-4.25 max-w-72.5 text-[10px] leading-[1.7] text-(--muted) max-[720px]:text-[9px] max-[720px]:leading-[1.6] max-[420px]:mb-2.5">
              <span className="text-(--accent) font-semibold">Level: Beginner-Intermediate</span> {" "} Has completed cybersecurity training and practical labs involving ethical hacking, web application security, and security analysis. Explores vulnerability assessment, attack techniques, and responsible testing in controlled environments.
            </p>
            <span className="font-dm-mono text-[7px] tracking-[0.15em] text-(--muted) max-[720px]:text-[6px] max-[720px]:tracking-wider">
              04 / SECURE
            </span>
          </NeoCard>

          <NeoCard className="p-[20px_21px_16px] max-[720px]:p-[14px_12px]">
            <div className="mb-3.25 grid h-9 w-9 place-items-center rounded-xl text-[#8680d9] shadow-(--shadow-soft) max-[720px]:h-8 max-[720px]:w-8 max-[720px]:rounded-[11px]">
              <Code2 size={19} />
            </div>
            <strong className="text-[13px] max-[720px]:block max-[720px]:text-[11px]">
              Git, GitHub & Open Source Development
            </strong>
            <p className="mt-1.75 mb-4.25 max-w-72.5 text-[10px] leading-[1.7] text-(--muted) max-[720px]:text-[9px] max-[720px]:leading-[1.6] max-[420px]:mb-2.5">
              <span className="text-(--accent) font-semibold">Level: Intermediate</span> {" "} Has completed cybersecurity training and practical labs Uses Git and GitHub for version control, project documentation, repository maintenance, and publishing open-source work. Has participated in collaborative hackathon activities and worked on public project repositories.
            </p>
            <span className="font-dm-mono text-[7px] tracking-[0.15em] text-(--muted) max-[720px]:text-[6px] max-[720px]:tracking-wider">
              04 / LEARN
            </span>
          </NeoCard>
        </div>
      </div>
    </section>
  );
}
