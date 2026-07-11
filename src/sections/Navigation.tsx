import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Insurance", href: "/insurance" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Patient Form", href: "/patient-form" },
];

const serviceDropdown = [
  { label: "Access & Diagnosis", href: "/services/access-diagnosis" },
  { label: "Medication Management", href: "/services/medication-management" },
  { label: "Psychotherapy", href: "/services/psychotherapy" },
  { label: "Adjustment Therapy", href: "/services/adjustment-therapy" },
  { label: "Supportive Psychotherapy", href: "/services/supportive-psychotherapy" },
  { label: "Talk Therapy", href: "/services/talk-therapy" },
  { label: "Individual Therapy", href: "/services/individual-therapy" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isHome = location.pathname === "/";

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/dark-logo.png"
              alt="BAC Health Services"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={link.href}
                  aria-haspopup={link.hasDropdown ? "true" : undefined}
                  aria-expanded={link.hasDropdown ? dropdownOpen : undefined}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors
                    ${isActive(link.href)
                      ? "text-[#5B7B6F] bg-[#5B7B6F]/8"
                      : scrolled || !isHome
                        ? "text-[#1C2D3A] hover:text-[#5B7B6F] hover:bg-[#5B7B6F]/5"
                        : "text-[#1C2D3A] hover:text-[#5B7B6F] hover:bg-white/10 backdrop-blur-sm"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
                </Link>
                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-elevated border border-[#E8EDE8] py-2 overflow-hidden">
                    {serviceDropdown.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className="block px-4 py-2.5 text-[13px] text-[#4A5D4A] hover:text-[#5B7B6F] hover:bg-[#5B7B6F]/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12407138080"
              className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
                scrolled || !isHome
                  ? "text-[#1C2D3A] hover:text-[#5B7B6F]"
                  : "text-[#1C2D3A] hover:text-[#5B7B6F]"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(240) 713-8080</span>
            </a>
            <Link to="/patient-form">
              <Button
                className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full px-6 h-10 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#1C2D3A]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full Screen */}
      {mobileOpen && (
        <div
          role="menu"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[72px] z-40 lg:hidden bg-white flex flex-col"
        >
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  role="menuitem"
                  className="block py-4 text-[22px] font-medium text-[#1C2D3A] hover:text-[#5B7B6F] border-b border-[#E8EDE8]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 pb-2">
                    {serviceDropdown.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className="block py-2.5 text-[15px] text-[#6B7B6B] hover:text-[#5B7B6F]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="shrink-0 px-6 py-6 border-t border-[#E8EDE8] space-y-4">
            <a
              href="tel:+12407138080"
              className="flex items-center justify-center gap-2 text-[15px] font-medium text-[#1C2D3A]"
            >
              <Phone className="w-5 h-5 text-[#5B7B6F]" />
              (240) 713-8080
            </a>
            <Link to="/patient-form" className="block" onClick={() => setMobileOpen(false)}>
              <Button className="bg-[#5B7B6F] hover:bg-[#4A6A5E] text-white rounded-full h-12 text-[15px] font-semibold w-full">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
