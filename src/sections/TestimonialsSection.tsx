import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I've felt genuinely supported and cared for at this behavioral health clinic. The therapists and staff are incredibly kind, compassionate, and understanding, which made it easy for me to open up and trust the process.",
    name: "Samuel Williams",
    title: "Founder IT Hub",
  },
  {
    quote: "I found the staff professional and kind, explaining the process to me every step of the way. I understand myself more clearly now and have begun to make positive changes in my life. There was such a high level of customer service.",
    name: "Jessica Nickelson",
    title: "Marketing Executive",
  },
  {
    quote: "The environment is calming, and appointments are flexible, making it convenient to prioritize my mental health. I feel like I'm finally making real progress here, and I'm grateful for the guidance and tools they've provided.",
    name: "Karren Johnson",
    title: "Business Lawyer",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="testimonials" ref={ref} aria-label="Client testimonials" className="w-full py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
            Testimonials
          </p>
          <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1C2D3A] font-heading leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`bg-[#FEFEFB] rounded-2xl p-7 border border-[#E8EDE8] hover:shadow-card transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-[#5B7B6F]/30 mb-4" aria-hidden="true" />
              <blockquote className="text-[14px] leading-[1.75] text-[#4A5D4A] mb-6 font-body italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 pt-4 border-t border-[#E8EDE8]">
                <div className="w-10 h-10 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center" aria-hidden="true">
                  <span className="text-[14px] font-semibold text-[#5B7B6F]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <cite className="not-italic">
                  <p className="text-[14px] font-semibold text-[#1C2D3A]">{t.name}</p>
                  <p className="text-[12px] text-[#6B7B6B]">{t.title}</p>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
