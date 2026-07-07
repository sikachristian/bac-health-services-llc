import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const approaches = [
  {
    title: "Cognitive Behaviour Therapy (CBT)",
    description: "A structured, goal-oriented therapy that helps identify and change negative thought patterns and behaviors.",
  },
  {
    title: "Trauma-Based Therapy",
    description: "We delve deep into the patient's memory of painful experiences in order to 'release' it through narration and prolonged exposure.",
  },
  {
    title: "Emotion Focused Therapy (EFT)",
    description: "Helps individuals identify, explore, and transform emotional experiences to improve well-being and relationships.",
  },
  {
    title: "Acceptance and Commitment Therapy (ACT)",
    description: "Encourages mindfulness and acceptance of difficult thoughts while committing to values-based action.",
  },
];

export default function ApproachesSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="h-screen w-full flex flex-col bg-[#FEFEFB]">
      {/* CTA Banner - top portion */}
      <div
        className={`bg-[#5B7B6F] py-12 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[24px] lg:text-[28px] font-bold text-white font-heading mb-2">
                Want to Know More? Give us a call!
              </h3>
              <p className="text-[14px] text-white/80">
                Monday - Friday: 9 am - 7 pm &nbsp;|&nbsp; Saturday - Sunday: Closed
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+12407138080"
                className="flex items-center gap-2 bg-white text-[#5B7B6F] rounded-full px-6 h-11 text-[13px] font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (240) 713-8080
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-transparent border-[1.5px] border-white text-white rounded-full px-6 h-11 text-[13px] font-semibold hover:bg-white/10 transition-colors group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approaches */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
              The Process
            </p>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1C2D3A] font-heading leading-tight">
              Our Approaches
            </h2>
            <p className="text-[15px] text-[#4A5D4A] mt-4 max-w-2xl mx-auto font-body leading-relaxed">
              Every person is different and with medication management we look to make sure that it will effectively create the outcome you are looking for. Here are some of the approaches to certain conditions with medication management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approaches.map((approach, i) => (
              <div
                key={approach.title}
                className={`bg-white rounded-2xl p-6 border border-[#E8EDE8] hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms`, transitionDuration: "700ms" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center mb-4">
                  <span className="text-[16px] font-bold text-[#5B7B6F] font-heading">{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-[#1C2D3A] font-heading mb-2">
                  {approach.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-[#6B7B6B] font-body">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
