import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Users, HeartPulse, GraduationCap } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    title: "Access & Diagnosis",
    description: "We prioritize easy access to care, offering streamlined intake processes and flexible scheduling to ensure that clients receive the help they need when they need it most.",
    href: "/services/access-diagnosis",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 12V18L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Medication Management",
    description: "Our Medication Management services are an integral part of our comprehensive mental health care. We work closely with clients to ensure safe, effective, and personalized use of psychiatric medications.",
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
    title: "Psychotherapy",
    description: "Our psychotherapy services provide a safe, supportive, and confidential space for individuals to explore their thoughts, emotions, and behaviors with professional guidance.",
    href: "/services/psychotherapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <path d="M18 6C18 6 10 14 10 20C10 24.4183 13.5817 28 18 28C22.4183 28 26 24.4183 26 20C26 14 18 6 18 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 14V22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Adjustment Therapy",
    description: "Adjustment therapy is a form of psychotherapy designed to help individuals cope with life changes, transitions, or significant stressors that affect their mental well-being.",
    href: "/services/adjustment-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <path d="M6 24L12 12L18 18L24 8L30 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="18" cy="18" r="2" fill="currentColor" />
        <circle cx="24" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Supportive Psychotherapy",
    description: "Supportive psychotherapy is a therapeutic approach that focuses on providing emotional support and encouragement to individuals facing various life challenges.",
    href: "/services/supportive-psychotherapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <path d="M18 30C18 30 6 24 6 14C6 10.6863 8.68629 8 12 8C14.5 8 16.5 9.5 18 11.5C19.5 9.5 21.5 8 24 8C27.3137 8 30 10.6863 30 14C30 24 18 30 18 30Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Talk Therapy",
    description: "Talk therapy, also known as psychotherapy or counseling, is a therapeutic approach that involves verbal communication between a trained therapist and a client.",
    href: "/services/talk-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <rect x="4" y="8" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 14H32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 24H22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Individual Therapy",
    description: "Individual therapy focuses on one-on-one sessions between a trained therapist and a client, providing personalized care tailored to your unique needs.",
    href: "/services/individual-therapy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="text-[#5B7B6F]">
        <circle cx="18" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 32C6 24 11 19 18 19C25 19 30 24 30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServicesGrid() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group bg-[#FEFEFB] rounded-2xl p-8 border border-[#E8EDE8] hover:border-[#5B7B6F]/30 hover:shadow-card transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms`, transitionDuration: "700ms" }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-3 group-hover:text-[#5B7B6F] transition-colors">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#6B7B6B] mb-5 font-body">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5B7B6F] group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffingCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FEFEFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-[#1C2D3A] rounded-3xl p-10 lg:p-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
                BAC Staffing Agency INC
              </p>
              <h3 className="text-[28px] lg:text-[36px] font-bold text-white font-heading leading-tight mb-4">
                Healthcare Staffing Solutions
              </h3>
              <p className="text-[15px] leading-[1.7] text-white/70 font-body mb-6">
                We are dedicated to providing opportunities for healthcare job seekers to grow professionally through career planning. We also aim to help clients find experienced, qualified healthcare professionals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-7 h-11 text-[13px] font-semibold shadow-sm hover:shadow-md transition-all group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users className="w-6 h-6" />, label: "Expert Staffing" },
                { icon: <HeartPulse className="w-6 h-6" />, label: "First Aid Training" },
                { icon: <GraduationCap className="w-6 h-6" />, label: "Career Growth" },
                { icon: <Users className="w-6 h-6" />, label: "Qualified Staff" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-5 text-center">
                  <div className="text-[#5B7B6F] mb-2 flex justify-center">{item.icon}</div>
                  <p className="text-[13px] font-medium text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="Comprehensive Mental Health Care" />
        <ServicesGrid />
        <StaffingCTA />
      </main>
      <Footer />
    </div>
  );
}
