import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Users, Award, HeartPulse, GraduationCap } from "lucide-react";

const highlights = [
  "Leading Therapy Specialists",
  "Best Treatment Outcomes",
  "Carefully Tailored Therapy",
  "Healthcare Training Program",
];

const leadershipTeam = [
  {
    name: "Esther Howard",
    role: "Content Strategist",
    description: "Esther Howard brings a wealth of experience in creating compelling, data-driven content strategies that resonate with audiences.",
  },
  {
    name: "Alex Mitchell",
    role: "Chief Executive",
    description: "As Chief Executive, Alex Mitchell leads with a vision for innovation excellence with over a decade of experience in driving business growth.",
  },
];

function AboutContent() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/tafie-hugs.png"
                  alt="Compassionate care at BAC Health Services"
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-card border border-[#E8EDE8] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#5B7B6F]" />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#1C2D3A] font-heading">65K+</p>
                    <p className="text-[11px] text-[#6B7B6B]">Winning Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
              About the Company
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading leading-tight mb-6">
              Dedicated to Your Mental Wellness
            </h2>
            <div className="flex items-center gap-0 mb-6">
              <div className="w-8 h-0.5 bg-[#5B7B6F]" />
              <div className="w-3 h-0.5 bg-[#5B7B6F]/40" />
            </div>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-6 font-body">
              BAC Health Services, LLC is here to help you feel your best mind, body, and soul! Whether you're navigating stress, anxiety, depression, or need someone to talk to, we offer compassionate, expert mental health care tailored just for you.
            </p>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-8 font-body">
              From therapy and medication management to holistic wellness support, we're all about empowering you on your journey to wellness. In-person & virtual appointments are available! Let's take the first step together because your mental health matters.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5B7B6F]" />
                  </div>
                  <span className="text-[14px] font-medium text-[#1C2D3A]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaffingSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FEFEFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
            BAC Staffing Agency INC
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading leading-tight">
            Healthcare Staffing in the DMV
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="w-7 h-7 text-[#5B7B6F]" />,
              title: "Expert Staffing Solutions",
              description: "We connect healthcare facilities with qualified professionals to ensure optimal patient care.",
            },
            {
              icon: <HeartPulse className="w-7 h-7 text-[#5B7B6F]" />,
              title: "First Responder Training",
              description: "We are committed to fostering long-term relationships with our clients through exceptional training programs.",
            },
            {
              icon: <GraduationCap className="w-7 h-7 text-[#5B7B6F]" />,
              title: "Professional Development",
              description: "Opportunities for healthcare job seekers to grow professionally through career planning and support.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-8 border border-[#E8EDE8] hover:shadow-card transition-all duration-500 text-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-3">{item.title}</h3>
              <p className="text-[14px] leading-[1.7] text-[#6B7B6B] font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
            Team Member
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading leading-tight">
            Our Leadership Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leadershipTeam.map((member, i) => (
            <div
              key={member.name}
              className={`bg-[#FEFEFB] rounded-2xl p-8 border border-[#E8EDE8] text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 200}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-[24px] font-bold text-[#5B7B6F] font-heading">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-1">{member.name}</h3>
              <p className="text-[13px] font-medium text-[#5B7B6F] mb-4">{member.role}</p>
              <p className="text-[14px] leading-[1.7] text-[#6B7B6B] font-body">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="About BAC Health Services" />
        <AboutContent />
        <StaffingSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
}
