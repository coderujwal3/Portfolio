import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Mail,
  MapPin,
  Send,
  MessageCircleMore,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { sendContactMessage } from "../../services/contactService.js";
import NeoCard from "../ui/NeoCard.jsx";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const updateForm = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setFormState({ status: "sending", message: "" });
    try {
      await sendContactMessage(form);
      setFormState({
        status: "success",
        message:
          "Message sent. Thanks for reaching out—I’ll get back to you as soon as I can.",
      });
      setForm(emptyForm);
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error.message ||
          "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section className="relative z-[1] mx-auto grid w-[min(1120px,calc(100%-72px))] grid-cols-[0.9fr_1.1fr] items-start gap-[clamp(30px,5vw,72px)] pt-[100px] pb-[100px] max-[1000px]:w-[min(100%-54px,900px)] max-[720px]:w-[calc(100%-36px)] max-[720px]:grid-cols-1 max-[720px]:gap-[31px] max-[720px]:pt-16 max-[720px]:pb-[70px] max-[420px]:w-[calc(100%-28px)]">
      <div className="pt-4 max-[720px]:pt-0">
        <p className="m-0 flex items-center gap-[10px] font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-[#43b59e] shadow-[0_0_0_4px_rgba(67,181,158,0.12)]" />{" "}
          OPEN TO GOOD CONVERSATIONS
        </p>
        <h2 className="mt-[21px] mb-[17px] max-w-[470px] text-[clamp(34px,4vw,48px)] leading-[1.13] tracking-[-0.065em] max-[720px]:max-w-[550px] max-[720px]:text-[40px]">
          Have a problem worth{" "}
          <span className="bg-[linear-gradient(105deg,#5368df_5%,#7e76d9_47%,#38a997_100%)] bg-clip-text text-transparent">
            solving?
          </span>
        </h2>
        <p className="max-w-[420px] text-[12px] leading-[1.9] text-[var(--muted)]">
          Whether it’s a product idea, an AI/ML experiment, a web project or a
          security-minded discussion, send a note. Include enough context and
          I’ll take it from there.
        </p>
        <div className="mt-[22px] flex items-center gap-[13px]">
          <span className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)]">
            <Mail size={18} />
          </span>
          <span className="flex flex-col gap-1">
            <small className="mb-1 block font-dm-mono text-[7px] tracking-[0.1em] text-[var(--muted)]">
              DIRECT MESSAGE
            </small>
            <strong className="text-[11px]">Resend-powered contact form</strong>
            <em className="text-[9px] not-italic text-[var(--muted)]">
              Your email address is used only to reply to your message.
            </em>
          </span>
        </div>
        <div className="mt-[22px] flex items-center gap-[13px]">
          <span className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-xl bg-[var(--surface)] text-[#35a997] shadow-[var(--shadow-soft)]">
            <MapPin size={18} />
          </span>
          <span className="flex flex-col gap-1">
            <small className="mb-1 block font-dm-mono text-[7px] tracking-[0.1em] text-[var(--muted)]">
              TIMEZONE
            </small>
            <strong className="text-[11px]">India Standard Time (IST)</strong>
            <em className="text-[9px] not-italic text-[var(--muted)]">
              Remote-friendly collaboration
            </em>
          </span>
        </div>
        <div className="mt-7 flex max-w-[380px] items-center gap-[19px] border-t border-[var(--line)] pt-[18px]">
          <a
            className="inline-flex items-center gap-[7px] text-[10px] font-bold text-[var(--muted)] transition-colors hover:text-[var(--accent)] [&>svg:last-child]:opacity-[0.55]"
            href="https://github.com/coderujwal3"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            className="inline-flex items-center gap-[7px] text-[10px] font-bold text-[var(--muted)] transition-colors hover:text-[var(--accent)] [&>svg:last-child]:opacity-[0.55]"
            href="https://www.youtube.com/@Nthree3"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube size={17} /> YouTube <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <NeoCard className="p-[29px] max-[720px]:px-[18px] max-[720px]:py-[22px]">
        <div className="mb-[26px] flex items-start justify-between gap-5">
          <div>
            <p className="m-0 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              SEND A MESSAGE
            </p>
            <h3 className="mt-2 mb-0 text-xl tracking-[-0.045em]">
              Let’s make something useful.
            </h3>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-[13px] text-[var(--accent)] shadow-[var(--shadow-soft)]">
            <MessageCircleMore size={18} />
          </span>
        </div>
        <form className="flex flex-col gap-[15px]" onSubmit={submitForm}>
          <div className="grid grid-cols-2 gap-[13px] max-[720px]:grid-cols-1">
            <label className="flex flex-col gap-[7px] text-[9px] font-extrabold text-[var(--muted)]">
              Your name
              <input
                className="w-full rounded-[11px] border border-transparent bg-[var(--surface)] px-[13px] py-[13px] text-[10px] font-medium leading-[1.6] text-[var(--text)] shadow-[var(--shadow-in)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_74%,transparent)] focus:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus:shadow-[inset_3px_3px_7px_color-mix(in_srgb,var(--text)_8%,transparent),0_0_0_3px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Jane Smith"
                autoComplete="name"
                maxLength={100}
                required
              />
            </label>
            <label className="flex flex-col gap-[7px] text-[9px] font-extrabold text-[var(--muted)]">
              Email address
              <input
                className="w-full rounded-[11px] border border-transparent bg-[var(--surface)] px-[13px] py-[13px] text-[10px] font-medium leading-[1.6] text-[var(--text)] shadow-[var(--shadow-in)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_74%,transparent)] focus:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus:shadow-[inset_3px_3px_7px_color-mix(in_srgb,var(--text)_8%,transparent),0_0_0_3px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
                name="email"
                type="email"
                value={form.email}
                onChange={updateForm}
                placeholder="jane@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-[7px] text-[9px] font-extrabold text-[var(--muted)]">
            Subject
            <input
              className="w-full rounded-[11px] border border-transparent bg-[var(--surface)] px-[13px] py-[13px] text-[10px] font-medium leading-[1.6] text-[var(--text)] shadow-[var(--shadow-in)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_74%,transparent)] focus:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus:shadow-[inset_3px_3px_7px_color-mix(in_srgb,var(--text)_8%,transparent),0_0_0_3px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
              name="subject"
              value={form.subject}
              onChange={updateForm}
              placeholder="What would you like to discuss?"
              maxLength={140}
              required
            />
          </label>
          <label className="flex flex-col gap-[7px] text-[9px] font-extrabold text-[var(--muted)]">
            Your message
            <textarea
              className="min-h-30.5 w-full resize-y rounded-[11px] border border-transparent bg-[var(--surface)] px-[13px] py-[13px] text-[10px] font-medium leading-[1.6] text-[var(--text)] shadow-[var(--shadow-in)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_74%,transparent)] focus:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus:shadow-[inset_3px_3px_7px_color-mix(in_srgb,var(--text)_8%,transparent),0_0_0_3px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
              name="message"
              value={form.message}
              onChange={updateForm}
              placeholder="A little context helps me give you a useful reply…"
              rows={5}
              minLength={15}
              maxLength={5000}
              required
            />
          </label>
          <label
            className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]"
            aria-hidden="true"
          >
            Leave this field empty
            <input
              name="website"
              value={form.website}
              onChange={updateForm}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
          <div className="flex items-center justify-between gap-2 font-dm-mono text-[8px] text-(--muted) max-[420px]:items-start max-[420px]:flex-col">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="text-[#35a997]" size={14} /> Server-side
              validation · No exposed API key
            </span>
            <span>{form.message.length}/5000</span>
          </div>
          <button
            className="mt-0.5 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[13px] border-0 bg-[linear-gradient(115deg,#5268d9,#6576e3)] px-[19px] py-[14px] text-[11px] font-extrabold text-white shadow-[6px_7px_15px_rgba(75,94,192,0.25),-4px_-4px_10px_rgba(255,255,255,0.65)] transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-[8px_11px_20px_rgba(75,94,192,0.29),-4px_-4px_10px_rgba(255,255,255,0.65)] disabled:cursor-wait disabled:opacity-[0.65] disabled:hover:translate-y-0 dark:shadow-[6px_7px_15px_rgba(9,12,19,0.35)]"
            type="submit"
            disabled={formState.status === "sending"}
          >
            {formState.status === "sending"
              ? "Sending message…"
              : "Send message"}{" "}
            <Send size={16} />
          </button>
          <AnimatePresence mode="wait">
            {formState.message && (
              <motion.p
                key={formState.status}
                className={`m-0 flex items-start gap-2 text-[10px] leading-[1.7] [&>svg]:mt-px [&>svg]:shrink-0 ${formState.status === "success" ? "text-[#35a997]" : "text-[#d35f70]"}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                role="status"
              >
                {formState.status === "success" && <CheckCircle2 size={16} />}
                {formState.message}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </NeoCard>
    </section>
  );
}
