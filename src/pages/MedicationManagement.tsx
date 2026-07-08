import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Pill, ClipboardCheck, UserCheck, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  "Comprehensive psychiatric evaluation and diagnosis",
  "Personalized medication plans tailored to your needs",
  "Ongoing monitoring and dosage adjustments",
  "Management of side effects and drug interactions",
  "Coordination with your primary care physician",
  "Education about your medications and treatment goals",
];

const process = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "We begin with a thorough psychiatric evaluation to understand your symptoms, medical history, and treatment goals. This helps us determine if medication is the right approach for you.",
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "Based on your assessment, our provider develops a customized medication plan. We consider your unique biology, lifestyle, and preferences when selecting the right medication.",
    icon: <Pill className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "Ongoing Monitoring",
    description: "Regular follow-up appointments ensure your medication is working effectively. We track your progress, manage side effects, and make adjustments as needed for optimal results.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Long-term Support",
    description: "Medication management is an ongoing partnership. We provide continuous support, education, and adjustments to help you achieve and maintain mental stability over time.",
    icon: <Clock className="w-6 h-6" />,
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
              Medication Management
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-6 font-body">
              Our Medication Management services are an integral part of our comprehensive mental health care approach. We work closely with clients to ensure safe, effective, and personalized use of psychiatric medications.
            </p>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              At BAC Health Services LLC, we are medication management specialists taking all types of medications into consideration in getting you right on track for your daily life. Our goal is to ensure that there is positive progress in Mental and Behavioral health to better manage symptoms and achieve mental stability.
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
              Schedule a Consultation
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
                Start Your Medication Management Journey
              </h3>
              <p className="text-[14px] text-white/80 mb-4 font-body">
                Take control of your mental health with expert medication management.
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

export default function MedicationManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="Medication Management" />
        <ServiceDetail />
      </main>
      <Footer />
    </div>
  );
}
