import Navigation from "@/sections/Navigation";
import PageHeader from "@/sections/PageHeader";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/providers/trpc";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

const serviceTypes = [
  "Access & Diagnosis",
  "Medication Management",
  "Psychotherapy",
  "Adjustment Therapy",
  "Supportive Psychotherapy",
  "Talk Therapy",
  "Individual Therapy",
];

export default function PatientForm() {
  const [submitted, setSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    insuranceProvider: "",
    insuranceId: "",
    reasonForVisit: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const submitPatient = trpc.patient.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPatient.mutate({
      ...formData,
      smsConsent: smsConsent === "yes",
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <PageHeader overline="Patient Form" title="New Patient Registration" />

      <div className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E8EDE8] shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-[#5B7B6F]" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1C2D3A] font-heading mb-3">Thank You!</h3>
                <p className="text-[15px] text-[#4A5D4A] mb-2">Your patient form has been submitted successfully.</p>
                <p className="text-[14px] text-[#6B7B6B] mb-6">Our team will review your information and contact you within 24-48 hours to confirm your appointment.</p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "", lastName: "", email: "", phone: "",
                      dateOfBirth: "", gender: "", insuranceProvider: "",
                      insuranceId: "", reasonForVisit: "", preferredDate: "",
                      preferredTime: "", notes: "",
                    });
                    setSmsConsent(null);
                  }}
                  className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-6 h-11 text-[13px] font-semibold"
                >
                  Submit Another Form
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-[22px] font-semibold text-[#1C2D3A] font-heading mb-2">Patient Information</h2>
                  <p className="text-[14px] text-[#6B7B6B]">Please fill out all required fields. Your information is secure and confidential.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        required
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        required
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Email *</label>
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
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(240) 713-8080"
                        required
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                  </div>

                  {/* DOB & Gender */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Date of Birth</label>
                      <Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full h-12 rounded-xl border border-[#E8EDE8] bg-white px-4 text-[14px] text-[#1C2D3A] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10 focus:outline-none"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Insurance Provider</label>
                      <Input
                        value={formData.insuranceProvider}
                        onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                        placeholder="e.g., BlueCross BlueShield"
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Insurance ID #</label>
                      <Input
                        value={formData.insuranceId}
                        onChange={(e) => setFormData({ ...formData, insuranceId: e.target.value })}
                        placeholder="Your insurance member ID"
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Reason for Visit *</label>
                    <select
                      value={formData.reasonForVisit}
                      onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                      required
                      className="w-full h-12 rounded-xl border border-[#E8EDE8] bg-white px-4 text-[14px] text-[#1C2D3A] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="h-12 rounded-xl border-[#E8EDE8] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Preferred Time</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full h-12 rounded-xl border border-[#E8EDE8] bg-white px-4 text-[14px] text-[#1C2D3A] focus:border-[#5B7B6F] focus:ring-[#5B7B6F]/10 focus:outline-none"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Additional Notes</label>
                    <Textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any additional information you'd like us to know..."
                      rows={3}
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
                          smsConsent === "yes" ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setSmsConsent("no")}
                        className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${
                          smsConsent === "no" ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"
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
                    disabled={submitPatient.isPending}
                    className="w-full bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full h-12 text-[14px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitPatient.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Patient Form
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
