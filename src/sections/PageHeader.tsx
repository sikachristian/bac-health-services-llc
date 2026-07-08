interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="text-[32px] lg:text-[40px] leading-[1.15] font-bold text-[#1C2D3A] font-heading pt-[72px]">
      {title}
    </h1>
  );
}
