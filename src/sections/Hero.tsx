import { useEffect, useRef } from "react";
import { ArrowRight, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "board-certified", label: "Board-Certified", sublabel: "Providers" },
  { icon: "virtual", label: "Virtual &", sublabel: "In-Person Care" },
  { icon: "adhd", label: "ADHD", sublabel: "Testing" },
  { icon: "medication", label: "Medication", sublabel: "Management" },
  { icon: "spravato", label: "Spravato", sublabel: "Therapy" },
  { icon: "insurance", label: "Insurance", sublabel: "Accepted" },
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "board-certified":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <path d="M18 4L6 10V17C6 24.18 11.28 30.92 18 33C24.72 30.92 30 24.18 30 17V10L18 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M13 18L16.5 21.5L23 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "virtual":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <rect x="6" y="10" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 16H30" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="13.5" r="1" fill="currentColor" />
          <circle cx="16" cy="13.5" r="1" fill="currentColor" />
          <circle cx="20" cy="13.5" r="1" fill="currentColor" />
          <path d="M15 22L18 24L21 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "adhd":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <path d="M18 6C18 6 12 12 12 18C12 21.3137 14.6863 24 18 24C21.3137 24 24 21.3137 24 18C24 12 18 6 18 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M18 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="18" cy="12" r="1" fill="currentColor" />
          <path d="M10 20C8 22 8 26 10 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M26 20C28 22 28 26 26 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "medication":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <rect x="10" y="6" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="24" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case "spravato":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <path d="M18 6C18 6 10 14 10 20C10 24.4183 13.5817 28 18 28C22.4183 28 26 24.4183 26 20C26 14 18 6 18 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M18 16V24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M15 19L18 16L21 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 12C12 10 12 8 14 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M22 12C24 10 24 8 22 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "insurance":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
          <rect x="6" y="8" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 14H30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 20H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 24H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M24 20.5V22L25 23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = contentRef.current;
    if (!ctx) return;
    ctx.style.opacity = "0";
    ctx.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      ctx.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      ctx.style.opacity = "1";
      ctx.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Serene therapy room overlooking a calm lake"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - left to right fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(254,254,251,0.92) 0%, rgba(254,254,251,0.75) 35%, rgba(254,254,251,0.2) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Content - fits within viewport */}
      <div ref={contentRef} className="relative z-10 h-full flex flex-col">
        {/* Spacer for nav */}
        <div className="h-[72px] shrink-0" />

        {/* Main content area - flex to push feature bar down */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            {/* Tagline */}
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-4 font-heading">
              Compassionate Care. Proven Results.
            </p>

            {/* Headline */}
            <h1 className="text-[44px] lg:text-[56px] leading-[1.08] font-bold text-[#1C2D3A] font-heading mb-4 tracking-tight">
              Your Mental Health
              <br />
              Deserves Exceptional
              <br />
              Care
            </h1>

            {/* Accent line */}
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>

            {/* Description */}
            <p className="text-[15px] lg:text-[16px] leading-[1.65] text-[#4A5D4A] max-w-md mb-8 font-body">
              Personalized psychiatric care, therapy coordination, ADHD assessment, medication management, and virtual appointments—because you matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-7 h-11 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <a
                href="tel:+12407138080"
                className="flex items-center gap-2.5 px-6 h-11 rounded-full border-[1.5px] border-[#5B7B6F] text-[13px] font-semibold text-[#1C2D3A] hover:bg-[#5B7B6F]/5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#5B7B6F]" />
                Call (240) 713-8080
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-[#8A9A8A]" />
              <span className="text-[12px] text-[#6B7B6B] font-medium tracking-wide">
                Secure. Confidential. Compassionate.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom area: Feature Bar + Scroll indicator */}
        <div className="shrink-0 pb-4">
          {/* Feature Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-card border border-[#E8EDE8] px-4 sm:px-6 py-4">
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-0">
                {features.map((f, i) => (
                  <div
                    key={f.icon}
                    className={`flex flex-col items-center text-center py-2 ${
                      i < features.length - 1 ? "lg:border-r lg:border-[#E8EDE8]" : ""
                    }`}
                  >
                    <div className="mb-1.5">
                      <FeatureIcon type={f.icon} />
                    </div>
                    <span className="text-[12px] font-semibold text-[#1C2D3A] leading-tight">
                      {f.label}
                    </span>
                    <span className="text-[12px] font-semibold text-[#1C2D3A] leading-tight">
                      {f.sublabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-[12px] text-[#6B7B6B] hover:text-[#5B7B6F] transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 8L10 14L16 8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Scroll to learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
