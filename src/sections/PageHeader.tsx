interface PageHeaderProps {
  overline: string;
  title: string;
}

export default function PageHeader({ overline, title }: PageHeaderProps) {
  return (
    <div className="relative bg-[#1C2D3A] pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-3 font-heading">
          {overline}
        </p>
        <h1 className="text-[36px] lg:text-[48px] leading-[1.1] font-bold text-white font-heading max-w-2xl">
          {title}
        </h1>
        {/* Accent line */}
        <div className="flex items-center gap-0 mt-6">
          <div className="w-10 h-0.5 bg-[#5B7B6F]" />
          <div className="w-4 h-0.5 bg-[#5B7B6F]/40" />
        </div>
      </div>
    </div>
  );
}
