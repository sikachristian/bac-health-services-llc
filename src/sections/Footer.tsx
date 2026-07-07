import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Medication Management", href: "/services/medication-management" },
  { label: "Healthcare Training", href: "/resources" },
  { label: "BAC Staffing Agency", href: "/about" },
  { label: "Talk Therapy", href: "/services/talk-therapy" },
  { label: "Individual Therapy", href: "/services/individual-therapy" },
];

const quickLinks = [
  { label: "Patient Form", href: "/resources" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Insurance", href: "/insurance" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2D3A] text-white">
      {/* First Responder Training Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-1 font-heading">
                First Responder Training
              </p>
              <p className="text-[14px] text-white/70">
                Basic Life Support (BLS), Cardiopulmonary Resuscitation (CPR), Automated External Defibrillator (AED) training, First Aid, and Advanced Cardiovascular Life Support (ACLS).
              </p>
            </div>
            <p className="text-[13px] text-white/50 shrink-0">
              Treating Depression, Anxiety, Bipolar, PTSD, Schizophrenia, SUD, BPD
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/assets/dark-logo.png" alt="BAC Health Services" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[13px] leading-[1.7] text-white/60 mb-5 font-body">
              Compassionate mental health care tailored just for you. In-person & virtual appointments available.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5B7B6F] transition-colors"
                  aria-label={s.label}
                >
                  {s.label === "Facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  )}
                  {s.label === "X" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  )}
                  {s.label === "Instagram" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  )}
                  {s.label === "LinkedIn" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-white/60 hover:text-[#5B7B6F] transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-white/60 hover:text-[#5B7B6F] transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#5B7B6F] mt-0.5 shrink-0" />
                <a href="mailto:info@bachealthservices.com" className="text-[13px] text-white/60 hover:text-[#5B7B6F] transition-colors">
                  info@bachealthservices.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5B7B6F] mt-0.5 shrink-0" />
                <span className="text-[13px] text-white/60">
                  14300 Cherry Lane Court, Suite 108, Laurel, MD 20707
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#5B7B6F] mt-0.5 shrink-0" />
                <a href="tel:+12407138080" className="text-[13px] text-white/60 hover:text-[#5B7B6F] transition-colors">
                  (240) 713-8080
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-white/40">
              Copyright 2025 - All Rights Reserved By BAC Health Services, LLC
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-[12px] text-white/40 hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sms-terms" className="text-[12px] text-white/40 hover:text-white/60 transition-colors">
                SMS Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
