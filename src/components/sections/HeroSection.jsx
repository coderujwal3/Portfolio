import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Mail,
  MapPin,
  ShieldCheck,
  Youtube,
  Github,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative z-1 mx-auto grid min-h-172.5 w-[min(1120px,calc(100%-72px))] grid-cols-[1.07fr_0.93fr] items-center gap-x-10 pt-26.25 pb-21.5 max-[1000px]:min-h-162.5 max-[1000px]:w-[min(100%-54px,900px)] max-[1000px]:grid-cols-[1.06fr_0.94fr] max-[1000px]:gap-5.5 max-[1000px]:pt-18.75 max-[720px]:flex max-[720px]:min-h-0 max-[720px]:w-[calc(100%-36px)] max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-6.25 max-[720px]:pt-16.75 max-[720px]:pb-22.5 max-[420px]:w-[calc(100%-28px)]">
      <div className="max-w-157.5 pb-9 max-[720px]:pb-0">
        <motion.div
          className="inline-flex items-center gap-2.25 rounded-[99px] px-3.25 py-3.25 font-dm-mono text-[9px] uppercase tracking-[0.04em] text-(--muted) shadow-(--shadow-in)"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block h-1.75 w-1.75 shrink-0 rounded-full bg-[#43b59e] shadow-[0_0_0_4px_rgba(67,181,158,0.12)]" />{" "}
          Learning, Building & Deploying
        </motion.div>
        <motion.p
          className="mt-7.75 mb-3.25 font-dm-mono text-[10px] font-medium tracking-[0.18em] text-(--accent) max-[720px]:mt-6.25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
        >
          HEY, I'M UJWAL SINGH
        </motion.p>
        <motion.h1
          className="m-0 max-w-165 text-[clamp(42px,5vw,66px)] font-extrabold leading-[1.1] tracking-[-0.065em] max-[1000px]:text-[clamp(40px,5.5vw,58px)] max-[720px]:max-w-155 max-[720px]:text-[clamp(39px,10.4vw,59px)] max-[420px]:text-[39px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          I build things at the intersection of{" "}
          <span className="bg-[linear-gradient(105deg,#5368df_5%,#7e76d9_47%,#38a997_100%)] bg-clip-text text-transparent">
            AI, code & security.
          </span>
        </motion.h1>
        <p className="mt-5.75 mb-6.75 max-w-142.5 text-[13px] leading-[1.88] text-(--muted) max-[720px]:mt-4.5 max-[720px]:mb-5.5 max-[720px]:text-xs">
          Final-year AI & Machine Learning engineering student, full-stack
          developer, and cybersecurity enthusiast. I like making complex ideas
          useful—and understanding how they work beneath the surface.
        </p>
        <div className="flex flex-wrap items-center gap-3.25 max-[420px]:[&>a]:w-full">
          <Link
            className="inline-flex cursor-pointer items-center justify-between gap-2.5 rounded-[13px] border-0 bg-[linear-gradient(115deg,#5268d9,#6576e3)] px-4.75 py-3.5 text-[16px] font-extrabold text-white shadow-[6px_7px_15px_rgba(75,94,192,0.25),-4px_-4px_10px_rgba(255,255,255,0.65)] transition-[transform,box-shadow,opacity] duration-400 hover:-translate-y-0.5 hover:shadow-[inset_8px_11px_20px_rgba(75,94,192,0.09),-4px_-4px_10px_rgba(140,40,225,0.75)] disabled:cursor-wait disabled:opacity-[0.65] disabled:hover:translate-y-0 dark:shadow-[6px_7px_15px_rgba(9,12,19,0.35)]"
            to="/projects"
          >
            Explore my work <ArrowRight size={18} />
          </Link>
          <Link
            className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[13px] border-0 bg-(--surface) px-4.75 py-3.5 text-[16px] font-extrabold text-(--text) shadow-(--shadow-soft) transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-(--shadow-out)"
            to="/contact"
          >
            <Mail size={17} /> Get in touch
          </Link>
        </div>
        <div className="mt-7.5 flex flex-wrap items-center gap-5.5 max-[720px]:mt-6.25 max-[720px]:gap-3.75">
          <a
            className="inline-flex items-center gap-1.75 text-[10px] font-bold text-(--muted) transition-colors hover:text-(--accent) max-[720px]:text-[9px] [&>svg:last-child]:opacity-[0.55]"
            href="https://github.com/coderujwal3"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub <ArrowUpRight size={12} />
          </a>
          <a
            className="inline-flex items-center gap-1.75 text-[10px] font-bold text-(--muted) transition-colors hover:text-(--accent) max-[720px]:text-[9px] [&>svg:last-child]:opacity-[0.55]"
            href="https://www.youtube.com/@Nthree3"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube size={17} /> N3 Network Node Neural{" "}
            <ArrowUpRight size={12} />
          </a>
          <a
            className="inline-flex items-center gap-1.75 text-[10px] font-bold text-(--muted) transition-colors hover:text-(--accent) max-[720px]:text-[9px] [&>svg:last-child]:opacity-[0.55]"
            href="https://drive.google.com/drive/folders/1VRWQU0ikqv6krwIILQ_ZSop3Wd2aku6Q?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={17} /> Download Resume's{" "}
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <motion.div
        className="relative flex min-h-117.5 items-center justify-center max-[1000px]:min-h-105 max-[720px]:mt-1.25 max-[720px]:min-h-101.25 max-[420px]:min-h-90"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
      >
        <div className="pointer-events-none absolute h-97.5 w-97.5 rotate-[-18deg] scale-y-[0.58] rounded-full border border-dashed border-[color-mix(in_srgb,var(--accent)_16%,transparent)] max-[1000px]:h-85 max-[1000px]:w-85 max-[420px]:h-72.5 max-[420px]:w-72.5" />
        <div className="pointer-events-none absolute h-78.75 w-78.75 rotate-24 scale-y-[0.7] rounded-full border border-[color-mix(in_srgb,var(--mint)_19%,transparent)] max-[1000px]:h-68.75 max-[1000px]:w-68.75 max-[420px]:h-61.25 max-[420px]:w-61.25" />
        <div className="relative z-2 w-[min(100%,425px)] overflow-hidden rounded-[27px] border border-[color-mix(in_srgb,var(--surface)_50%,var(--line))] bg-(--surface) px-5.5 pt-5.75 pb-5 shadow-(--shadow-out) max-[1000px]:px-4.5 max-[1000px]:py-5 max-[720px]:w-[min(100%,420px)] max-[420px]:px-3.5 max-[420px]:py-4.25">
          <div className="flex items-center justify-between gap-2.5 font-dm-mono text-[8px] tracking-[0.12em] text-(--muted)">
            <span>UJWAL.SYS</span>
            <span className="flex items-center gap-1.5 text-[7px] tracking-[0.045em] max-[420px]:text-[6px]">
              <i className="inline-block h-1.25 w-1.5 rounded-full bg-[#41b59e]" />{" "}
              AVAILABLE TO CONNECT
            </span>
          </div>
          <div className="relative grid min-h-72.5 place-items-center max-[1000px]:min-h-62.5 max-[420px]:min-h-56.25">
            <div className="absolute h-52.5 w-52.25 rounded-full bg-[radial-gradient(circle,rgba(94,111,225,0.16),rgba(56,169,151,0.08)_48%,transparent_72%)] blur-md" />
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                delay: 0.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative grid h-40 w-40 -rotate-6 place-items-center rounded-[48px] bg-[var(--surface)] text-[53px] font-extrabold tracking-[-0.11em] text-[var(--accent)] shadow-[var(--shadow-out)] after:absolute after:inset-3 after:rounded-[38px] after:border after:border-[var(--line)] after:content-[''] dark:text-[#a0acff] max-[1000px]:h-[140px] max-[1000px]:w-[140px] max-[1000px]:text-[46px] max-[420px]:h-[125px] max-[420px]:w-[125px] max-[420px]:rounded-[40px] max-[420px]:text-[40px] max-[420px]:after:inset-[9px] max-[420px]:after:rounded-[32px]"
            >
              US <span className="text-3xl mb-3 text-right w-full">↗</span>
            </motion.div>
            <div className="absolute top-[62px] left-[54px] grid h-12 w-12 rotate-[-8deg] place-items-center rounded-[15px] bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)] max-[1000px]:top-[46px] max-[1000px]:left-8 max-[420px]:top-[35px] max-[420px]:left-[25px] max-[420px]:h-[41px] max-[420px]:w-[41px] max-[420px]:rounded-[13px]">
              <BrainCircuit size={20} />
            </div>
            <div className="absolute top-[134px] right-[39px] grid h-12 w-12 rotate-[8deg] place-items-center rounded-[15px] bg-[var(--surface)] text-[var(--mint)] shadow-[var(--shadow-soft)] max-[1000px]:right-[25px] max-[420px]:top-[105px] max-[420px]:right-5 max-[420px]:h-[41px] max-[420px]:w-[41px] max-[420px]:rounded-[13px]">
              <Code2 size={20} />
            </div>
            <div className="absolute bottom-[42px] left-[76px] grid h-12 w-12 rotate-[7deg] place-items-center rounded-[15px] bg-[var(--surface)] text-[#8580d9] shadow-[var(--shadow-soft)] max-[1000px]:bottom-[35px] max-[1000px]:left-[50px] max-[420px]:bottom-5 max-[420px]:left-[38px] max-[420px]:h-[41px] max-[420px]:w-[41px] max-[420px]:rounded-[13px]">
              <ShieldCheck size={20} />
            </div>
          </div>
          <div className="flex justify-between gap-[15px] border-t border-[var(--line)] pt-[17px] pb-[14px] [&>div]:flex [&>div]:flex-col [&>div]:gap-[6px] [&_span]:font-dm-mono [&_span]:text-[8px] [&_span]:tracking-[0.13em] [&_span]:text-[var(--muted)] [&_strong]:flex [&_strong]:items-center [&_strong]:gap-1 [&_strong]:text-[10px] [&_strong]:font-bold max-[420px]:[&_strong]:text-[9px]">
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
          <div className="rounded-[10px] bg-[color-mix(in_srgb,var(--surface)_75%,var(--text))] px-3.25 py-3 font-dm-mono text-[9px] text-(--muted) dark:bg-[#1a202a]">
            <span className="mr-1.75 text-(--mint) text-xs font-semibold">
              $
            </span>{" "}
            whoami{" "}
            <span className="ml-1.25 text-(--accent) font-bold text-xs">
              ujwal.singh
            </span>
            <span className="ml-1 inline-block h-2.5 w-1.25 animate-pulse bg-(--mint) align-[-2px]" />
          </div>
        </div>
        <motion.div 
        initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3,
            delay: 0.3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        className="absolute top-14 right-[-3px] z-[3] flex rotate-[3deg] items-center gap-2 rounded-[13px] bg-[var(--surface)] px-[15px] py-[13px] text-xs font-extrabold shadow-[var(--shadow-soft)] dark:shadow-[var(--shadow-soft)] max-[720px]:top-[38px] max-[720px]:right-0 max-[720px]:px-3 max-[720px]:py-[11px] max-[720px]:text-[9px] max-[420px]:top-[38px]">
          <BrainCircuit size={16} className="text-[var(--accent)]" />
          <span>AI / ML</span>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            delay: 0.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute bottom-17.5 -left-2.5 z-3 flex rotate-[-4deg] items-center gap-2 rounded-[13px] bg-(--surface) px-3.75 py-3.25 text-[10px] font-extrabold shadow-(--shadow-soft) dark:shadow-(--shadow-soft) max-[720px]:bottom-10.75 max-[720px]:left-0 max-[720px]:px-3 max-[720px]:py-2.75 max-[720px]:text-[9px] max-[420px]:bottom-10.75"
        >
          <ShieldCheck size={16} className="text-(--accent)" />
          <span>Cybersecurity</span>
        </motion.div>
      </motion.div>
      <Link
        to="/about"
        className="absolute bottom-6 left-0 flex items-center gap-[10px] font-dm-mono text-[8px] tracking-[0.12em] text-[var(--muted)] max-[720px]:bottom-[26px]"
      >
        <span className="inline-block h-px w-8 bg-[var(--accent)]" /> EXPLORE
        ABOUT <ChevronDown size={14} />
      </Link>
    </section>
  );
}
