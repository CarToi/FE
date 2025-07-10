import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative m-4 h-[80vh] max-h-[560px] w-full max-w-[655px] rounded-2xl bg-white px-5 py-6 shadow-lg sm:max-h-[824px] sm:rounded-4xl sm:p-10"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
