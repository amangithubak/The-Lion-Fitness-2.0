import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        centered ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-gold font-display tracking-[0.2em] text-sm md:text-base font-medium uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-lg md:text-xl max-w-2xl mt-2 font-light">
          {description}
        </p>
      )}
    </div>
  );
}
