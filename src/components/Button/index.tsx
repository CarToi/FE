"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  color: "blue" | "gray" | "white";
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
        color === "blue" && "bg-[#3560C0] text-[#F7F9FD]",
        color === "gray" && "bg-[#EEEFF2] text-[#79839A]",
        color === "white" && "bg-white text-[#79839A]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
