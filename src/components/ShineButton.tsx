import React from 'react';

interface ShineButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'orange';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ShineButton: React.FC<ShineButtonProps> = ({ 
  children, 
  className = '',
  variant = 'primary',
  onClick,
  type = 'button'
}) => {
  const baseClasses = "relative overflow-hidden font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shine-effect";
  
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    orange: "bg-orange-500 text-white hover:bg-orange-600"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ShineButton;