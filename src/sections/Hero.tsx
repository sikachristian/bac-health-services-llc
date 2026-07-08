import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="hero" aria-label="Hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Serene therapy room overlooking a calm lake"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(254,254,251,0.92) 0%, rgba(254,254,251,0.75) 35%, rgba(254,254,251,0.2) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 h-full flex flex-col">
        {/* Nav spacer */}
        <div className="h-[72px] shrink-0" />

        {/* Main content — full height, centered vertically */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Text content */}
          <div className="max-w-xl">
            {/* Tagline */}
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
              Compassionate Care. Proven Results.
            </p>

            {/* Headline */}
            <h1 className="text-[44px] lg:text-[56px] leading-[1.08] font-bold text-[#1C2D3A] font-heading mb-3 tracking-tight">
              Your Mental Health
              <br />
              Deserves Exceptional
              <br />
              Care
            </h1>

            {/* Accent line */}
            <div className="flex items-center gap-0 mb-5">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>

            {/* Description */}
            <p className="text-[15px] lg:text-[16px] leading-[1.65] text-[#4A5D4A] max-w-md mb-6 font-body">
              Personalized psychiatric care, therapy coordination, ADHD assessment, medication management, and virtual appointments—because you matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link to="/patient-form">
                <Button
                  className="bg-white hover:bg-[#F5F7F5] text-[#5B7B6F] rounded-full px-6 h-11 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 group border border-[#5B7B6F]"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <a
                href="tel:+12407138080"
                className="flex items-center gap-2 px-5 h-11 rounded-full border-[1.5px] border-[#5B7B6F] text-[13px] font-semibold text-[#1C2D3A] hover:bg-[#5B7B6F]/5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#5B7B6F]" />
                Call Us
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
      </div>
    </section>
  );
}
