export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-10 md:px-[120px] ${className}`}>
      {children}
    </div>
  );
}
