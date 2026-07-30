import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  light?: boolean;
};

const sizes = {
  sm: 36,
  md: 48,
  lg: 72,
  xl: 140,
} as const;

export function BrandLogo({
  className = "",
  size = "md",
  priority = false,
  showWordmark = false,
  wordmarkClassName = "",
  light = false,
}: BrandLogoProps) {
  const px = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.jpg"
        alt="Bloom & Beyond logo"
        width={px}
        height={px}
        priority={priority}
        className={`rounded-full object-cover shadow-sm ${
          light ? "ring-1 ring-white/50" : ""
        }`}
      />
      {showWordmark && (
        <span
          className={`font-display ${
            light ? "text-white" : "text-charcoal"
          } ${wordmarkClassName || "text-xl sm:text-2xl"}`}
        >
          Bloom &amp; Beyond
        </span>
      )}
    </span>
  );
}
