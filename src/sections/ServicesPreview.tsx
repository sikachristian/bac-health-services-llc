import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router";

const services = [
  {
    title: "Psychotherapy",
    description: "Our psychotherapy services provide a safe, supportive, and confidential space for individuals to explore their thoughts, emotions, and behaviors.",
    href: "/services/psychotherapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <path d="M18 6C18 6 10 14 10 20C10 24.4183 13.5817 28 18 28C22.4183 28 26 24.4183 26 20C26 14 18 6 18 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 14V22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" />
        <path d="M14 18C14 18 15.5 16 18 16C20.5 16 22 18 22 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Adjustment Therapy",
    description: "Adjustment therapy is a form of psychotherapy designed to help individuals cope with life changes, transitions, or significant stressors.",
    href: "/services/adjustment-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <circle cx="18" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 30C8 22 12 18 18 18C24 18 28 22 28 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 7V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 9L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 9L26 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Supportive Psychotherapy",
    description: "Supportive psychotherapy is a therapeutic approach that focuses on providing emotional support and encouragement to individuals.",
    href: "/services/supportive-psychotherapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <path d="M18 30C18 30 6 24 6 14C6 10.6863 8.68629 8 12 8C14.5 8 16.5 9.5 18 11.5C19.5 9.5 21.5 8 24 8C27.3137 8 30 10.6863 30 14C30 24 18 30 18 30Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Medication Management",
    description: "Our Medication Management services are an integral part of our comprehensive mental health care approach.",
    href: "/services/medication-management",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <rect x="10" y="6" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="24" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Talk Therapy",
    description: "Talk therapy, also known as psychotherapy or counseling, is a therapeutic approach that involves verbal communication.",
    href: "/services/talk-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <rect x="4" y="8" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 14H32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 24H22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="24" cy="22" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Individual Therapy",
    description: "Individual therapy focuses on one-on-one sessions between a trained therapist and a client for personalized care.",
    href: "/services/individual-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <circle cx="18" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 32C6 24 11 19 18 19C25 19 30 24 30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="services" ref={ref} aria-label="Our services" className="w-full py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
            Our Services
          </p>
          <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1C2D3A] font-heading leading-tight">
            Comprehensive Care for Your Mind
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`group bg-[#FEFEFB] rounded-2xl p-6 border border-[#E8EDE8] hover:border-[#5B7B6F]/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms`, transitionDuration: "700ms" }}
            >
              <Link to={service.href} className="block">
                <div className="mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-[17px] font-semibold text-[#1C2D3A] font-heading mb-2 group-hover:text-[#5B7B6F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-[#6B7B6B] mb-4 font-body line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5B7B6F] group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
