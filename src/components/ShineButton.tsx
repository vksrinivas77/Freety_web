// src/components/ShineButton.tsx
import React from "react";

interface ShineButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "orange";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const ShineButton: React.FC<ShineButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "relative overflow-hidden font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shine-btn";

  const variantClasses: Record<string, string> = {
    primary: "bg-cta-gradient text-white shadow-lg border-0",
    secondary:
      "bg-fregcy-primary-green text-white shadow-sm hover:bg-fregcy-primary-green/90",
    orange:
      "bg-gradient-to-r from-fregcy-saffron to-fregcy-turmeric text-white shadow-lg hover:from-fregcy-saffron-dark hover:to-fregcy-turmeric-dark",
  };

  return (
    <>
      {/* Shine effect styles */}
      <style>
        {`
          .shine-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: skewX(-20deg);
          }

          .shine-btn:hover::before {
            animation: shine 1.5s ease forwards;
          }

          @keyframes shine {
            100% {
              left: 125%;
            }
          }
        `}
      </style>

      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant] ?? ""} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default ShineButton;
