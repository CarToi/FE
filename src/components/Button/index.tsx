"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary";
  style?: "filled" | "outlined";
  width?: number;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  style = "filled",
  width = 120,
  onClick,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `h-[62px] rounded-[12px] text-[20px] leading-[150%] font-[600]`,
        variant === "primary"
          ? "bg-[#3560C0] text-[#F7F9FD]"
          : "bg-[#EEEFF2] text-[#79839A]",
        style === "outlined" ? "border-2 border-[#577DD1]" : "",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
