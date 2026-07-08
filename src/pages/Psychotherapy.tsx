import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  "Safe, confidential, and non-judgmental environment",
  "Evidence-based therapeutic techniques",
  "Personalized treatment plans tailored to your needs",
  "Support for anxiety, depression, trauma, and more",
  "Flexible in-person and virtual session options",
  "Experienced, licensed mental health professionals",
];

const approaches = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Identify and change negative thought patterns and behaviors that contribute to emotional distress.",
  },
  {
    title: "Trauma-Based Therapy",
    description: "Process painful experiences through guided narration and prolonged exposure techniques.",
  },
  {
    title: "Emotion Focused Therapy (EFT)",
    description: "Explore and transform emotional experiences to improve well-being and relationships.",
  },
  {
    title: "Acceptance and Commitment Therapy (ACT)",
    description: "Develop mindfulness skills and commit to values-based action for lasting change.",
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
              Psychotherapy
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-6 font-body">
              Our psychotherapy services provide a safe, supportive, and confidential space for individuals to explore their thoughts, emotions, and behaviors. Whether you are navigating stress, anxiety, depression, or simply need someone to talk to, our experienced therapists are here to guide you on your journey to wellness.
            </p>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              We believe in a personalized approach to mental health care. Every individual is unique, and so is their path to healing. Through evidence-based techniques and compassionate guidance, we help you develop the tools and insights needed to achieve lasting emotional well-being.
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
              Schedule a Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right - Info Cards */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-5">
              {approaches.map((approach, i) => (
                <div
                  key={approach.title}
                  className={`bg-[#FEFEFB] rounded-2xl p-6 border border-[#E8EDE8] hover:shadow-card transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <h3 className="text-[16px] font-semibold text-[#1C2D3A] font-heading mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#6B7B6B] font-body">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-6 bg-[#5B7B6F] rounded-2xl p-6 text-white">
              <h3 className="text-[18px] font-semibold font-heading mb-2">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-[14px] text-white/80 mb-4 font-body">
                Take the first step toward better mental health. Our team is ready to support you.
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

export default function Psychotherapy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="Psychotherapy" />
        <ServiceDetail />
      </main>
      <Footer />
    </div>
  );
}
