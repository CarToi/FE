"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary";
  width?: number;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  width = 120,
  onClick,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `h-[62px] rounded-[12px] text-[20px] font-[600] leading-[150%]`,
        variant === "primary"
          ? "bg-[#3560C0] text-[#F7F9FD]"
          : "bg-[#EEEFF2] text-[#79839A]",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
