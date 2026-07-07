import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Phone, BookOpen, ClipboardList } from "lucide-react";
import { Link } from "react-router";

const resources = [
  {
    title: "Patient Form",
    description: "Fill out our patient information form to get started with your mental health journey. This helps us understand your needs better.",
    icon: <ClipboardList className="w-7 h-7 text-[#5B7B6F]" />,
    action: "Fill Form",
    href: "#",
  },
  {
    title: "Insurance Verification",
    description: "Learn how we can help verify your insurance benefits and assist with prior authorizations for your treatment.",
    icon: <FileText className="w-7 h-7 text-[#5B7B6F]" />,
    action: "Learn More",
    href: "/insurance",
  },
  {
    title: "Appointment Scheduling",
    description: "Schedule your appointment with ease. We offer flexible scheduling options including virtual and in-person visits.",
    icon: <Phone className="w-7 h-7 text-[#5B7B6F]" />,
    action: "Book Now",
    href: "/contact",
  },
  {
    title: "Mental Health Education",
    description: "Access educational materials about various mental health conditions, treatment options, and wellness strategies.",
    icon: <BookOpen className="w-7 h-7 text-[#5B7B6F]" />,
    action: "Coming Soon",
    href: "#",
  },
];

function ResourcesGrid() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1C2D3A] font-heading leading-tight mb-4">
            Resources for Our Patients
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#4A5D4A] max-w-2xl mx-auto font-body">
            We've compiled helpful resources to support you on your mental health journey. From patient forms to educational materials, we're here to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, i) => (
            <div
              key={resource.title}
              className={`bg-[#FEFEFB] rounded-2xl p-8 border border-[#E8EDE8] hover:shadow-card transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5B7B6F]/10 flex items-center justify-center mb-5">
                {resource.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-3">
                {resource.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#6B7B6B] mb-5 font-body">
                {resource.description}
              </p>
              <Link
                to={resource.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5B7B6F] hover:gap-2 transition-all"
              >
                {resource.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHeader overline="Resources" title="Patient Resources" />
      <ResourcesGrid />
      <Footer />
    </div>
  );
}
