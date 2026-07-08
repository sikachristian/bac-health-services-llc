import { useState } from "react";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";
import { databases, ID, APPWRITE_CONFIG } from "@/lib/appwrite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, Loader2 } from "lucide-react";

const medicalHistoryOptions = [
  { category: "Mental Health", items: ["Generalized Anxiety Disorder", "Bipolar", "Schizophrenia", "Substance Use Disorder", "Dissociative Identity Disorders", "Borderline Personality Disorder", "Depression", "ADHD", "Eating Disorders", "Obsessive Compulsive Disorders", "ASD", "PTSD", "Behavioral And Emotional Disorders in Children"] },
  { category: "Physical Health", items: ["Chest Pain", "Respiratory", "Cardiac Disease", "Cardiovascular", "Hematological", "Lymphatic", "Neurological", "Psychiatric", "Gastrointestinal", "Genitourinary", "Weight Gain", "Weight Loss", "Musculoskeletal", "Others"] },
];

const alcoholOptions = ["Daily", "Weekly", "Monthly", "Occasionally", "Never"];

export default function PatientForm() {
  const [submitted, setSubmitted] = useState(false);
  const [medicalHistory, setMedicalHistory] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
    phone: "",
    email: "",
    takesMedication: "",
    medicationList: "",
    hasAllergies: "",
    allergyList: "",
    address: "",
    tobacco: "",
    tobaccoFrequency: "",
    illegalDrugs: "",
    drugList: "",
    alcoholFrequency: "",
    hasPhysician: "",
    reasonForVisit: "",
    availability: "",
    hasInsurance: "",
    insuranceType: "",
    preferredPharmacy: "",
    smsConsent: "",
    message: "",
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMedicalHistory = (item: string) => {
    setMedicalHistory((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await databases.createDocument(
        APPWRITE_CONFIG.database,
        APPWRITE_CONFIG.collections.PATIENTS,
        ID.unique(),
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.sex,
          insuranceProvider: formData.insuranceType,
          reasonForVisit: formData.reasonForVisit,
          preferredDate: formData.availability,
          status: "new",
          smsConsent: formData.smsConsent === "yes",
          notes: `Medication: ${formData.takesMedication === "yes" ? formData.medicationList : "None"}\nAllergies: ${formData.hasAllergies === "yes" ? formData.allergyList : "None"}\nAddress: ${formData.address}\nMedical History: ${medicalHistory.join(", ")}\nTobacco: ${formData.tobacco} ${formData.tobaccoFrequency}\nDrugs: ${formData.illegalDrugs === "yes" ? formData.drugList : "No"}\nAlcohol: ${formData.alcoholFrequency}\nPhysician: ${formData.hasPhysician}\nPharmacy: ${formData.preferredPharmacy}\nMessage: ${formData.message}`,
          createdAt: new Date().toISOString(),
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FEFEFB]">
        <Navigation />
        <div className="pt-[72px]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-3xl p-10 border border-[#E8EDE8] shadow-card text-center">
            <div className="w-20 h-20 rounded-full bg-[#5B7B6F]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#5B7B6F]" />
            </div>
            <h1 className="text-[28px] font-bold text-[#1C2D3A] font-heading mb-3">Thank You!</h1>
            <p className="text-[16px] text-[#4A5D4A] mb-2 font-body">Your patient form has been submitted successfully.</p>
            <p className="text-[14px] text-[#6B7B6B] mb-8 font-body">Our team will review your information and contact you within 24-48 hours to confirm your appointment.</p>
            <Button
              onClick={() => { setSubmitted(false); setFormData({ ...formData, firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "", sex: "", takesMedication: "", medicationList: "", hasAllergies: "", allergyList: "", address: "", tobacco: "", tobaccoFrequency: "", illegalDrugs: "", drugList: "", alcoholFrequency: "", hasPhysician: "", reasonForVisit: "", availability: "", hasInsurance: "", insuranceType: "", preferredPharmacy: "", smsConsent: "", message: "", privacyAccepted: false }); setMedicalHistory([]); }}
              className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-6 h-11 text-[13px] font-semibold"
            >
              Submit Another Form
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <div className="pt-[72px]" />

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Section 1: Personal Information */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Personal Information</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">First Name <span className="text-red-500">*</span></label>
                <Input required value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Last Name <span className="text-red-500">*</span></label>
                <Input required value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Date of Birth <span className="text-red-500">*</span></label>
                <Input type="date" required value={formData.dateOfBirth} onChange={(e) => update("dateOfBirth", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Sex <span className="text-red-500">*</span></label>
                <div className="flex gap-4 mt-2">
                  {["Male", "Female"].map((s) => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sex" value={s.toLowerCase()} checked={formData.sex === s.toLowerCase()} onChange={(e) => update("sex", e.target.value)} className="w-4 h-4 accent-[#5B7B6F]" />
                      <span className="text-[14px] text-[#4A5D4A]">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Phone Number <span className="text-red-500">*</span></label>
                <Input type="tel" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Email Address <span className="text-red-500">*</span></label>
                <Input type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
            </div>
          </section>

          {/* Section 2: Medication */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Medication Information</h2>
            <div className="space-y-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you take medication? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("takesMedication", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.takesMedication === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              {formData.takesMedication === "yes" && (
                <div>
                  <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Kindly provide a list of the medications <span className="text-red-500">*</span></label>
                  <Textarea value={formData.medicationList} onChange={(e) => update("medicationList", e.target.value)} rows={3} className="rounded-xl border-[#E8EDE8] resize-none" />
                </div>
              )}
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you have medication allergies? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("hasAllergies", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.hasAllergies === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              {formData.hasAllergies === "yes" && (
                <div>
                  <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Kindly provide a list of the allergies <span className="text-red-500">*</span></label>
                  <Textarea value={formData.allergyList} onChange={(e) => update("allergyList", e.target.value)} rows={3} className="rounded-xl border-[#E8EDE8] resize-none" />
                </div>
              )}
            </div>
          </section>

          {/* Section 3: Address */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Address & Contact</h2>
            <div>
              <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Full Address <span className="text-red-500">*</span></label>
              <Textarea required value={formData.address} onChange={(e) => update("address", e.target.value)} rows={3} className="rounded-xl border-[#E8EDE8] resize-none" />
            </div>
          </section>

          {/* Section 4: Medical History */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Medical History</h2>
            <p className="text-[13px] text-[#6B7B6B] mb-4">Select all conditions that apply:</p>
            <div className="space-y-6">
              {medicalHistoryOptions.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[14px] font-semibold text-[#5B7B6F] mb-3">{group.category}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {group.items.map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer p-2 rounded-lg hover:bg-[#F5F7F5] transition-colors">
                        <input type="checkbox" checked={medicalHistory.includes(item)} onChange={() => toggleMedicalHistory(item)} className="w-4 h-4 rounded accent-[#5B7B6F] shrink-0" />
                        <span className="text-[13px] text-[#4A5D4A] leading-tight">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Lifestyle */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Lifestyle & Habits</h2>
            <div className="space-y-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you use or have history of tobacco? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("tobacco", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.tobacco === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              {formData.tobacco === "yes" && (
                <div>
                  <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">How often do you consume tobacco? <span className="text-red-500">*</span></label>
                  <Input value={formData.tobaccoFrequency} onChange={(e) => update("tobaccoFrequency", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
                </div>
              )}
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you use or have history of using illegal drugs? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("illegalDrugs", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.illegalDrugs === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              {formData.illegalDrugs === "yes" && (
                <div>
                  <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Kindly provide a list of the illegal drugs <span className="text-red-500">*</span></label>
                  <Textarea value={formData.drugList} onChange={(e) => update("drugList", e.target.value)} rows={2} className="rounded-xl border-[#E8EDE8] resize-none" />
                </div>
              )}
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">How often do you consume alcohol? <span className="text-red-500">*</span></label>
                <select required value={formData.alcoholFrequency} onChange={(e) => update("alcoholFrequency", e.target.value)} className="w-full h-11 rounded-xl border border-[#E8EDE8] bg-white px-4 text-[14px] text-[#1C2D3A] focus:border-[#5B7B6F] focus:outline-none">
                  <option value="">Select frequency</option>
                  {alcoholOptions.map((o) => <option key={o} value={o.toLowerCase()}>{o}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Section 6: Visit Details */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Visit Details</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you have a physician? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("hasPhysician", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.hasPhysician === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Reason for visit? <span className="text-red-500">*</span></label>
                <Input required value={formData.reasonForVisit} onChange={(e) => update("reasonForVisit", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">What date and time are you available? <span className="text-red-500">*</span></label>
                <Input required value={formData.availability} onChange={(e) => update("availability", e.target.value)} placeholder="e.g., Monday 2pm" className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Preferred Pharmacy <span className="text-red-500">*</span></label>
                <Input required value={formData.preferredPharmacy} onChange={(e) => update("preferredPharmacy", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
              </div>
            </div>
          </section>

          {/* Section 7: Insurance */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Insurance Information</h2>
            <div className="space-y-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">Do you have insurance? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("hasInsurance", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.hasInsurance === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
              </div>
              {formData.hasInsurance === "yes" && (
                <div>
                  <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">What type of insurance?</label>
                  <Input value={formData.insuranceType} onChange={(e) => update("insuranceType", e.target.value)} className="h-11 rounded-xl border-[#E8EDE8]" />
                </div>
              )}
            </div>
          </section>

          {/* Section 8: Additional Message */}
          <section className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8EDE8] shadow-card">
            <h2 className="text-[18px] font-semibold text-[#1C2D3A] font-heading mb-6 pb-3 border-b border-[#E8EDE8]">Additional Information</h2>
            <div className="space-y-5">
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-1.5 block">Message</label>
                <Textarea value={formData.message} onChange={(e) => update("message", e.target.value)} rows={4} placeholder="Any additional information you'd like us to know..." className="rounded-xl border-[#E8EDE8] resize-none" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[#1C2D3A] mb-2 block">SMS Consent <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  {["yes", "no"].map((v) => (
                    <button key={v} type="button" onClick={() => update("smsConsent", v)} className={`px-5 h-9 rounded-full text-[13px] font-medium transition-all ${formData.smsConsent === v ? "bg-[#5B7B6F] text-white" : "bg-[#F5F7F5] text-[#4A5D4A] hover:bg-[#E8EDE8]"}`}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>
                  ))}
                </div>
                <p className="text-[11px] text-[#8A9A8A] mt-2 leading-relaxed">
                  By checking this box, I consent to receive text messages related to Appointment Reminders / Follow-up Messages / Billing Inquiries from BAC Health Services, LLC. You can reply "STOP" at any time to opt-out. Message and data rates may apply.
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-[#F5F7F5] transition-colors">
                <input type="checkbox" required checked={formData.privacyAccepted} onChange={(e) => update("privacyAccepted", e.target.checked)} className="w-4 h-4 rounded accent-[#5B7B6F] mt-0.5 shrink-0" />
                <span className="text-[12px] text-[#6B7B6B] leading-relaxed">
                  By checking this box, I consent to receive text messages related to Appointment Reminders / Follow-up Messages / Billing Inquiries from BAC Health Services, LLC. You can reply "STOP" at any time to opt-out. Message and data rates may apply. Message frequency may vary. Text HELP for assistance. For more information, please visit our <a href="/privacy-policy" className="text-[#5B7B6F] underline">Privacy Policy</a> and <a href="/sms-terms" className="text-[#5B7B6F] underline">SMS Terms and Conditions</a>.
                </span>
              </label>
            </div>
          </section>

          {/* Submit */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-10 h-12 text-[14px] font-semibold shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
              ) : (
                <><Send className="w-4 h-4" /> Submit Patient Form</>
              )}
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
