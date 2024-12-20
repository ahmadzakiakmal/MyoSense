import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, className, type = "button", disabled = false, onClick = () => {} }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-[10px] bg-dark-1 hover:bg-dark-2 transition-colors active:bg-black active:shadow-[0_0_2px_rgba(0,0,0,.9)] rounded-[10px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed focus:outline focus:outline-dark-1 focus:outline-offset-[2px] focus:outline-[2px] ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
