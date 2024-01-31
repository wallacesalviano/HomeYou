import { cn } from "@/lib/Utis";
import { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

export const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-5", className)}>
      {children}
    </div>
  );
};

