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
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#5B7B6F] text-white">
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
