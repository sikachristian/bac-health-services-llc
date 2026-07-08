const features = [
  { icon: "board-certified", label: "Board-Certified", sublabel: "Providers" },
  { icon: "virtual", label: "Virtual &", sublabel: "In-Person Care" },
  { icon: "adhd", label: "ADHD", sublabel: "Testing" },
  { icon: "medication", label: "Medication", sublabel: "Management" },
  { icon: "insurance", label: "Insurance", sublabel: "Accepted" },
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "board-certified":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-white">
          <path d="M18 4L6 10V17C6 24.18 11.28 30.92 18 33C24.72 30.92 30 24.18 30 17V10L18 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M13 18L16.5 21.5L23 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "virtual":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-white">
          <rect x="6" y="10" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 16H30" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="13.5" r="1" fill="currentColor" />
          <circle cx="16" cy="13.5" r="1" fill="currentColor" />
          <circle cx="20" cy="13.5" r="1" fill="currentColor" />
          <path d="M15 22L18 24L21 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "adhd":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-white">
          <path d="M18 6C18 6 12 12 12 18C12 21.3137 14.6863 24 18 24C21.3137 24 24 21.3137 24 18C24 12 18 6 18 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M18 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="18" cy="12" r="1" fill="currentColor" />
          <path d="M10 20C8 22 8 26 10 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M26 20C28 22 28 26 26 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "medication":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-white">
          <rect x="10" y="6" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="24" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case "insurance":
      return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-white">
          <rect x="6" y="8" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 14H30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 20H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 24H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M24 20.5V22L25 23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeatureBar() {
  return (
    <section aria-label="Key features" className="relative z-10 w-full -mt-16 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-0">
            {features.map((f, i) => (
              <div
                key={f.icon}
                className={`flex flex-col items-center text-center py-2 ${
                  i < features.length - 1 ? "lg:border-r lg:border-white/20" : ""
                }`}
              >
                <div className="mb-1.5" aria-hidden="true">
                  <FeatureIcon type={f.icon} />
                </div>
                <span className="text-[12px] font-semibold text-white leading-tight">
                  {f.label}
                </span>
                <span className="text-[12px] font-semibold text-white leading-tight">
                  {f.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
