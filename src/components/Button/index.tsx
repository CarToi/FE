"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  color: "blue" | "gray";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  color = "blue",
  onClick,
  disabled = false,
  className = "",
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        color === "blue" &&
          "bg-[#3560C0] text-[#F7F9FD] transition-colors duration-100 hover:bg-[#2A4C98] active:bg-[#1F3870]",
        color === "gray" &&
          "bg-[#EEEFF2] text-[#79839A] transition-colors duration-100 hover:bg-[#D1D4DC] active:bg-[#B3B9C6]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
