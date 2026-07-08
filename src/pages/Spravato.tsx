import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield, Clock, HeartPulse, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  "FDA-approved treatment for treatment-resistant depression",
  "Fast-acting relief, often within hours to days",
  "Administered in a safe, monitored clinical setting",
  "Non-invasive nasal spray administration",
  "Reduces depressive symptoms when other treatments have failed",
  "Integrated with ongoing psychotherapy and support",
];

const whatToExpect = [
  {
    title: "Pre-Treatment Assessment",
    description: "Our provider conducts a thorough evaluation to determine if Spravato is right for you. This includes reviewing your medical history, current medications, and previous treatment responses.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "In-Clinic Administration",
    description: "Spravato is administered as a nasal spray in our comfortable, monitored clinic. Each session lasts approximately 2 hours, including a post-treatment observation period for your safety.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Monitoring & Support",
    description: "Our clinical team monitors you throughout the session for any side effects. You will need a trusted person to drive you home after each treatment, as you cannot drive until the next day.",
    icon: <HeartPulse className="w-6 h-6" />,
  },
  {
    title: "Ongoing Treatment Plan",
    description: "Treatment typically begins with twice-weekly sessions for the first month, then transitions to weekly or biweekly maintenance doses. We coordinate Spravato with your overall mental health care plan.",
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
              Spravato Therapy
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-6 font-body">
              Spravato (esketamine) is an FDA-approved nasal spray treatment for adults with treatment-resistant depression (TRD) and depressive symptoms in adults with major depressive disorder (MDD) with suicidal thoughts or actions.
            </p>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              At BAC Health Services, we provide Spravato therapy in a safe, comfortable, and closely monitored environment. Our trained clinical team ensures you receive the highest standard of care throughout your treatment journey.
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

          {/* Right - What to Expect */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-5">
              {whatToExpect.map((step, i) => (
                <div
                  key={step.title}
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
                Is Spravato Right for You?
              </h3>
              <p className="text-[14px] text-white/80 mb-4 font-body">
                If you have struggled to find relief from depression with traditional antidepressants, Spravato may be an option. Contact us to learn more.
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

export default function Spravato() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="Spravato Therapy" />
        <ServiceDetail />
      </main>
      <Footer />
    </div>
  );
}
