type SectionDecorProps = {
  variant?: "blue" | "violet" | "cyan" | "emerald";
};

const colors = {
  blue: "bg-orange-300/25",
  violet: "bg-rose-300/20",
  cyan: "bg-amber-300/20",
  emerald: "bg-amber-300/15",
};

export function SectionDecor({ variant = "blue" }: SectionDecorProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`hero-orb absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl ${colors[variant]}`} />
      <div className={`hero-orb-delayed absolute -right-16 top-1/3 h-48 w-48 rounded-full blur-3xl ${colors[variant]}`} />
      <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-orange-200/15 blur-2xl" />
    </div>
  );
}
