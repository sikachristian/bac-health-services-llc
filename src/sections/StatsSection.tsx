import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: 865, suffix: "", label: "Happy Clients" },
  { value: 1398, suffix: "+", label: "Sessions Per Year" },
  { value: 6600, suffix: "+", label: "Successful Therapy" },
  { value: 5, suffix: "+", label: "Years in Business" },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.round(eased * target);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section id="stats" ref={ref} aria-label="Statistics" className="w-full flex flex-col items-center justify-center bg-white mt-16 py-10">
      {/* Visually hidden heading for screen readers */}
      <h2 className="sr-only">Our Impact in Numbers</h2>

      {/* Stats Grid — uses description list for semantic number/label pairs */}
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 w-full">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <dt className="text-[52px] lg:text-[64px] font-bold text-[#5B7B6F] font-heading leading-none mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            </dt>
            <dd className="text-[14px] lg:text-[15px] text-[#4A5D4A] font-medium tracking-wide">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
