import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Stethoscope, FileSearch, ClipboardList, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  "Streamlined intake and scheduling process",
  "Comprehensive mental health screenings",
  "ADHD testing and diagnostic evaluations",
  "Personalized treatment recommendations",
  "Flexible in-person and virtual appointment options",
  "Fast-track access to psychiatric care",
];

const process = [
  {
    step: "01",
    title: "Initial Contact",
    description: "Reach out via phone, email, or our online form. Our friendly staff will guide you through the intake process and schedule your first appointment at your convenience.",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Comprehensive Evaluation",
    description: "Our board-certified providers conduct thorough mental health assessments, including clinical interviews, standardized screening tools, and review of your medical history.",
    icon: <FileSearch className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "Personalized Diagnosis",
    description: "Based on your evaluation, we provide a clear diagnosis when applicable and explain our findings in an easy-to-understand way. We treat depression, anxiety, bipolar disorder, PTSD, schizophrenia, SUD, BPD, and more.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Treatment Plan",
    description: "We develop a customized treatment plan that may include therapy, medication management, or a combination of approaches tailored to your specific needs and goals.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
];

function ServiceDetail() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="w-full py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
              Our Services
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading leading-tight mb-6">
              Access & Diagnosis
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-6 font-body">
              We prioritize easy access to care, offering streamlined intake processes and flexible scheduling to ensure that clients receive the help they need when they need it most. Getting started with mental health care should never be a struggle.
            </p>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              Our diagnostic services cover a wide range of mental health conditions including depression, anxiety, bipolar disorder, PTSD, schizophrenia, substance use disorders, and borderline personality disorder. We use evidence-based assessment tools to ensure accurate diagnosis.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((item, i) => (
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
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-7 h-11 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all group"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right - Process Steps */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-5">
              {process.map((step, i) => (
                <div
                  key={step.step}
                  className={`bg-[#FEFEFB] rounded-2xl p-6 border border-[#E8EDE8] hover:shadow-card transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center shrink-0 text-[#5B7B6F]">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold text-[#5B7B6F] tracking-wide">STEP {step.step}</span>
                      </div>
                      <h3 className="text-[16px] font-semibold text-[#1C2D3A] font-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-[1.65] text-[#6B7B6B] font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-6 bg-[#5B7B6F] rounded-2xl p-6 text-white">
              <h3 className="text-[18px] font-semibold font-heading mb-2">
                Ready to Take the First Step?
              </h3>
              <p className="text-[14px] text-white/80 mb-4 font-body">
                Contact us today to begin your journey to better mental health.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#5B7B6F] rounded-full px-5 h-10 text-[13px] font-semibold hover:bg-white/90 transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/40 text-white rounded-full px-5 h-10 text-[13px] font-semibold hover:bg-white/10 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AccessDiagnosis() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="Access & Diagnosis" />
        <ServiceDetail />
      </main>
      <Footer />
    </div>
  );
}
