import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import InsurancePage from './pages/Insurance'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Admin from './pages/Admin'
import PatientForm from './pages/PatientForm'
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<Services />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/patient-form" element={<PatientForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
