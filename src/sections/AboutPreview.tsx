import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router";

const highlights = [
  "Leading Therapy Specialists",
  "Best Treatment Outcomes",
  "Carefully Tailored Therapy",
  "Healthcare Training Program",
];

export default function AboutPreview() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" ref={ref} aria-label="About the company" className="w-full py-20 lg:py-24 bg-[#FEFEFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading" role="doc-subtitle">
              About Company
            </p>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1C2D3A] font-heading leading-tight mb-6">
              Bringing You Trusted Care!
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              We care about you and your future. We want you to always be able to achieve what you want in life. Here at BAC Health Services LLC we are a medication management specialist taking all types of medications into consideration in getting you right on track for your daily life.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5B7B6F]" />
                  </div>
                  <span className="text-[14px] font-medium text-[#1C2D3A]">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-7 h-11 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all group"
            >
              About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right - Image Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/dr-tafie-patient.png"
                  alt="Dr. Tafie providing compassionate patient care at BAC Health Services"
                  className="w-full h-[420px] lg:h-[480px] object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-card border border-[#E8EDE8] p-5 max-w-[220px]">
                <p className="text-[32px] font-bold text-[#5B7B6F] font-heading leading-none mb-1">5+</p>
                <p className="text-[13px] text-[#4A5D4A] font-medium">Years of Excellence in Mental Health Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
