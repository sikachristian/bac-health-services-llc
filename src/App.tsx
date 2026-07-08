import { useEffect } from "react";
import { Routes, Route } from 'react-router'
import { pingAppwrite } from "@/lib/appwrite";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import InsurancePage from './pages/Insurance'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Psychotherapy from './pages/Psychotherapy'
import MedicationManagement from './pages/MedicationManagement'
import AccessDiagnosis from './pages/AccessDiagnosis'
import Spravato from './pages/Spravato'
import Admin from './pages/Admin'
import PatientForm from './pages/PatientForm'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

export default function App() {
  // Auto-ping Appwrite backend on app startup to verify connectivity
  useEffect(() => {
    pingAppwrite().then(({ success, result, error }) => {
      if (success) {
        console.log("[Appwrite] Backend connected successfully:", result);
      } else {
        console.warn("[Appwrite] Backend connection failed:", error);
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/psychotherapy" element={<Psychotherapy />} />
      <Route path="/services/medication-management" element={<MedicationManagement />} />
      <Route path="/services/access-diagnosis" element={<AccessDiagnosis />} />
      <Route path="/services/spravato" element={<Spravato />} />
      <Route path="/services/:slug" element={<Services />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/patient-form" element={<PatientForm />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
