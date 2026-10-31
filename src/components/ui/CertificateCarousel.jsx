import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  ExternalLink,
  Eye,
  Pause,
  Play,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const certificateFiles = import.meta.glob("../../certificates/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const certificateTitles = {
  AICTE_SAP_Cert: "AICTE SAP Certificate",
  DATA_SPRINT_Cert: "Data Sprint Certificate",
  ETHICALHACKINGcert: "Ethical Hacking Certificate",
  FSWD_cert_Edureka: "Full Stack Web Development · Edureka",
  "GLE-1M1B-CERT": "GLE · 1M1B Certificate",
  PythonProfessionalEdurekaCert: "Python Professional · Edureka",
  "SYSKRITI PRIVATE LIMITED_ujwal_singh": "Syskriti Private Limited",
  "THM-AOC-2025": "THM AOC 2025 Certificate",
  "Techkriti2.0_BestCorrdinator": "Techkriti 2.0 · Best Coordinator",
  banarasgiri_4_0: "Banarasgiri 4.0 · Volunteer",
};

const certificates = Object.entries(certificateFiles)
  .map(([path, url]) => {
    const fileName = path.split("/").pop();
    const name = fileName.replace(/\.[^.]+$/, "");

    return {
      name: certificateTitles[name] ?? name.replace(/[_-]+/g, " "),
      url,
      isPdf: /\.pdf$/i.test(fileName),
      previewUrl: `/certificate-previews/${encodeURIComponent(name)}.jpg`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const AUTO_ADVANCE_MS = 6000;

export default function CertificateCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [certificateToView, setCertificateToView] = useState(null);
  const dragStartX = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const activeCertificate = certificates[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (certificateToView && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!certificateToView && dialog.open) {
      dialog.close();
    }
  }, [certificateToView]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAutoplayEnabled(false);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (
      !isAutoplayEnabled ||
      isHovered ||
      isDragging ||
      certificateToView ||
      certificates.length < 2
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % certificates.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isAutoplayEnabled, isHovered, isDragging, certificateToView]);

  if (!certificates.length) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + certificates.length) % certificates.length,
    );
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % certificates.length);
  };

  const startDrag = (event) => {
    if (event.button !== 0 || event.target.closest("button, a")) {
      return;
    }

    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishDrag = (event) => {
    if (dragStartX.current === null) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);

    if (Math.abs(distance) > 48) {
      if (distance < 0) {
        showNext();
      } else {
        showPrevious();
      }
    }
  };

  const cancelDrag = () => {
    dragStartX.current = null;
    setIsDragging(false);
  };

  const handleBackdropClick = (event) => {
    const dialog = event.currentTarget;
    const bounds = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      dialog.close();
    }
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.currentTarget.close();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.6, 0, 0.4, 1] }}
      className="mt-13 max-[720px]:mt-10"
      aria-label="Certificates"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-5 flex items-end justify-between gap-4 max-[520px]:items-start">
        <div>
          <p className="mb-2 font-dm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--accent)">
            CERTIFICATE ARCHIVE
          </p>
          <h2 className="m-0 text-[clamp(20px,3vw,30px)] font-extrabold tracking-[-0.055em]">
            Proof of the work.
          </h2>
          <p className="mb-0 mt-2 max-w-125 text-[11px] leading-[1.7] text-(--muted)">
            A few milestones from learning, building and showing up.
          </p>
        </div>
        <span className="mb-1 shrink-0 rounded-full px-3 py-2 font-dm-mono text-[9px] text-(--muted) shadow-(--shadow-in)">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(certificates.length).padStart(2, "0")}
        </span>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-[color-mix(in_srgb,var(--surface)_45%,var(--line))] bg-(--surface) p-3.5 shadow-(--shadow-out) max-[520px]:rounded-[21px] max-[520px]:p-2.5">
        <div
          className={`relative touch-pan-y overflow-hidden rounded-[18px] bg-[color-mix(in_srgb,var(--surface)_84%,var(--text))] shadow-(--shadow-in) ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onPointerDown={startDrag}
          onPointerUp={finishDrag}
          onPointerCancel={cancelDrag}
          onLostPointerCapture={cancelDrag}
        >
          <div className="relative grid aspect-[1.48/1] min-h-55 place-items-center overflow-hidden max-[720px]:aspect-[1.18/1] max-[520px]:min-h-47.5 max-[520px]:aspect-[0.95/1]">
            <motion.img
              key={activeCertificate.url}
              className="pointer-events-none h-full w-full select-none object-contain p-3.5"
              src={
                activeCertificate.isPdf
                  ? activeCertificate.previewUrl
                  : activeCertificate.url
              }
              alt={`${activeCertificate.name}${activeCertificate.isPdf ? " preview" : ""}`}
              draggable="false"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1,
                ease: "easeInOut",
              }}
            />

            <button
              className="absolute left-3.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-[15px] border border-[color-mix(in_srgb,var(--surface)_60%,var(--line))] bg-(--surface) text-(--text) shadow-(--shadow-soft) transition duration-200 hover:-translate-y-[calc(50%+2px)] hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) max-[520px]:left-2 max-[520px]:h-9.5 max-[520px]:w-9.5"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous certificate"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="absolute right-3.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-[15px] border border-[color-mix(in_srgb,var(--surface)_60%,var(--line))] bg-(--surface) text-(--text) shadow-(--shadow-soft) transition duration-200 hover:-translate-y-[calc(50%+2px)] hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) max-[520px]:right-2 max-[520px]:h-9.5 max-[520px]:w-9.5"
              type="button"
              onClick={showNext}
              aria-label="Show next certificate"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-2.5 pb-1 pt-4 max-[520px]:items-start max-[520px]:px-1.5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9.5 w-9.5 shrink-0 place-items-center rounded-[13px] text-(--accent) shadow-(--shadow-soft)">
              <Award size={17} />
            </span>
            <div className="min-w-0">
              <h3 className="m-0 truncate text-[12px] font-bold tracking-tight max-[520px]:text-[11px]">
                {activeCertificate.name}
              </h3>
              <p className="m-0 mt-1 font-dm-mono text-[8px] uppercase tracking-[0.08em] text-(--muted)">
                {activeCertificate.isPdf
                  ? "PDF preview · open to view all pages"
                  : "Certificate image"}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              className="inline-flex h-9.5 items-center gap-2 rounded-[13px] px-3 font-dm-mono text-[8px] uppercase tracking-[0.07em] text-(--accent) shadow-(--shadow-soft) transition hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) max-[520px]:px-2.5"
              type="button"
              onClick={() => setCertificateToView(activeCertificate)}
              aria-label={`View ${activeCertificate.name}`}
            >
              Open <Eye size={14} />
            </button>
            <button
              className="grid h-9.5 w-9.5 place-items-center rounded-[13px] text-(--muted) shadow-(--shadow-soft) transition hover:text-(--accent) hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              type="button"
              onClick={() => setIsAutoplayEnabled((enabled) => !enabled)}
              aria-label={
                isAutoplayEnabled
                  ? "Pause automatic movement"
                  : "Resume automatic movement"
              }
              aria-pressed={isAutoplayEnabled}
              title={
                isAutoplayEnabled
                  ? "Pause automatic movement"
                  : "Resume automatic movement"
              }
            >
              {isAutoplayEnabled ? <Pause size={15} /> : <Play size={15} />}
            </button>
          </div>
        </div>

        <div
          className="mt-3 flex items-center justify-center gap-1.5 pb-1"
          aria-label="Choose a certificate"
        >
          {certificates.map((certificate, index) => (
            <button
              key={certificate.url}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                index === activeIndex
                  ? "w-6 bg-(--accent)"
                  : "w-1.5 bg-(--muted)/40 hover:bg-(--accent)/60"
              }`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show certificate ${index + 1}: ${certificate.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[min(100%-24px,1100px)] max-w-none overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--surface)_45%,var(--line))] bg-(--surface) p-0 text-(--text) shadow-[0_24px_100px_rgba(5,10,20,0.5)] backdrop:bg-[rgba(12,18,30,0.48)] backdrop:backdrop-blur-md max-[520px]:rounded-[18px]"
        aria-labelledby="certificate-dialog-title"
        onClick={handleBackdropClick}
        onKeyDown={handleDialogKeyDown}
        onClose={() => setCertificateToView(null)}
      >
        {certificateToView && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-(--line) px-5 py-4 max-[520px]:px-4 max-[520px]:py-3">
              <div className="min-w-0">
                <p className="m-0 font-dm-mono text-[8px] uppercase tracking-[0.14em] text-(--accent)">
                  CERTIFICATE PREVIEW
                </p>
                <h2
                  className="mb-0 mt-1.5 truncate text-[14px] font-bold tracking-tight"
                  id="certificate-dialog-title"
                >
                  {certificateToView.name}
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  className="inline-flex h-10 items-center gap-2 rounded-[13px] px-3 font-dm-mono text-[8px] uppercase tracking-[0.07em] text-(--accent) shadow-(--shadow-soft) transition hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                  href={certificateToView.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open original <ExternalLink size={13} />
                </a>
                <button
                  ref={closeButtonRef}
                  className="grid h-10 w-10 place-items-center rounded-[13px] text-(--muted) shadow-(--shadow-soft) transition hover:text-(--accent) hover:shadow-(--shadow-out) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  aria-label="Close certificate preview"
                  autoFocus
                >
                  <X size={17} />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-[color-mix(in_srgb,var(--surface)_84%,var(--text))] p-4 max-[520px]:p-2">
              <img
                className="mx-auto max-h-[78dvh] max-w-full rounded-xl object-contain shadow-(--shadow-soft)"
                src={
                  certificateToView.isPdf
                    ? certificateToView.previewUrl
                    : certificateToView.url
                }
                alt={`${certificateToView.name}${certificateToView.isPdf ? " first page preview" : ""}`}
              />
            </div>
          </>
        )}
      </dialog>
    </motion.section>
  );
}
