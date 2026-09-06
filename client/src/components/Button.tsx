import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow, children, ...props }, ref) => {
    const variants = {
      primary: "bg-gold text-background hover:bg-bright-gold",
      secondary: "bg-card text-foreground hover:bg-white hover:text-background border border-border",
      outline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-background",
    };

    const sizes = {
      default: "h-12 px-6 py-3 text-sm",
      lg: "h-14 px-8 py-4 text-base",
      sm: "h-10 px-4 py-2 text-xs",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap uppercase font-display tracking-widest font-semibold transition-all duration-300 group disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
