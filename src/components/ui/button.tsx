import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variants = {
  primary: "bg-accent text-bg hover:bg-accent-bright border border-transparent",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-accent-border hover:text-accent-bright",
  ghost: "bg-transparent text-text-muted hover:text-text border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
      {icon}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
