import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, CreditCard, Phone } from "lucide-react";

const insuranceProviders = [
  "United Healthcare (UHC)",
  "United Behavioral Health (UBH)",
  "Tricare",
  "Optum",
  "Medicare",
  "Medicaid",
  "Humana",
  "GEHA",
  "Evernorth",
  "Cigna",
  "Carelon",
  "CareFirst",
  "BlueCross BlueShield",
  "BHS",
  "Behavioral Health Systems",
  "Beacon Health Options",
  "Anthem",
  "Amerigroup",
  "Aetna",
];

function InsuranceGrid() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#5B7B6F]" />
          </div>
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1C2D3A] font-heading leading-tight mb-4">
            We Accept All These Insurances
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#4A5D4A] font-body">
            We can help you verify benefits and assist with any prior authorizations that may be needed for your treatment. Our dedicated team will guide you through every step of the process. If you do not have insurance, we offer affordable self-pay options and will work with you to create a payment plan that fits your financial situation. Your mental health is important, and we want to make sure you get the care you need, regardless of your insurance status.
          </p>
        </div>

        {/* Insurance Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {insuranceProviders.map((provider, i) => (
            <div
              key={provider}
              className={`flex items-center gap-3 bg-[#FEFEFB] rounded-xl px-5 py-4 border border-[#E8EDE8] hover:border-[#5B7B6F]/30 hover:shadow-sm transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 50}ms`, transitionDuration: "600ms" }}
            >
              <CreditCard className="w-4 h-4 text-[#5B7B6F] shrink-0" />
              <span className="text-[13px] font-medium text-[#1C2D3A]">{provider}</span>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[14px] text-[#6B7B6B] font-body">
            and other insurance providers. Contact us to verify your coverage.
          </p>
        </div>
      </div>
    </section>
  );
}

function SelfPaySection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FEFEFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-3xl p-10 lg:p-14 border border-[#E8EDE8] shadow-card transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
                No Insurance?
              </p>
              <h3 className="text-[28px] font-bold text-[#1C2D3A] font-heading leading-tight mb-4">
                Affordable Self-Pay Options
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#4A5D4A] font-body mb-6">
                We offer affordable self-pay options and will work with you to create a payment plan that fits your financial situation. Don't let insurance concerns prevent you from getting the mental health care you deserve.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+12407138080"
                  className="inline-flex items-center gap-2 bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-6 h-11 text-[13px] font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call to Discuss Options
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-[#5B7B6F]/5 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-[#5B7B6F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PageHeader title="We Accept Your Insurance" />
        <InsuranceGrid />
        <SelfPaySection />
      </main>
      <Footer />
    </div>
  );
}
