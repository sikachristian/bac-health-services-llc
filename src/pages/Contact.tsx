import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/providers/trpc";
import { useState } from "react";

function ContactForm() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [smsConsent, setSmsConsent] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setSmsConsent(null);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) return;
    submitContact.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      smsConsent: smsConsent === "yes",
    });
  };

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
              Message Us
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading leading-tight mb-4">
              Book an appointment with us
            </h2>
            <p className="text-[15px] leading-[1.75] text-[#4A5D4A] mb-10 font-body">
              Send us a message and our team will get back to you as soon as possible. We're here to help you on your journey to better mental health.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#5B7B6F]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1C2D3A] mb-0.5">Email Address</p>
                  <a href="mailto:info@bachealthservices.com" className="text-[14px] text-[#4A5D4A] hover:text-[#5B7B6F] transition-colors">
                    info@bachealthservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#5B7B6F]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1C2D3A] mb-0.5">Phone Number</p>
                  <a href="tel:+12407138080" className="text-[14px] text-[#4A5D4A] hover:text-[#5B7B6F] transition-colors">
                    (240) 713-8080
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#5B7B6F]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1C2D3A] mb-0.5">Office Location</p>
                  <p className="text-[14px] text-[#4A5D4A]">
                    14300 Cherry Lane Ct #108, Laurel, MD 20707
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5B7B6F]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#5B7B6F]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1C2D3A] mb-0.5">Office Hours</p>
                  <p className="text-[14px] text-[#4A5D4A]">Monday - Friday: 9 am - 7 pm</p>
                  <p className="text-[14px] text-[#4A5D4A]">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E8EDE8] shadow-card">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[#5B7B6F]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-2">Message Sent!</h3>
                  <p className="text-[14px] text-[#6B7B6B] mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-6 h-10 text-[13px] font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-6">
                    Send us a message
                  </h3>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">First Name</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          required
                          className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                        />
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Last Name</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          required
                          className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(240) 713-8080"
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10 resize-none"
                      />
                    </div>

                    {/* SMS Consent */}
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">SMS Consent</label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setSmsConsent("yes")}
                          className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${
                            smsConsent === "yes"
                              ? "bg-[#5B7B6F] text-white"
                              : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => setSmsConsent("no")}
                          className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${
                            smsConsent === "no"
                              ? "bg-[#5B7B6F] text-white"
                              : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"
                          }`}
                        >
                          No
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8A9A8A] mt-2 leading-relaxed">
                        By checking this box, I consent to receive text messages related to Appointment Reminders / Follow-up Messages / Billing Inquiries from BAC Health Services, LLC. You can reply "STOP" at any time to opt-out. Message and data rates may apply.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitContact.isPending}
                      className="w-full bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full h-12 text-[14px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {submitContact.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <PageHeader overline="Contact Us" title="Get In Touch" />
      <ContactForm />
      <Footer />
    </div>
  );
}
