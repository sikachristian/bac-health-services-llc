import { Routes, Route } from 'react-router'
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
import PatientForm from './pages/PatientForm'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/psychotherapy" element={<Psychotherapy />} />
      <Route path="/services/medication-management" element={<MedicationManagement />} />
      <Route path="/services/access-diagnosis" element={<AccessDiagnosis />} />
      <Route path="/services/spravato" element={<Spravato />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/patient-form" element={<PatientForm />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
